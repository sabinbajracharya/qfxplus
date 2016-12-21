import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    //host: 'http://sabin.wlink.com.np',
    host: 'http://localhost',
    //namespace: 'apiv1'
    namespace: 'qfx/index.php/apiv1'
});
