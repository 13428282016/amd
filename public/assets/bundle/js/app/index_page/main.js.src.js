console.info('main loaded!')
kkplay.require(['http://assets.dev.com/js/configs/require.js'],function(){
    console.info('main execute!')
    kkplay.require(['app/index_page/ad','app/index_page/statistics']);
});