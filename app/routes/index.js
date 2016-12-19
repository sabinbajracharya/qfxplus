import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        this.get('store').unloadAll('movie');
        return this.get('store').findAll('movie');
    }
});
