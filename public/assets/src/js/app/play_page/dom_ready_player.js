/**
 * Created by wmj on 2016/3/1.
 */
console.info('app/play_page/player loaded!')
require(['player','h5_player','flash_player','jquery'],function(Player,H5Player,FlashPlayer,$){
    console.info('app/play_page/player execute!')


    $(function(){
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

});



