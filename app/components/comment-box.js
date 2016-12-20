import Ember from 'ember';

export default Ember.Component.extend({

    firebaseservice: Ember.inject.service(),  
    init(){
        this._super(...arguments);
       // console.log("init component comment box");
       // console.log(this.get('firebaseservice').getLoggedInUser());
    },

    didInsertElement(){
       // console.log(this.get('firebaseservice').getLoggedInUser());
        //this._super(...arguments);
       // this.$('.txt-comment').autogrow();
    }
});
