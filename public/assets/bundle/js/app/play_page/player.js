/**
 * Created by wmj on 2016/2/25.
 */

console.info('app/play_page/player loaded!')
    kkplay.require(['player','h5_player','flash_player'],function(Player,H5Player,FlashPlayer){
        console.info('app/play_page/player execute!')

        var player= new Player();
        player.play();
        console.log(Player.getObjNums());

        var h5Player= new H5Player();
        h5Player.play();
        console.log(H5Player.getObjNums());


        var flashPlayer= new FlashPlayer();
        flashPlayer.play();
        console.log(FlashPlayer.getObjNums());
        console.timeEnd('player');
    });




