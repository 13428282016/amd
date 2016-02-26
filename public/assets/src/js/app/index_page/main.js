console.info('main loaded!')
require(['http://assets.dev.com/js/configs/require.js'],function(){
    console.info('main execute!')
    require(['app/index_page/ad','app/index_page/statistics']);
});