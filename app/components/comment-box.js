import Ember from 'ember';

export default Ember.Component.extend({

    firebaseservice: Ember.inject.service(),

    isLoggedIn: false,

    init(){
        this._super(...arguments);
    },

    didInsertElement(){
        var self = this;
        this.get('firebaseservice').getLoggedInUser(function(user){
            if(user){
                self.set('isLoggedIn', true);
                self.set('user', user);
            }else{
                self.set('isLoggedIn', false);
            }
        });

        this.get('firebaseservice').getAllComments(this.get('movieId'), function(values){
           self.set('commentsList', values)
           //return values;
        });       
    },
    actions: {
        onPostComment(movieId, user){
            var comment = this.get('comment');
            this.get('firebaseservice').addMovieComment(movieId, user.displayName, comment, user.photoURL);
        }
    },
});
