import Ember from "ember";

const PROVIDER = 'provider';
const FIREBASE = 'fbase';
const TOKEN = 'token';

export default Ember.Object.extend({
  token: '',
  setUpScope(fbase){
      var provider = new fbase.auth.FacebookAuthProvider();
      provider.addScope('user_birthday');
      provider.setCustomParameters({
        'display': 'popup'
      });
      this.set(FIREBASE, fbase);
      this.set(PROVIDER, provider);
      return provider;
  },

  fbSignIn(){
    if(this.get(PROVIDER)){
      var provider = this.get(PROVIDER);
      this.get(FIREBASE).auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        console.log('facebook result');
        console.log(result);
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(token);
        console.log(user);
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(errorCode);
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
    return this.get(TOKEN); 
  }

});