import Ember from 'ember';

export default Ember.Route.extend({
    model(params){
        console.log("The id of the move is: " + params.movie_id);
    }
});
