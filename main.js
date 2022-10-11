var menuBool = true;
var sfx_on = false;
var music_on = true;
var backAudio;
var gameAudio = new Audio("mp3/back.mp3");
var back_img = new Image();
back_img.src = "imgs/back.png"
function buttonPressed(b) {
  if (typeof(b) == "object") {
    return b.pressed;
  }
  return b == 1.0;
}
var pause = false;
var pause_button = new button("X",20,25,
function (){
	menuBool = true;
	if(music_on){
		gameAudio.pause();
		//backAudio.play();
	}
});
function init(){
    var canvas = document.getElementById("canvas");
	canvas.style.position = "absolute";
	canvas.style.margin = "auto";
	canvas.style.top = "0";
	canvas.style.right = "0";
	canvas.style.bottom = "0";
	canvas.style.left = "0";
	canvas.style.width = "500px";
	canvas.style.height = "500px";

	var ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled= false;

    var interval = 33;
    backAudio;;// = new Audio("menu.wav");
    //backAudio.loop = true;
	if(music_on){
		//backAudio.play();
	}
	var menuScreen = new menu();
	addEventListener("mousedown",function (e) {
		updateMouse(l,p,ctx,e);
	});
	var p = new player(55,309,20,40);	
	
    var l = new level(interval, p, ctx);
	p.l = l;
	var keys = new Array();
    addEventListener("keydown",function (e) {
		e.preventDefault();
        var found = false;
        for (k in keys){
			if(e.which == undefined)
			{
				e.which = e;
			}
            if(e.which == keys[k]){
                found = true;
            }
        }
        if(!found){
            keys[keys.length] = e.which;
        }
    });

    addEventListener("keyup",function (e) {
		e.preventDefault();
		if(e.which == undefined)
		{
			e.which = e;
		}
		switch(e.which){
			case 80:
				if(!menuBool){
					pause = !pause;
				}
				break;
			case 48:
				if(backAudio.paused){
					//backAudio.play();
				}
				else{
					//backAudio.pause();
				}
				break;
		}
		for (k in keys){
            if(e.which == keys[k]){
                delete keys[k];
            }
        }
    });
    var that = this;
    var drawFunct = function(){
        that.draw(ctx,p,l,menuScreen);//,static2);
    }
    setInterval(drawFunct,interval);
    var updateFunct = function(){
		if(!p.spawn || !p.alive)
		{
			that.update(p,l,keys);
		}
    };
    setInterval(updateFunct,interval / 4);
	var animateFunct = function(){
        that.animate(p, l);
    };
	var animateFore = function(){
		//l.animate();
	};
	setInterval(animateFunct,99);
	setInterval(animateFore, 122);
}
function update(p,l,keys){
    p.update(l,keys);
	if(!pause){
		l.update(p);
	}
}
var backx = 0;
function draw(ctx,p,l,menuScreen){
    ctx.clearRect(0,0,500,500);
	ctx.fillStyle = "black";
	ctx.fillRect(0,0,500,500);
	ctx.fillStyle = "white";
	if(!menuBool){
		ctx.globalAlpha = 0.1;		
		ctx.drawImage(back_img,backx,0,500,500,0,0,500,500)
		for(var i = 0; i < 10; i++){
			for(var j = 0; j < 10; j++){
				ctx.fillRect(i * 50 - 10,j * 50 - 10,50,50);//(l.tile, i * 50 - 10,j * 50 - 10,50,50);
			}
		}
		ctx.globalAlpha = 1;
		p.draw(ctx);
		l.draw(ctx);	
		//pause_button.draw(ctx);
	}
	else{
		menuScreen.draw(ctx);
	}	
}
function animate(p,l){
	backx += 500;
	if(backx > 1000){
		backx = 0;
	}
	p.animate();
	for(e in l.enemies)
	{
		l.enemies[e].animate();
	}
}