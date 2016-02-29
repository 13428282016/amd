/**
 * Created by wmj on 2016/2/26.
 */

console.info('library Advertisement loaded!');

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        //Allow using this built library as an AMD module
        //in another project. That other project will only
        //see this AMD call, not the internal modules in
        //the closure below.
        define(['vendor/inherit'], factory);
    } else {
        //Browser globals case. Just assign the
        //result to a property on the global.
        root.Advertisement = factory(window.inherit);
    }
}(this, function (inherit) {

    console.info('library Advertisement Execute!')
    var Advertisement = inherit({
        __constructor: function () {

            console.log('a Advertisement Object has been created!');
            this.__self.objNums++;
        }

    }, {
        objNums: 0,
        getObjNums: function () {
            return this.objNums;
        }
    });

    return Advertisement;
}));



