/**
 * Created by wmj on 2016/2/25.
 */
/**
 * Created by wmj on 2016/2/25.
 */

console.info('library H5Player loaded!')
define(['vendor/inherit','player'],function(inherit,Player){
    console.info('library H5Player execute!')
    var H5Player=inherit(Player,{

        __constructor:function(){

            this.__base();
            console.log('a H5Player Object has been created!');
        },
        play:function(){
            this.__base();
            console.log('a H5Player start play!');

        },
        pause:function(){
            this.__base();
            console.log('a H5Player pause play!');
        },
        stop:function(){
            this.__base();
            console.log('a H5Player stop play!');
        },
        resume:function(){
            this.__base();
            console.log('a H5Player resume play!');
        }


    },{

        getObjNums:function(){
            return this.__base();
        }
    });

    return H5Player;


});