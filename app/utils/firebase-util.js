import Ember from 'ember';

const fbase = firebase;
const config = {
      apiKey: "AIzaSyBJ8DEEa9fpKvwdGJmapczDJIqf3OVBSUo",
      authDomain: "qfxplus.firebaseapp.com",
      databaseURL: "https://qfxplus.firebaseio.com",
      storageBucket: "qfxplus.appspot.com",
      messagingSenderId: "718475856645"
};

export default Ember.Object.extend({

    init() {
      fbase.initializeApp(config);
    },

    getFirebase(){
      return fbase;
    }

});