/**
 * Created by wmj on 2016/2/25.
 */
console.info('app/play_page/statistics loaded!')
    require(['jquery','statistics'],function($,Statistics){
        console.info('app/play_page/statistics execute!')
        var statistics= new Statistics();

        statistics.vv();
        statistics.pv()
        console.log(Statistics.getObjNums());


        console.log($(document.body));
        console.timeEnd('statistics');
    });




