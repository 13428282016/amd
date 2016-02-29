/**
 * Created by wmj on 2016/2/25.
 */

/**
 * Created by wmj on 2016/2/25.
 */
/**
 * Created by wmj on 2016/2/25.
 */

console.info('libraryFlashPlayer loaded!');

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        //Allow using this built library as an AMD module
        //in another project. That other project will only
        //see this AMD call, not the internal modules in
        //the closure below.
        define(['vendor/inherit','player'], factory);
    } else {
        //Browser globals case. Just assign the
        //result to a property on the global.
        root.FlashPlayer = factory(window.inherit,window.Player);
    }
}(this, function (inherit,Player) {


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


}));