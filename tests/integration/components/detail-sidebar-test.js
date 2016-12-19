import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('detail-sidebar', 'Integration | Component | detail sidebar', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{detail-sidebar}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#detail-sidebar}}
      template block text
    {{/detail-sidebar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
