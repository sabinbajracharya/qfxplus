import Ember from 'ember';

export default Ember.Component.extend({
    firebaseservice: Ember.inject.service(),
    //isLoggedIn: false,

    didInsertElement(){
        this._super(...arguments);
        console.log("Comment list");
        console.log(this.get('commentsList'));
        /*
        
        var self = this;
        this.get('firebaseservice').getLoggedInUser(function(user){
             console.log('commentbox callback');
            if(user){
                self.set('isLoggedIn', true);
                self.set('user', user);
            }else{
                self.set('isLoggedIn', false);
            }
        });

        this.get('firebaseservice').getAllComments(this.get('movieId'), function(values){
           self.set('commentsList', values)
        });  

        */  
        this.get('fetchcomments')(this.get('movieId'));
    },

    commentPropertyObserver : Ember.observer('isLogged', function(){
       this.set('isLoggedIn', this.get('isLogged'));
    }),
    

    actions: {
        onPostComment(movieId, user){
            var comment = this.get('comment');
            this.set('comment', ''); //reset the comment box
            this.get('firebaseservice').addMovieComment(movieId, user.displayName, comment, user.photoURL);
        },
        login(){
            this.get('firebaseservice').login();
        }
    }
});
