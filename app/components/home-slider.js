import Ember from 'ember';

export default Ember.Component.extend({
   
    didRender(){
        this._super(...arguments);
        this.$('.carousel').carousel();
        //this.$('.carousel.carousel-slider').carousel({full_width: true});
        
    }

});
