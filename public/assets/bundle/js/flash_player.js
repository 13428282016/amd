/**
 * Created by wmj on 2016/2/25.
 */

/**
 * Created by wmj on 2016/2/25.
 */
/**
 * Created by wmj on 2016/2/25.
 */

console.info('libraryFlashPlayer loaded!')
define(['vendor/inherit','player'],function(inherit,Player){
    console.info(' library FlashPlayer execute!')
    var FlashPlayer=inherit(Player,{

        __constructor:function(){

            this.__base();
            console.log('a FlashPlayer Object has been created!');
        },
        play:function(){
            this.__base();
            console.log('a FlashPlayer start play!');

        },
        pause:function(){
            this.__base();
            console.log('a FlashPlayer pause play!');
        },
        stop:function(){
            this.__base();
            console.log('a FlashPlayer stop play!');
        },
        resume:function(){
            this.__base();
            console.log('a FlashPlayer resume play!');
        }


    },{

        getObjNums:function(){


            return this.__base();
        }
    });


    return FlashPlayer;


});