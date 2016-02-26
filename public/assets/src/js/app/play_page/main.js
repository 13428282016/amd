/**
 * Created by wmj on 2016/2/26.
 */

/**
 * Created by wmj on 2016/2/26.
 */
console.info('main loaded!')
require(['http://assets.dev.com/js/configs/require.js'],function(){
    console.info('main execute!')
    require(['app/play_page/player','app/play_page/statistics']);
});