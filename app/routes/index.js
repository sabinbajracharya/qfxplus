import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        //this.get('store').unloadAll('movie');
        //return this.get('store').findAll('movie');
        return Ember.RSVP.hash({
            currentmovies: this.get('store').query('movie', { movietime: 'NowShowing' }),
            upcomingmovies: this.get('store').query('movie', { movietime: 'ComingSoon' })
        });
        //return this.get('store').query('movie', { movietime: 'NowShowing' });
    },
    setupController(controller, model) {
        this._super(...arguments);
        Ember.set(controller, 'currentmovies', model.currentmovies);
        Ember.set(controller, 'upcomingmovies', model.upcomingmovies);
    }
});
