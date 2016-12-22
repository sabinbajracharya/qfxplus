import Ember from 'ember';

export default Ember.Controller.extend({
    //data: Ember.computed.alias('model'),

    firebaseservice: Ember.inject.service(),
    isLogged : false,

    init(){
        this._super(...arguments);
        var self = this;
         this.get('firebaseservice').getLoggedInUser(function(user){
             console.log('controller commentbox callback');
            if(user){
                self.set('isLogged', true);
                self.set('user', user);
            }else{
                self.set('isLogged', false);
            }
        });       
    },
    actions:{
        fetchComment(movieId){
            var self = this;
            this.get('firebaseservice').getAllComments(movieId, function(values){
                console.log("Comment callback");
                console.log(values);
            self.set('commentsList', values)
            });
        }
    }

});
