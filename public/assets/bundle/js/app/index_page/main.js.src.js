console.info('main loaded!')
kkplay.require(['http://assets.dev.com:8081/js/configs/require.js'],function(){
    console.info('main execute!')
    kkplay.require(['app/index_page/ad','app/index_page/statistics']);
});