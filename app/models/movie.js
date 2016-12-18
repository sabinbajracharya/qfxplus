import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  rating: DS.attr(),
  annotation: DS.attr(),
  image: DS.attr(),
  version: DS.attr(),
  type: DS.attr(),
});
