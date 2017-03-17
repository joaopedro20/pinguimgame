 var MaxHeight, MaxWidth, YPos, XPos, interval1, interval2, interval3, interval4, moveTo;
 
var pontos, contador;
pontos = 10;
contador = 0;
vidas = 3;
pontosDoVencedor = 30;

var peg1,peg2,peg3,peg4,peg5;
     peg1 = peg2 = peg3 = peg4 = peg5 = peg6 = respostaCerta = isGameOver = isWinner = false;

   $( function() {
    $( "#dialog" ).dialog({
	   resizable: false,
	closeOnEscape: false,
	   open: function(event, ui) { $(".ui-dialog-titlebar-close").hide(); },
      height: "auto",
      width: 400,
      modal: true,
      buttons: {
        "Sim": function() {
			if(respostaCerta){
			contador = contador + pontos;
			document.getElementById("contador").innerHTML = contador;
			}else{
				vidas = vidas-1;
				document.getElementById("vidas").innerHTML = vidas;
			}
          $( this ).dialog( "close" );
        },
        "Não": function() {
			
			if(!respostaCerta){
				contador = contador + pontos;
			document.getElementById("contador").innerHTML = contador;
			}else{
				vidas = vidas-1;
				document.getElementById("vidas").innerHTML = vidas;
			}

          $( this ).dialog( "close" );
        }},
	autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
		}
    });
 
    $( "#opener" ).on( "click", function() {
      $( "#dialog" ).dialog( "open" );
    });
  } );
 
 
function gameOver() {
    document.getElementById('game-over').style.display = 'block';
    document.getElementById('game-over-overlay').style.display = 'block';
    // isGameOver = true;
} 
 
function init(){
	YPos = 0;
	XPos = 0;
	toMove = document.getElementById("scroller");
	toMove.style.backgroundPosition = XPos + "px "+YPos + "px";

	document.getElementById("contador").innerHTML = contador;
		document.getElementById("vidas").innerHTML = vidas;
// var layer = {};
// layer['background'] = new canvasLayer('body', 'background');
// console.log(layer);




// var canvas = document.createElement("canvas");
// canvas.width = yourImageElement.width;
// canvas.height = yourImageElement.height;
// canvas.getContext('2d').drawImage(yourImageElement, 0, 0);
}


function canvasLayer(location, id) {

    this.width = $(window).width();
    this.height = $(window).height();
    this.element = document.createElement('canvas');

    $(this.element)
       .attr('id', id)
       .text('unsupported browser')
       .width(this.width)
       .height(this.height)
       .appendTo(location);

    this.context = this.element.getContext("2d");
}

 function initEgg(){
	 YPos = 10;
	 XPos = 10;
	 toMove = document.getElementById("egg");
	 toMove.style.backgroundPosition = XPos + "px "+YPos + "px";
	 toMove.style.background = "url('egg.png')"
 }

