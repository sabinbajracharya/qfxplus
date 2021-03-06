import Ember from 'ember';
import FirebaseUtil from '../utils/firebase-util';
import FacebookUtil from '../utils/facebook-util';
import FBConstants from '../constants/FireBaseConstants';

const { FACEBOOK_UTIL, FIREBASE_UTIL, FIREBASE } = FBConstants;

export default Ember.Service.extend({

    init(){
        if(!this.get(FIREBASE_UTIL)){
            this.set(FIREBASE_UTIL, FirebaseUtil.create());
        }
        if(!this.get(FACEBOOK_UTIL)){
            var firebase_util =  this.get(FIREBASE_UTIL);
            this.set(FACEBOOK_UTIL, FacebookUtil.create({
               'firebase': firebase_util.getFirebase()
            }));
        }
    },

    login(){
        var fbook = this.get(FACEBOOK_UTIL)
        fbook.setUpScope();
        fbook.fbSignIn();
    },

    logout(){
         var fbook = this.get(FACEBOOK_UTIL);
         fbook.fbSignOut();
    },

    getLoggedInUser(callback){
        this.get(FACEBOOK_UTIL).getUser(callback);
    },

    addMovieComment(movieId, name, message, photoURL){
       this.get(FIREBASE_UTIL).addComment(movieId, name, message, photoURL);
    },

    getAllComments(movieId, callback){
        this.get(FIREBASE_UTIL).allComments(movieId, callback);
    }

});
