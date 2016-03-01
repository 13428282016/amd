/**
 * Created by wmj on 2016/2/25.
 */

console.info('app/play_page/player loaded!')
    kkplay.require(['player','h5_player','flash_player'],function(Player,H5Player,FlashPlayer){
        console.info('app/play_page/player execute!')

        var player= new Player();
        player.on('play',function(){
            console.log('Player play event occur!');
        });
        player.play();
        console.log(Player.getObjNums());

        var h5Player= new H5Player();
        h5Player.once('play',function(){
            console.log('h5Player play event occur!');
        });
        h5Player.play();
        console.log(H5Player.getObjNums());


        var flashPlayer= new FlashPlayer();
        flashPlayer.once('play',function(){
            console.log('h5Player play event occur!');
        });
        flashPlayer.play();
        console.log(FlashPlayer.getObjNums());
        console.timeEnd('player');
    });




