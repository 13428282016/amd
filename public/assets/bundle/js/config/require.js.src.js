/**
 * Created by wmj on 2016/2/26.
 */


    kkplay.requirejs.config({
        baseUrl: 'http://assets.dev.com:8081/js/library',
        paths:{
            vendor:"../vendor",
            app:"../app",
            jquery:'../vendor/jquery',
            config:'../config',
            library:'.',
            requireLib:'../vendor/require',
            requireConfig:'../config/require',
            common:'../common',
            model:'../model',
            component:'../component'

        },
        shim:{

        },
        waitSeconds:0,
        urlArgs:"v=201602261244"

    });



