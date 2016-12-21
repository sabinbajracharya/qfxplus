export default function() {

  this.namespace = '/apiv1';

  let movielist = [{
                    "type": "movies",
                    "id": 6909,
                    "attributes": {
                      "movietime": "NowShowing",
                      'eventname': '3D Rogue One: A Star Wars Story',
                      "eventid": 6909,
                      "showcategory": "3D",
                      "eventratingdescription": "PG",
                      "genre": "Action",
                      "lengthinminutes": 133,
                      "eventcrews": "Felicity Jones, Mads Mikkelsen, Alan Taylor",
                      "director": "Gareth Edwards",
                      "movielength": "2 Hrs 13 Min",
                      "annotation": "The Rebellion makes a risky move to steal the plans to the Death Star, setting up the epic saga to follow.",
                      "youtubeurl": "https://www.youtube.com/embed/T_Mr2XfpADo",
                      "image": "http://qfxcinemas.com/Home/GetThumbnailImage?eventid=6909"
                    }
                  }, {
                    "type": "movies",
                    "id": 6903,
                    "attributes": {
                      "movietime": "NowShowing",
                      "eventname": "Befikre",
                      "eventid": 6903,
                      "showcategory": "2D",
                      "eventratingdescription": "Adult",
                      "genre": "Romantic",
                      "lengthinminutes": 132,
                      "eventcrews": "Ranveer Singh, Vaani Kapoor",
                      "director": "Aditya Chopra",
                      "movielength": "2 Hrs 12 Min",
                      "annotation": "Befikre is a story that celebrates being carefree in love. A quintessential Delhi boy Dharam (Ranveer Singh) comes to Paris for work in search of an adventure. Just when he was about to embark on` this journey of his life he bumps into a wild, free spirited, French born Indian.",
                      "youtubeurl": "https://www.youtube.com/embed/p7X7mwcEJ-w",
                      "image": "http://qfxcinemas.com/Home/GetThumbnailImage?eventid=6903"
                    }
                  }, {
                    "type": "movies",
                    "id": 6866,
                    "attributes": {
                      "movietime": "NowShowing",
                      "eventname": "Jatra",
                      "eventid": 6866,
                      "showcategory": "2D",
                      "eventratingdescription": "Universal",
                      "genre": "Comedy",
                      "lengthinminutes": 146,
                      "eventcrews": "Bipin Karki, RabindraS. Baniya, Barsha Raut, Prabin Khatiwada",
                      "director": "Pradeep Bhattarai",
                      "movielength": "2 Hrs 26 Min",
                      "annotation": "Jatra is a tale of three shopkeepers struggling to make ends meet in Ason Galli, Kathmandu accidently finding fortune which can change their lives.However, the same fortune brings series of curses that brings turbulence in their respective lives thus ensuring riot of laughters and tears.",
                      "youtubeurl": "https://www.youtube.com/embed/c5YQejT_ybk",
                      "image": "http://qfxcinemas.com/Home/GetThumbnailImage?eventid=6866"
                    }
                  }, {
                    "type": "movies",
                    "id": 6899,
                    "attributes": {
                      "movietime": "NowShowing",
                      "eventname": "3D: Moana",
                      "eventid": 6899,
                      "showcategory": "3D",
                      "eventratingdescription": "Universal",
                      "genre": "Animation",
                      "lengthinminutes": 113,
                      "eventcrews": "Dwayne Johnson, Aulii Cravalho, Rachel House",
                      "director": "Ron Clements",
                      "movielength": "1 Hrs 53 Min",
                      "annotation": "A young woman uses her navigational talents to set sail for a fabled island. Joining her on the adventure is her hero, the legendary demi-god Maui.",
                      "youtubeurl": "https://www.youtube.com/embed/LKFuXETZUsI",
                      "image": "http://qfxcinemas.com/Home/GetThumbnailImage?eventid=6899"
                    }
                  }, {
                    "type": "movies",
                    "id": 6901,
                    "attributes": {
                      "movietime": "NowShowing",
                      "eventname": "White Sun",
                      "eventid": 6901,
                      "showcategory": "2D",
                      "eventratingdescription": "Universal",
                      "genre": "Social",
                      "lengthinminutes": 90,
                      "eventcrews": "Dayahang Rai, RabindraS. Baniya, Asha Magarati, Sumi Malla, Amrit Pariyar",
                      "director": "Deepak Rauniyar",
                      "movielength": "1 Hrs 30 Min",
                      "annotation": "When his father dies, anti-regime partisan Chandra must travel to his remote mountain village after nearly a decade away. Little Pooja is anxiously awaiting the man she thinks is her father, but she's confused when Chandra arrives with Badri, a young street orphan rumored to be his son. Chandra must face his brother Suraj, who was on the opposing side during the Nepali civil war. The two brothers cannot put aside political feelings while carrying their father's body down the steep mountain path to the river for cremation. Suraj storms off in a rage, leaving Chandra with no other men strong enough to help. Under pressure from the village elders, Chandra must seek help from outside the village to obey the rigid caste and discriminatory gender traditions he fought to eliminate during the war. Chandra searches for a solution in neighboring villages, among the police, guests at a local wedding, and rebel guerrillas...",
                      "youtubeurl": "https://www.youtube.com/embed/ADtFVw-AdS0",
                      "image": "http://qfxcinemas.com/Home/GetThumbnailImage?eventid=6901"
                    }
                  }, {
                    "type": "movies",
                    "id": 6912,
                    "attributes": {
                      "movietime": "NowShowing",
                      "eventname": "Wajah Tum Ho",
                      "eventid": 6912,
                      "showcategory": "2D",
                      "eventratingdescription": "Adult",
                      "genre": "Drama",
                      "lengthinminutes": 136,
                      "eventcrews": "Gurmeet Choudhary, Sharman Joshi, Rajniesh Duggall, Sana Khan",
                      "director": "VishalPandya ",
                      "movielength": "2 Hrs 16 Min",
                      "annotation": "People get entangled in a mystery when a murder is committed on live television.",
                      "youtubeurl": "https://www.youtube.com/embed/sBueTW-W7Qc",
                      "image": "http://qfxcinemas.com/Home/GetThumbnailImage?eventid=6912"
                    }
                  }, {
                    "type": "movies",
                    "id": 6872,
                    "attributes": {
                      "movietime": "NowShowing",
                      "eventname": "3D: Fantastic Beasts and Where to Find Them",
                      "eventid": 6872,
                      "showcategory": "3D",
                      "eventratingdescription": "PG",
                      "genre": "Adventure",
                      "lengthinminutes": 133,
                      "eventcrews": "Eddie Redmayne, Colin Farrell, Ezra Miller",
                      "director": "David Yates",
                      "movielength": "2 Hrs 13 Min",
                      "annotation": "The adventures of writer Newt Scamander in New York's secret community of witches and wizards seventy years before Harry Potter reads his book in school.",
                      "youtubeurl": "https://www.youtube.com/embed/MtjfNzEVfAQ&spfreload=10",
                      "image": "http://qfxcinemas.com/Home/GetThumbnailImage?eventid=6872"
                    }
                  }, {
                    "type": "movies",
                    "id": 6905,
                    "attributes": {
                      "movietime": "ComingSoon",
                      "eventname": "3D: Passengers",
                      "eventid": 6905,
                      "showcategory": "3D",
                      "eventratingdescription": "PG",
                      "genre": "Drama",
                      "lengthinminutes": 116,
                      "eventcrews": "Jennifer Lawrence, Chris Pratt, Michael Sheen",
                      "director": "Morten Tyldum",
                      "movielength": "1 Hrs 56 Min",
                      "annotation": "A spacecraft traveling to a distant colony planet and transporting thousands of people has a malfunction in its sleep chambers. As a result, two passengers are awakened 90 years early.",
                      "youtubeurl": "https://www.youtube.com/embed/7BWWWQzTpNU",
                      "image": "http://qfxcinemas.com/Home/GetThumbnailImage?eventid=6905"
                    }
                  }, {
                    "type": "movies",
                    "id": 6907,
                    "attributes": {
                      "movietime": "ComingSoon",
                      "eventname": "Passengers",
                      "eventid": 6907,
                      "showcategory": "2D",
                      "eventratingdescription": "PG",
                      "genre": "Drama",
                      "lengthinminutes": 116,
                      "eventcrews": "Jennifer Lawrence, Chris Pratt, Michael Sheen",
                      "director": "Morten Tyldum",
                      "movielength": "1 Hrs 56 Min",
                      "annotation": "A spacecraft traveling to a distant colony planet and transporting thousands of people has a malfunction in its sleep chambers. As a result, two passengers are awakened 90 years early.",
                      "youtubeurl": "https://www.youtube.com/embed/7BWWWQzTpNU",
                      "image": "http://qfxcinemas.com/Home/GetThumbnailImage?eventid=6907"
                    }
                  }, {
                    "type": "movies",
                    "id": 6915,
                    "attributes": {
                      "movietime": "ComingSoon",
                      "eventname": "Dangal",
                      "eventid": 6915,
                      "showcategory": "2D",
                      "eventratingdescription": "Universal",
                      "genre": "Biographical",
                      "lengthinminutes": 161,
                      "eventcrews": "Aamir Khan, Sanya Malhotra, FatimaSana Shaikh, Sakshi Tanwar",
                      "director": "Nitesh Tiwari",
                      "movielength": "2 Hrs 41 Min",
                      "annotation": "Biopic of Mahavir Singh Phogat, who taught wrestling to his daughters Babita Kumari and Geeta Phogat. Geeta Phogat was India's first female wrestler to win at the 2010 Commonwealth Games, where she won the gold medal (52 kg) while her sister Babita Kumari won the silver (55 kg)",
                      "youtubeurl": "https://www.youtube.com/embed/x_7YlGv9u1g",
                      "image": "http://qfxcinemas.com/Home/GetThumbnailImage?eventid=6915"
                    }
                  }, {
                    "type": "movies",
                    "id": 6904,
                    "attributes": {
                      "movietime": "ComingSoon",
                      "eventname": "Assassins Creed",
                      "eventid": 6904,
                      "showcategory": "2D",
                      "eventratingdescription": "PG",
                      "genre": "Action",
                      "lengthinminutes": 90,
                      "eventcrews": "Marion Cotillard, Michael Fassbender, Essie Davis",
                      "director": "Justin Kurzel",
                      "movielength": "1 Hrs 30 Min",
                      "annotation": "When Callum Lynch explores the memories of his ancestor Aguilar and gains the skills of a Master Assassin, he discovers he is a descendant of the secret Assassins society.",
                      "youtubeurl": "https://www.youtube.com/embed/IP3pHwh8kq4",
                      "image": "http://qfxcinemas.com/Home/GetThumbnailImage?eventid=6904"
                    }
                  }, {
                    "type": "movies",
                    "id": 6906,
                    "attributes": {
                      "movietime": "ComingSoon",
                      "eventname": "3D: Assassins Creed",
                      "eventid": 6906,
                      "showcategory": "3D",
                      "eventratingdescription": "PG",
                      "genre": "Action",
                      "lengthinminutes": 90,
                      "eventcrews": "Marion Cotillard, Michael Fassbender, Essie Davis",
                      "director": "Justin Kurzel",
                      "movielength": "1 Hrs 30 Min",
                      "annotation": "When Callum Lynch explores the memories of his ancestor Aguilar and gains the skills of a Master Assassin, he discovers he is a descendant of the secret Assassins society.",
                      "youtubeurl": "https://www.youtube.com/embed/IP3pHwh8kq4",
                      "image": "http://qfxcinemas.com/Home/GetThumbnailImage?eventid=6906"
                    }
                  }, {
                    "type": "movies",
                    "id": 6911,
                    "attributes": {
                      "movietime": "ComingSoon",
                      "eventname": "Bhram",
                      "eventid": 6911,
                      "showcategory": "2D",
                      "eventratingdescription": "PG",
                      "genre": "LoveStory",
                      "lengthinminutes": 115,
                      "eventcrews": "Karma -, Bhintuna Joshi, Khusbu Khadka, Suresh Gamal",
                      "director": "Rabindra Shahi",
                      "movielength": "1 Hrs 55 Min",
                      "annotation": "Raj (Karma) comes to Kathmandu after his parents death in a car accident, then he meets Pooja (Bhintuna Joshi) and they fall in love, but Prabha \r\n (Khusbu Khadka) has also been secretly loving his childhood friend Raj and many times she has been proposing Raj but he always been rejecting. Bickey (Suresh Gamal) also has crush on Pooja. But suddenly Pooja has to go to her hometown and from their she returns lately . After returning from hometown she starts to misbehave with everyone, during this time many people including Bickey are murdered by unknown person,Bhram is a revenge love story with a slight twist.",
                      "youtubeurl": "https://www.youtube.com/embed/9V7lTMMLD-Y",
                      "image": "http://qfxcinemas.com/Home/GetThumbnailImage?eventid=6911"
                    }
                  }, {
                    "type": "movies",
                    "id": 6913,
                    "attributes": {
                      "movietime": "ComingSoon",
                      "eventname": "Underworld: Blood Wars",
                      "eventid": 6913,
                      "showcategory": "2D",
                      "eventratingdescription": "PG",
                      "genre": "Action",
                      "lengthinminutes": 91,
                      "eventcrews": "Kate Beckinsale, Theo James, Lara Pulver",
                      "director": "Anna Foerster",
                      "movielength": "1 Hrs 31 Min",
                      "annotation": "Vampire death dealer Selene (Kate Beckinsale) must fend off brutal attacks from both the Lycan clan and the Vampire faction that betrayed her. With her only allies, David (Theo James) and his father Thomas (Charles Dance), she must stop the eternal war between Lycans and Vampires, even if it means she has to make the ultimate sacrifice.",
                      "youtubeurl": "https://www.youtube.com/embed/QSlaWHDu5WU",
                      "image": "http://qfxcinemas.com/Home/GetThumbnailImage?eventid=6913"
                    }
                  }, {
                    "type": "movies",
                    "id": 6914,
                    "attributes": {
                      "movietime": "ComingSoon",
                      "eventname": "3D: Underworld: Blood Wars",
                      "eventid": 6914,
                      "showcategory": "3D",
                      "eventratingdescription": "PG",
                      "genre": "Action",
                      "lengthinminutes": 91,
                      "eventcrews": "Kate Beckinsale, Theo James, Lara Pulver",
                      "director": "Anna Foerster",
                      "movielength": "1 Hrs 31 Min",
                      "annotation": "Vampire death dealer Selene (Kate Beckinsale) must fend off brutal attacks from both the Lycan clan and the Vampire faction that betrayed her. With her only allies, David (Theo James) and his father Thomas (Charles Dance), she must stop the eternal war between Lycans and Vampires, even if it means she has to make the ultimate sacrifice.",
                      "youtubeurl": "https://www.youtube.com/embed/QSlaWHDu5WU",
                      "image": "http://qfxcinemas.com/Home/GetThumbnailImage?eventid=6914"
                    }
                  }, {
                    "type": "movies",
                    "id": 6916,
                    "attributes": {
                      "movietime": "ComingSoon",
                      "eventname": "Hidden Figures",
                      "eventid": 6916,
                      "showcategory": "2D",
                      "eventratingdescription": "PG",
                      "genre": "Drama",
                      "lengthinminutes": 127,
                      "eventcrews": "TarajiP. Henson, Kevin Costner, Octavia Spencer, Janelle Monae, Jim Parsons",
                      "director": "Theodore Melfi",
                      "movielength": "2 Hrs 7 Min",
                      "annotation": "A team of African-American women provide NASA with important mathematical data needed to launch the program's first successful space missions.",
                      "youtubeurl": "https://www.youtube.com/embed/vGAxf55sFLI",
                      "image": "http://qfxcinemas.com/Home/GetThumbnailImage?eventid=6916"
                    }
                  }];

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */
  this.get('/movies', function(db, request) {
     if(request.queryParams.movietime !== undefined) {
        let filteredMovies = movielist.filter(function(i) {
          return i.attributes.movietime.toLowerCase().indexOf(request.queryParams.movietime.toLowerCase()) !== -1;
        });
         return { data: filteredMovies };
     }else{
        return {
          data: movielist
        };
     }
  });

   // Find and return the provided rental from our rental list above
  this.get('/movies/:id', function (db, request) {
    return { 
      data: movielist.find(
          (movie) => request.params.id == movie.id
        ) 
    };
  });

  //this.pretender.get('/*https://www.googleapis.com/', this.pretender.passthrough);
  this.passthrough('https://www.googleapis.com/**');
  this.passthrough('https://securetoken.googleapis.com/**');
  this.passthrough('http://sabin.wlink.com.np/**');
}
