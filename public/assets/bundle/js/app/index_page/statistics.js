/**
 * Created by wmj on 2016/2/26.
 */
console.info('app/play_page/statistics loaded!')
kkplay.require(['jquery','statistics'],function($,Statistics){

    console.info('app/play_page/statistics execute!')
    var statistics= new Statistics();

    statistics.vv();
    statistics.pv()
    console.log(Statistics.getObjNums());

    var $=require('jquery');
    console.log($(document.body));
});




