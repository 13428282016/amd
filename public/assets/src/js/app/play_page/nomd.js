/**
 * Created by wmj on 2016/2/26.
 */

console.info('nomd loaded!')
require(['http://assets.dev.com/js/configs/require.js'],function(config){

    console.info('nomd execute!')
    require(['player'],function(Player){



        console.log('i am not module js,but i can dependency AMD module player');
    });

});