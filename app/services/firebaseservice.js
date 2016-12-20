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

    getLoggedInUser(){
        return this.get(FACEBOOK_UTIL).getUser();
    }




});
