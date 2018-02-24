const app = angular.module('galleryApp', []);
console.log('hey');
const imageController = app.controller('ImageController', ['$http', function($http){
    console.log('ng');
    let self = this; 
    self.photoArray = [];


    self.getVotes = function(){
        $http({
            method: 'GET',
            url: '/votes'
        }).then(function(response){
            console.log(response.data);
            self.photoArray = response.data;
        }).catch(function(error){
            console.log('No votes', error)
        })
    }

    self.upvote = function(photo){
        $http({
            method: 'PUT',
            url: `/votes/up/${photo.id}`
        }).then(function(response){
            console.log('Trying to upvote', response);
            self.getVotes();
        }).catch(function(error){
            console.log('No upvote', error)
        })
    }

    self.downvote = function(photo){
        $http({
            method: 'PUT',
            url: `/votes/down/${photo.id}`
        }).then(function(response){
            console.log('Trying to downvote', response);
            self.getVotes();
        }).catch(function(error){
            console.log('No downvote', error)
        })
    }

    self.getVotes();
}]); 