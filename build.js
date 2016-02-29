/**
 * Created by wmj on 2016/2/27.
 */
({


    //不要在代码里写require（'url'）,遇到这种情况应在paths定义 paths.m:url require(m),否则打包后会解析不了

    baseUrl:'./public/assets/src/js/library',//如果使用命r.js,则./相当于执行命令的项目，如果使用路径node r.js 则./相当于build.js文件的位置
    mainConfigFile:'./public/assets/src/js/config/require.js',//buuild.js指定的配置会覆盖配置文件的位置覆盖
    //optimize:'uglify2',//指定问这个压缩模式可以看到打包前的文件，否则只可以看到压缩前的文件
    optimize:'none',
    generateSourceMaps:true,//生成sourceMap

    //include:'requireLib',//额外包含一些文件打包到入口文件
    //name:"app/play_page/main",//需要优化的入口文件单个文件时使用，
    //如果是打包多文件模块，很多配置都要写到模块里面
    modules:[
        {
            name:'app/play_page/main',
            excludeShallow:[
                'player'
            ],

        },
        {
            name:'common/play_page',
            include:['jquery','flash_player','h5_player'],
        },
        {
            name:'app/play_page/nearest-main',
            excludeShallow:[
                'player'
            ],
            exclude:['common/play_page'],
        }
    ],
    namespace:'kkplay',
    preserveLicenseComments:false,//保留版权注释
        wrap:false,//把优化后的代码用一个立即执行的函数包住，不暴露全局变量
    //out:"./public/assets/build/js/app/play_page/main-built.js",//优化后输出的文件
    dir:'./public/assets/bundle/js'//输出目录这里相当于打包整个工程的，要作为独立的一个目录


})