function image() {
    // var img = document.createElement("IMG");
    // img.src = "images/ChickEggPinkHatches.gif";
    // document.getElementById('scroller').appendChild(img);
	
	$('#egg').css('background-image','url(images/hatchEgg.gif)');
		document.getElementById("contador").innerHTML = "WINNER!!!!";
}
function move(){
	if ((YPos >= 0)||(YPos <= -700)||(XPos >= 0)||(XPos >= MaxHeight)) {
	    stop();
	}
	// if ((YPos<=-275)&&(YPos>=-328)&&(XPos<=-342)&&(XPos>=-405)) {
		// toMove.style.background = "url('egg.jpg')"
		// };
		
		 if ((XPos<=-251)&&(XPos>=-302) && (YPos<=-133)&&(YPos>=-220) && peg1 == false) {
			
			$("#myDialogText").text("1024 Megabytes correspondem a 1 Gigabyte?");
			respostaCerta = false;
			$( "#opener" ).click();
			peg1 = true;
			stop();
		};
		
		 if ((XPos<=-337)&&(XPos>=-386) && (YPos<=-266)&&(YPos>=-326) && peg2 == false) {
			$("#myDialogText").text("A rotação do Planeta Terra é no sentido dos ponteiros do Relógio?");
			respostaCerta = false;
			$( "#opener" ).click();
			peg2 = true;
			stop();
		};
		
		 if ((XPos<=-130)&&(XPos>=-233) && (YPos<=-401)&&(YPos>=-483) && peg3 == false) {
			$("#myDialogText").text("Nitrogenio é o elemento mais abundante na atmosfera terrestre?");
			respostaCerta = true;
			$( "#opener" ).click();
			peg3 = true;
			stop();
		};
		
		 if ((XPos<=-395)&&(XPos>=-454) && (YPos<=-565)&&(YPos>=-605) && peg4 == false) {
			$("#myDialogText").text("Num website, HTTP representa HyperText Transfer Protection?");
			respostaCerta = false;
			$( "#opener" ).click();
			peg4 = true;
			stop();
		};
		
		
		 if ((XPos<=-547)&&(XPos>=-632) && (YPos<=-148)&&(YPos>=-215) && peg5 == false) {
			$("#myDialogText").text("JavaScript apareceu em 1995?");
			respostaCerta = true;
			$( "#opener" ).click();
			peg5 = true;
			stop();
		};
		
		 if ((XPos<=-536)&&(XPos>=-638) && (YPos<=-570)&&(YPos>=-590) && peg6 == false) {
			$("#myDialogText").text("O papel foi inventado na China à 2000 anos?");
			respostaCerta = true;
			$( "#opener" ).click();
			peg6 = true;
			stop();
		};
		
			 if ((XPos<=-95)&&(XPos>=-201) && (YPos<=-306)&&(YPos>=-342)) {
	vidas = vidas-1;
				document.getElementById("vidas").innerHTML = vidas;
			
			// $('#character').css('background-image','url(images/egg.png)');
			// document.getElementById('character').setAttribute('class','death');
			stop();
		};
		
		
			 if ((XPos<=-673)&&(XPos>=-762) && (YPos<=-281)&&(YPos>=-347)) {
	vidas = vidas-1;
				document.getElementById("vidas").innerHTML = vidas;
			
			// $('#character').css('background-image','url(images/egg.png)');
			// document.getElementById('character').setAttribute('class','death');
			stop();
		};
		
		
		 // if ((XPos<=-0)&&(XPos>=-0) && (YPos<=-0)&&(YPos>=-0) && peg5 == false) {
			// $("#myDialogText").text("Pergunta 5");
			// $( "#opener" ).click();
			// peg5 = true;
			// stop();
		// };
		
		if(contador >= pontosDoVencedor){
			isWinner = true;	
		   image();
		   stop();
		}
		
		 if(vidas == 0){
			gameOver();
			isGameOver = true;
			stop();
		 }
		
	toMove = document.getElementById("scroller");
	toMove.style.backgroundPosition = XPos + "px "+YPos + "px";
	document.getElementById("pos").innerHTML=toMove.style.backgroundPosition;
    // var pixelData = canvas.getContext('2d').getImageData(event.offsetX, event.offsetY, 1, 1).data;
};
function moveBx() {
	var myclass = new Array('front-right','front-stand','front-left');
	var n= Math.round(Math.random()*2);
	document.getElementById('character').setAttribute('class',myclass[n]);
	YPos--;        
	move();

};
function moveCm() {
	var myclass = new Array('back-right','back-stand','back-left');
	var n= Math.round(Math.random()*2);
	document.getElementById('character').setAttribute('class',myclass[n]);
	YPos++;        
	move();
};
function moveDir() {
	var myclass = new Array('right-right','right-stand','right-left');
	var n= Math.round(Math.random()*2);
	document.getElementById('character').setAttribute('class',myclass[n]);
	XPos--;        
	move();
};
function moveEsq() {
	var myclass = new Array('left-right','left-stand','left-left');
	var n= Math.round(Math.random()*2);
	document.getElementById('character').setAttribute('class',myclass[n]);
	XPos++;        
	move();
};

function moveB() {
	stop(); 
	interval1 = setInterval(moveBx, 10);
};
function moveC() {
	stop();
	interval3 = setInterval(moveCm, 10);
};
function moveD() {
	stop();	
	interval2 = setInterval(moveDir, 10);
};
function moveE() {
	stop();
	interval4 = setInterval(moveEsq, 10);
};
function stop() {
	clearInterval(interval1);
	clearInterval(interval2);
	clearInterval(interval3);
	clearInterval(interval4);
};
window.onload =init;
//window.onload =initEgg;


function Key(e) {
	if(!isGameOver){
		if(!isWinner){
		if (e.keyCode===37) moveE();
		if (e.keyCode===38) moveC();
		if (e.keyCode===39) moveD();
		if (e.keyCode===40) moveB();
		if (e.keyCode===32) stop();
		}
	}
}