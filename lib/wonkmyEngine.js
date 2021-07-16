var Game = /** @class */ (function () {
    function Game(obj) {
        this.canshu = obj;
    }
    Game.prototype.init=function(){
        if('config' in this.canshu){
            let g_width=this.canshu.config.size[0];
            let g_height=this.canshu.config.size[1];
            
            this.gameCanvas = document.createElement("div");
            this.gameCanvas.id="g_canvas";
            this.gameCanvas.style.width="500px";
            this.gameCanvas.style.height="500px";
            this.gameCanvas.style.backgroundColor="black";
            console.log(this.gameCanvas);
            if(document.getElementById("g_canvas")){
                console.log("div在");
            }
        }
    };
    Game.prototype.initAssets=function(){
        console.log("正在初始化游戏资源");
    };
    return Game;
}());