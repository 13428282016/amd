/**
 * Created by wmj on 2016/2/25.
 */



console.info('library Statistics loaded!');
(function (root, factory) {
    if (typeof kkplay.define === 'function' && kkplay.define.amd) {
        //Allow using this built library as an AMD module
        //in another project. That other project will only
        //see this AMD call, not the internal modules in
        //the closure below.
        kkplay.define(['vendor/inherit'], factory);
    } else {
        //Browser globals case. Just assign the
        //result to a property on the global.
        root.Statistics = factory(window.inherit);
    }
}(this, function (inherit) {
    console.info('library Statistics executed!')
    var Statistics = inherit({
        __constructor: function () {

            console.log('a Statistics Object has been created!');
            this.__self.objNums++;
        },
        pv: function () {
            console.log('trigger a pv  statistics!');

        },
        vv: function () {
            console.log('trigger a vv statistics!');
        }

    }, {
        objNums: 0,
        getObjNums: function () {
            return this.objNums;
        }
    });

    return Statistics;
}));
