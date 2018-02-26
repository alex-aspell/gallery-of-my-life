CREATE TABLE images (
	id serial primary key,
	image varchar(80),
	significance varchar(500),
    votes integer
);

NSERT INTO images (image, significance, votes)
VALUES ('2018-01-30 17.37.36.jpg', 'This photo was taken when my best friend and I were traveling in Europe. It is also the best photo of me in existence' ,0),
('340567_10150437914326713_609099576_o.jpg', 'My family enjoyed taking fun Christmas photos and wearing fake moustaches. This photo combined those two passions and shows our sense of humor.', 0),
('1004700_10100103592147385_983803492_n.jpg', 'This is from a trip my sister Becky and I took to visit our sister Katie when she was living in Brooklyn. It was effectively the first time we were all together as adults and the source of some of my best memories.', 0),
('1069287_10152099276232575_333780569_n.jpg', 'This photo is from my trip to Peru with friends from high school. The other men in the photo are a group of Canadians that we met on a train because they were talking about the Lord of the Rings. We then traveled with them for a week.', 0),
('1927729_606026655580_5656_n.jpg', 'As a child, I was a nationally ranked Irish dancer. I do not have a lot of pictures of it and I was very young but it is an important part of who I am.', 0),
('10411758_292808050898609_5029593618857296241_n.jpg', 'My best friend and I took a 10 day road trip together one summer. It was an important experience for our friendship.', 0),
('10599205_10204847337248938_5029881328944445668_n.jpg', 'This photo is from my trip to Iceland with two of my good friends from high school. It is one of my best experiences in my entire life.', 0),
('13227143_10210098570446486_3056764105188660393_n.jpg', 'This photo is from a day hike my family did while we were in Berkley for my sister''s master''s degree graduation. It was the last trip we took as a family', 0); 