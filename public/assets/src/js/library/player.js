/**
 * Created by wmj on 2016/2/25.
 */

console.info('library Player loaded!');
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        //Allow using this built library as an AMD module
        //in another project. That other project will only
        //see this AMD call, not the internal modules in
        //the closure below.
        define(['vendor/inherit'], factory);
    } else {
        //Browser globals case. Just assign the
        //result to a property on the global.
        root.Player = factory(window.inherit);
    }
}(this, function (inherit) {

    console.info('library Player execute!')
    var Player=inherit({
        __constructor:function(){

            console.log('a Player Object has been created!');
            this.__self.objNums++;
        },
        play:function(){
            console.log('start play!');

        },
        pause:function(){
            console.log('pause play!');
        },
        stop:function(){
            console.log('stop play!');
        },
        resume:function(){
            console.log('resume play!');
        }
    },{
        objNums:0,
        getObjNums:function(){
            return this.objNums;
        }
    });
    return Player;


}));