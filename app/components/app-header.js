import Ember from 'ember';

export default Ember.Component.extend({
    firebaseservice: Ember.inject.service(), 
    isLoggedIn: false,

    didInsertElement(){
        var self = this;
        this.get('firebaseservice').getLoggedInUser(function(user){
            if(user){
                self.set('isLoggedIn', true);
                //self.set('user', user);
            }else{
                self.set('isLoggedIn', false);
            }
        });

        this.get('firebaseservice').getAllComments(this.get('movieId'), function(values){
           self.set('commentsList', values)
           //return values;
        });       
    },

    didRender(){
        this._super(...arguments);
        this.$('.button-collapse').sideNav();
    },

    actions:{
        toggleLogin(){
            if(this.get('isLoggedIn')){
                this.get('firebaseservice').logout();
            }else{
                this.get('firebaseservice').login();
            }
        }
    }

});
