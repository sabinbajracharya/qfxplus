import Ember from 'ember';
import FirebaseUtil from '../utils/firebase-util';
import FacebookUtil from '../utils/facebook-util';

const FACEBOOK = 'facebookUtil';
const FIREBASE = 'firebaseUtil';

export default Ember.Service.extend({

    init(){
        if(!this.get(FIREBASE)){
            this.set(FIREBASE, FirebaseUtil.create());
        }
        if(!this.get(FACEBOOK)){
            this.set(FACEBOOK, FacebookUtil.create());
        }
    },

    login(){
        var fbase = this.get(FIREBASE).getFirebase();
        var fbook = this.get(FACEBOOK)
        fbook.setUpScope(fbase);
        fbook.fbSignIn();
    }


});
