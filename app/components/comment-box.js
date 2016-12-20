import Ember from 'ember';

export default Ember.Component.extend({

    firebaseservice: Ember.inject.service(),

    isLoggedIn: false,

    init(){
        this._super(...arguments);
    },

    didInsertElement(){
        var self = this;
        var user = this.get('firebaseservice').getLoggedInUser(function(user){
             console.log('didInsertElement called callback');
            if(user){
                self.set('isLoggedIn', true);
                self.set('user', user);
                console.log(user);
            }else{
                self.set('isLoggedIn', false);
            }
       });
    }
});
