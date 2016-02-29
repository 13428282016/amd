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
        kkplay.define('statistics',['vendor/inherit'], factory);
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

/**
 * Created by wmj on 2016/2/25.
 */
console.info('app/play_page/statistics loaded!')
    kkplay.require(['jquery','statistics'],function($,Statistics){
        console.info('app/play_page/statistics execute!')
        var statistics= new Statistics();

        statistics.vv();
        statistics.pv()
        console.log(Statistics.getObjNums());


        console.log($(document.body));
        console.timeEnd('statistics');
    });





kkplay.define("app/play_page/statistics", function(){});

/**
 * Created by wmj on 2016/2/29.
 */
console.time('player');
console.time('statistics');
console.info('main loaded!')




console.info('main execute!')
kkplay.require(['app/play_page/statistics'],function(){

});



kkplay.define("app/play_page/nearest-main", function(){});


//# sourceMappingURL=nearest-main.js.map