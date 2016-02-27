/**
 * Created by wmj on 2016/2/26.
 */
requirejs.config({
    baseUrl: 'http://assets.dev.com/js/libraries',
    paths:{
        vendor:"../vendors",
        app:"../app",
        jquery:'../vendors/jquery',
        config:'../configs',
        library:'./',

    },
    shim:{

    },
    waitSeconds:0,
    urlArgs:"v=201602261244"

});