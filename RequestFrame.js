
// function newFrame(function callback):int
var newFrame = (window.requestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.oRequestAnimationFrame
    || window.msRequestAnimationFrame
    || function(callback){return setTimeout(callback, 17);});

// function stopFrame(int id):void
var stopFrame = (window.cancelAnimationFrame
    || window.webkitCancelRequestAnimationFrame
    || window.mozCancelRequestAnimationFrame
    || window.oCancelRequestAnimationFrame
    || window.msCancelRequestAnimationFrame
    || window.clearTimeout);

/**
 * class FPS
 */
function FPS()
{
    this.frames = 0;
    this.startTime = 0;

    this.lastFrames = 0;
    this.lastUpdate = Date.now();
}
// function next():void
FPS.prototype.next = function()
{
    this.frames++;

    if(this.startTime === 0)
    {
        this.startTime = Date.now();
    }
};
// function getFps():int
FPS.prototype.getFps = function()
{
    var now = Date.now();

    var fps = ((this.frames - this.lastFrames) / (now - this.lastUpdate) * 10000 | 0) / 10;

    this.lastUpdate = now;
    this.lastFrames = this.frames;

    return fps;
};
// function getAverage():int
FPS.prototype.getAverage = function()
{
    return (this.frames / (Date.now() - this.startTime) * 100000 | 0) / 100;
};
// function reset():void
FPS.prototype.reset = function()
{
    this.frames = 0;
    this.startTime = 0;

    this.lastFrames = 0;
    this.lastUpdate = Date.now();
};