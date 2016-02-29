/**
 * Created by wmj on 2016/2/25.
 */
/**
 * Created by wmj on 2016/2/25.
 */

console.info('library H5Player loaded!');
(function (root, factory) {
    if (typeof kkplay.define === 'function' && kkplay.define.amd) {
        //Allow using this built library as an AMD module
        //in another project. That other project will only
        //see this AMD call, not the internal modules in
        //the closure below.
        kkplay.define(['vendor/inherit','player'], factory);
    } else {
        //Browser globals case. Just assign the
        //result to a property on the global.
        root.H5Player = factory(window.inherit,window.Player);
    }
}(this, function (inherit,Player) {


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


}));