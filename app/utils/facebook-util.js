import Ember from "ember";
import FBConstants from '../constants/FireBaseConstants';

const {FIREBASE, TOKEN_KEY, USER_DATA, PROVIDER} = FBConstants;

export default Ember.Object.extend({
//  token: '',
  init(){
    this._super(...arguments);
  },

  setUpScope(){
      var fbase = this.get(FIREBASE);
      var provider = new fbase.auth.FacebookAuthProvider();
      provider.addScope('user_birthday');
      provider.setCustomParameters({
        'display': 'popup'
      });
      this.set(PROVIDER, provider);
      return provider;
  },

  fbSignIn(){
    if(this.get(PROVIDER)){
      var provider = this.get(PROVIDER);
      var that = this;
      this.get(FIREBASE).auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        //console.log(result);
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        that.set(TOKEN_KEY, token);
        that.set(USER_DATA, user);
        //console.log(that.get(TOKEN_KEY));
        //console.log(user.get(USER_DATA));
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        //alert(errorCode);
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        //console.log(errorCode);
        // ...
      });
    }
  },
  
  fbSignOut(){
    this.get(FIREBASE).auth().signOut().then(function() {
      // Sign-out successful.
    }, function(error) {
      // An error happened.
    });
  },

  getToken(){
    return this.get(TOKEN_KEY); 
  },

  setUser(callback){
    
  },

  getUser(callback){
      this.get(FIREBASE).auth().onAuthStateChanged(function(user){
        callback(user);
      });
  }

});