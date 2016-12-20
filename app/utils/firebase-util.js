import Ember from 'ember';
import FBConstants from '../constants/FireBaseConstants';

const {DATABASE} = FBConstants;
const fbase = firebase;
const CONFIG = {
      apiKey: "AIzaSyBJ8DEEa9fpKvwdGJmapczDJIqf3OVBSUo",
      authDomain: "qfxplus.firebaseapp.com",
      databaseURL: "https://qfxplus.firebaseio.com",
      storageBucket: "qfxplus.appspot.com",
      messagingSenderId: "718475856645"
};

export default Ember.Object.extend({

    init() {
      fbase.initializeApp(CONFIG);
      
      var database = fbase.database();
      this.set(DATABASE, database);
    },

    addComment(movieId, name, message, photoURL){
      var commentRef = this.get(DATABASE).ref('movies/' + movieId);
      var newPostRef = commentRef.push()
      newPostRef.set({
        name: name,
        message: message,
        photoURL : photoURL
      });
      commentRef.once('value', function(snapshot) {
        console.log(snapshot.val());
      });
    },

    allComments(movieId, callback){
      this.get(DATABASE).ref('movies/' + movieId).orderByKey().limitToLast(100).on('value', function(snapshot) {
          var comments = [];
           snapshot.forEach(function(childSnapshot) {
              //var childKey = childSnapshot.key();
              var childData = childSnapshot.val();
                comments.push(childData);
            });
          callback(comments.reverse());
        });
    },

    getFirebase(){
      return fbase;
    },

    getDatabase(){
      return this.get(DATABASE);
    }

});