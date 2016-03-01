/**
 * Created by wmj on 2016/2/29.
 */
(function (root, factory) {
    if (typeof kkplay.define === 'function' && kkplay.define.amd) {
        //Allow using this built library as an AMD module
        //in another project. That other project will only
        //see this AMD call, not the internal modules in
        //the closure below.
        kkplay.define([], factory);
    } else {
        //Browser globals case. Just assign the
        //result to a property on the global.
        root.libGlobalName = factory();
    }
}(this, function () {







}));