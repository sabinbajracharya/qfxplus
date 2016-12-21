import DS from 'ember-data';

export default DS.Model.extend({
  eventname: DS.attr(),
  eventratingdescription: DS.attr(),
  annotation: DS.attr(),
  image: DS.attr(),
  movietime: DS.attr(),
  youtubeurl: DS.attr()
});
