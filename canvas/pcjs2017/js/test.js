var $canvas
var ctx
var $img
$(function(){
    $canvas=$('canvas').get(0)
    $img=$('img').get(0)
    ctx=$canvas.getContext('2d')
    requestAnimationFrame(step);
})

var draw=function(i){
    ctx.clearRect(0,0,1920,990);
    ctx.drawImage($img,0,iamgeHeight*i,imageWidth,iamgeHeight,0,0,imageWidth,iamgeHeight);
}

var animatedtime=0
var animating=true
var duration=400000
var imagecount=21
var imageWidth=1920
var iamgeHeight=990
var start=function(){
    animatedtime=0
}
start()

window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

var step= function(timestamp) { 
        if (animating){
            animatedtime=animatedtime+timestamp
            i=Math.floor(animatedtime/duration*21)
            if (i<imagecount){
                draw(i)
            }
        }
        requestAnimationFrame(step);
}