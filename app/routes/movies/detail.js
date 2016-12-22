import Ember from 'ember';

export default Ember.Route.extend({
    model(params){
        return this.get('store').findRecord('movie', params.movie_id);
        //console.log("The id of the move is: " + params.movie_id);
    },

   /*  setupController: function(controller, model) {
         this._super(controller, model)
        controller.set('model', model);
    }
    */
});
