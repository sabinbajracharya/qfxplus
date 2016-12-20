export default function() {

  this.namespace = '/apiv1';

  let movielist = [{
        type: 'movies',
        id: 6903,
        attributes: {
          title: 'Befikre',
          rating: 'Adult',
          annotation: 'Befikre is a story that celebrates being carefree in love. A quintessential Delhi boy Dharam (Ranveer Singh) comes to Paris for work in search of an adventure. Just when he was about to embark on` this journey of his life he bumps into a wild, free spirited, French born Indian.',
          type: 'Now Showing',
          bedrooms: 15,
          youtubeurl: 'https://www.youtube.com/embed/wzY8Bzz9FS4',
          image: 'http://qfxcinemas.com/Home/GetThumbnailImage?EventID=6903'
        }
      }, {
        type: 'movies',
        id: 6909,
        attributes: {
          title: '3D Rogue One: A Star Wars Story',
          rating: 'PG',
          annotation: 'The Rebellion makes a risky move to steal the plans to the Death Star, setting up the epic saga to follow.',
          type: 'Now Showing',
          bedrooms: 1,
          youtubeurl: 'https://www.youtube.com/embed/T_Mr2XfpADo',
          image: 'http://qfxcinemas.com/Home/GetThumbnailImage?EventID=6909'
        }
      }, {
        type: 'movies',
        id: 6912,
        attributes: {
          title: 'Wajah Tum Ho',
          rating: 'Adult',
          annotation: 'People get entangled in a mystery when a murder is committed on live television.',
          type: 'Now Showing',
          bedrooms: 3,
          youtubeurl: 'https://www.youtube.com/embed/sBueTW-W7Qc',
          image: 'http://qfxcinemas.com/Home/GetThumbnailImage?EventID=6912'
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
  this.get('/movies', function() {
    return {
      data: movielist
    };
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
}
