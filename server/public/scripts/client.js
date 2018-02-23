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

    self.getVotes();
}]); 