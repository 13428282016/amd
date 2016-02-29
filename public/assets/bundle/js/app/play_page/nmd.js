/**
 * Created by wmj on 2016/2/29.
 */
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

console.info('app/play_page/statistics execute!')
var statistics= new Statistics();

statistics.vv();
statistics.pv()
console.log(Statistics.getObjNums());


console.log($(document.body));