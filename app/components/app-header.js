import Ember from 'ember';

export default Ember.Component.extend({
    firebaseservice: Ember.inject.service(), 
    
    didRender(){
        this._super(...arguments);
        this.$('.button-collapse').sideNav();
    },

    actions:{
        login(){
            this.get('firebaseservice').login();
           //alert('login');
        }
    }

});
