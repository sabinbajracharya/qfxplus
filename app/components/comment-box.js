import Ember from 'ember';

export default Ember.Component.extend({

    firebaseservice: Ember.inject.service(),  
    init(){
        this._super(...arguments);
    },

    didInsertElement(){
       var user = this.get('firebaseservice').getLoggedInUser(function(user){
            console.log("Logged In User");
            console.log(user);
       });
    }
});
