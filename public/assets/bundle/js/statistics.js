/**
 * Created by wmj on 2016/2/25.
 */



console.info('library Statistics loaded!')
define(['vendor/inherit'],function(inherit) {
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
});
