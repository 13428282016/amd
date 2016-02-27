/**
 * Created by wmj on 2016/2/26.
 */

console.info('library Advertisement loaded!')
define(['vendor/inherit'],function(inherit) {
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
});
