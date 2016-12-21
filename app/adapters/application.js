import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    //host: 'http://sabin.wlink.com.np',
    namespace: 'apiv1'
    //namespace: 'qfxplus/index.php/apiv1'
});
