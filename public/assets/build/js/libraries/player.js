console.info("library Player loaded!"),define(["vendor/inherit"],function(o,e){console.info("library Player execute!");var e=o({__constructor:function(){console.log("a Player Object has been created!"),this.__self.objNums++},play:function(){console.log("start play!")},pause:function(){console.log("pause play!")},stop:function(){console.log("stop play!")},resume:function(){console.log("resume play!")}},{objNums:0,getObjNums:function(){return this.objNums}});return e});
//# sourceMappingURL=../source_maps/libraries/player.js.map