
function scrollani(){
	var stLsebgB = wHeight*0.5;	//여분값
	var stLseTh = wHeight+stLsebgB;
	var stLsebgBs = wHeight*0.6;	//멈출값
	var stLsebgT2s = wHeight-stLsebgBs;
	var stLsebgBss = wHeight*0.4;	//여분값
	var stLsebgBs2 = wHeight*0.7;
	var stLsebgBs3 = wHeight*0.3;

	$(document).ready(function(){

		$(".section").css("height",(wHeight*5));
		$(".section .imgbox img").css("height",wHeight);
		$(".dpfront").css("height",wHeight);
		$(".yellow .sec01").css("height",wHeight);
		$(".yellow .sec02").css("height",(wHeight*5));
		$(".deepblue .sec02").css("height",(wHeight*8));
		$(".deeppink .sec01").css("height",(wHeight*8));

		/*yellow*/
		var stYofT = parseInt($(".yellow").offset().top);
		var stYh = parseInt($(".yellow").height());
		var stYse2t = parseInt($(".yellow .sec02").offset().top);
		var stYse2h = parseInt($(".yellow .sec02").height());
		var stYend = stYofT+stYh-wHeight;
		/*deeppink*/
		var stDBofT = parseInt($(".deepblue").offset().top);
		var stDBse1h = parseInt($(".deepblue .sec01").height());
		var stDBend1 = stDBofT+stDBse1h-wHeight;
		var stDBof2T = parseInt($(".deepblue .sec02").offset().top);
		var stDBse2h = parseInt($(".deepblue .sec02").height());
		var stDBend2 = stDBof2T+stDBse2h-wHeight;
		/*deepblue*/
		var stDPofT = parseInt($(".deeppink").offset().top);
		var stDPse1h = parseInt($(".deeppink .sec01").height());
		var stDPend1 = stDPofT+stDPse1h-wHeight;
		var stDPse2t = parseInt($(".deeppink .sec02").offset().top);
		var stDPse2h = parseInt($(".deeppink .sec02").height());
		var stDPend2 = stDPse2t+stDPse2h-wHeight;
		/*pink*/
		var stPofT = parseInt($(".pink").offset().top);
		var stPse1h = parseInt($(".pink .sec01").height());
		var stPend1 = stPofT+stPse1h-wHeight;
		var stPse2t = parseInt($(".pink .sec02").offset().top);
		var stPse2h = parseInt($(".pink .sec02").height());
		var stPend2 = stPse2t+stPse2h-wHeight;
		var stPse3t = parseInt($(".pink .sec03").offset().top);
		var stPse3h = parseInt($(".pink .sec03").height());
		var stPend3 = stPse3t+stPse3h-wHeight;
		/*blue*/
		var stBofT = parseInt($(".blue").offset().top);
		var stBse1h = parseInt($(".blue .sec01").height());
		var stBend1 = stBofT+stBse1h-wHeight;
		var stBse2t = parseInt($(".blue .sec02").offset().top);
		var stBse2h = parseInt($(".blue .sec02").height());

		$(".bigsec").css("opacity","0");
		$(".bigsec.yellow").css("opacity","1");

		$(window).scroll(function(){	
			var sct = $(window).scrollTop();
			//console.log("스크롤 : "+sct);

			if (sct < stLsebgT2s){
				$(".yellow .sec02").removeClass("fix");
				$(".yellow .sec02 .imgbox").css("top","0");
		
			} else if (sct > stLsebgT2s && sct < stLseTh){
				$(".yellow .sec02").addClass("fix");
				$(".yellow .sec02 .imgbox").css("top",((sct-stLsebgT2s-stLsebgBs)*-1));
				$(".yellow .sec02 .txtbox").css("opacity","0");

			} else if (sct > stLseTh && sct < (stYend-stLsebgB)){
				//console.log("bg 멈출시점");
				$(".bigsec.deepblue").css("opacity","0"); // deepblue 0

				$(".yellow .sec02").addClass("fix");
				$(".yellow .sec02").removeClass("ab");
				$(".yellow .sec02 .imgbox").css("top",(stLsebgB*-1));
				$(".yellow .sec02 .imgbox").css("bottom","auto");

				if (sct > stYse2t+(stYse2h*0.4)){
					var im = parseInt(stYse2t+(stYse2h*0.4));
					im = ((sct - im)*0.002);
					$(".yellow .sec02 .txtbox").css("opacity",im);
				}			
			} else if (sct > (stYend-stLsebgB) && sct < stYend){
				//console.log("bg 내려가기 시작");			
				$(".bigsec.deepblue").css("opacity","1"); // deepblue 1
				$(".deepblue .sec01").css("opacity","0");
				$(".yellow .sec02").removeClass("fix");
				$(".yellow .sec02").addClass("ab");
				$(".yellow .sec02 .imgbox").css("top","auto");
				$(".yellow .sec02 .imgbox").css("bottom","0");
			
			} else if (sct > stYend && sct < stDBofT){
				//console.log("등장");
				$(".yellow .sec02").css("opacity","1");
				$(".deepblue .sec01").css("opacity","1");
				$(".deepblue .sec01").addClass("fix");
				$(".deepblue .txtbox").addClass("fix");
				$(".deepblue .txtbox").css("opacity","0");

				if (sct > stYend+stLsebgB){
					var im = parseInt(stYend+stLsebgB);
					im = ((sct - im)*0.0005)+1;
					$(".deepblue .sec01 .imgbox").css("transform","scale("+im+")");
				}
			} else if (sct > stDBofT && sct < stDBend1){
				//console.log("db 스타트");
				$(".yellow .sec02").css("opacity","0");
				$(".deepblue .sec02").css("opacity","0");
				$(".bigsec.yellow").css("opacity","1"); // yellow 1
				$(".deepblue .sec01").addClass("fix");
				$(".deepblue .sec01").removeClass("ab");

				if (sct > stDBofT+(stDBse1h*0.2)){
					var im = parseInt(stDBofT+(stDBse1h*0.2));
					im = ((sct - im)*0.002);
					$(".deepblue .txtbox").css("opacity",im);
				}		
			} else if (sct > stDBend1 && sct < stDBof2T){
				//console.log("db 2등장");
				$(".deepblue .sec01").css("opacity","1");
				$(".deepblue .sec02").css("opacity","1");
				$(".bigsec.yellow").css("opacity","0"); // yellow 0
				$(".bigsec.deeppink").css("opacity","0"); // deeppink 0

				$(".deepblue .sec01").removeClass("fix");
				$(".deepblue .sec01").addClass("ab");				
				$(".deepblue .sec01 .imgbox").css("top","auto");
				$(".deepblue .sec01 .imgbox").css("bottom","0");
				$(".deepblue .sec02").removeClass("fix");				
				$(".deepblue .txtbox").removeClass("on");

				if (dWidth<800){
					$(".deepblue .sec02 .imgbox .left").css("background-position-x","-36vh");
					$(".deepblue .sec02 .imgbox .right").css("background-position-x","-30vh");				
				} else if (dWidth>799){					

					if (dWidth>799 && dWidth < 1280){
						$(".deepblue .sec02 .imgbox .left").css("background-position","-110vh");								
						$(".deepblue .sec02 .imgbox .right").css("background-position","50vh");		

					} else if (dWidth>1279){
						$(".deepblue .sec02 .imgbox .left").css("margin-left","-170vh");
						$(".deepblue .sec02 .imgbox .right").css("margin-left","-20vh");
					}
				}

			} else if (sct > stDBof2T && sct < stDBend2){
				//console.log("db 2스타트");
				$(".deepblue .sec01").css("opacity","0");
				$(".deeppink .sec01").css("opacity","0");
				$(".bigsec.deeppink").css("opacity","1"); // deeppink 1
				$(".product .dpfront").css("opacity","0"); 

				$(".deepblue .sec02").addClass("fix");
				$(".deepblue .sec02").removeClass("ab");	
				$(".deepblue .txtbox").addClass("fix");
				$(".deepblue .txtbox").removeClass("ab");
				$(".deeppink .sec01").removeClass("fix");

				if (sct > stDBof2T+(stDBse2h*0.2) && sct < stDBof2T+(stDBse2h*0.5)){
					var im = parseInt(stDBof2T+(stDBse2h*0.2));
					im = sct - im;						

					if (dWidth<800){

							var im2 = -36;		
							var im3 = -30;	
							var im2r = im2 + (im*0.05);
							var im3r = im3 + (im*-0.05);
										
							if (im2r > -9){
								$(".deepblue .sec02 .imgbox .left").css("background-position-x","-9vh");								
							} else if (im3 < -50){
								$(".deepblue .sec02 .imgbox .right").css("background-position-x","-50vh");		
							} else {
								$(".deepblue .sec02 .imgbox .left").css("background-position-x",im2r+"vh");
								$(".deepblue .sec02 .imgbox .right").css("background-position-x",im3r+"vh");
							}					

					} else if (dWidth>799){

						if (dWidth>799 && dWidth < 1280){						
							var im2 = -110;		
							var im3 = 50;
							var im2r = im2 + (im*0.08);
							var im3r = im3 + (im*-0.05);

							if (im2r > -60){
								$(".deepblue .sec02 .imgbox .left").css("background-position","-60vh");								
							} else if (im3r < 20){
								$(".deepblue .sec02 .imgbox .right").css("background-position","20vh");		
							} else {
								$(".deepblue .sec02 .imgbox .left").css("background-position",im2r+"vh");
								$(".deepblue .sec02 .imgbox .right").css("background-position",im3r+"vh");
							}
						} else if (dWidth>1279){
							var im2 = -170;		
							var im3 = -20;
							var im2r = im2 + (im*0.05);
							var im3r = im3 + (im*-0.01);

							console.log(im2r);

							if (im2r > -114){
								$(".deepblue .sec02 .imgbox .left").css("margin-left","-114vh");								
							} else if (im3r < -30){
								$(".deepblue .sec02 .imgbox .right").css("margin-left","-30vh");		
							} else {
								$(".deepblue .sec02 .imgbox .left").css("margin-left",im2r+"vh");
								$(".deepblue .sec02 .imgbox .right").css("margin-left",im3r+"vh");
							}
						}			
					}

				} else if (sct > stDBof2T+(stDBse2h*0.5)){
					$(".deepblue .txtbox").addClass("on");
				}

			} else if (sct > stDBend2 && sct < stDPofT){
				//console.log("dp 등장");
				$(".deeppink .sec01").css("opacity","1");
				$(".deepblue .sec02").css("opacity","1");
				$(".deepblue .sec02").removeClass("fix");
				$(".deepblue .sec02").addClass("ab");	
				$(".deepblue .txtbox").addClass("ab");
				$(".deeppink .sec01").addClass("fix");
				$(".deeppink .sec01 .imgbox .back").css("background-position-y",wHeight+"px");
				
				if (sct > stDBend2+(wHeight*0.4) && sct < stDPofT){
					var im = parseInt(stDBend2+(wHeight*0.4));
					im = ((sct - im)*0.002);
					$(".product .dpfront").css("opacity",im);		
				} 

			} else if (sct > stDPofT && sct < stDPend1){
				//console.log("dp 1스타트");
				$(".deepblue .sec02").css("opacity","0");
				$(".deeppink .sec02").css("opacity","0");
				$(".bigsec.deepblue").css("opacity","1"); // deepblue 1
				$(".deeppink .sec01").addClass("fix");
				$(".deeppink .sec01").removeClass("ab");
				$(".deeppink .sec01 .txtbox").removeClass("ab");

				$(".product .dpfront").css("opacity","1"); 

				if (sct > stDPofT && sct < stDPofT+(stDPse1h*0.4)){
					var im = parseInt(stDPofT);
					im = wHeight-((sct-im)*0.4);	
												
					if (im < 0){
						$(".deeppink .sec01 .imgbox .back").css("background-position-y","0px");						
					} else {
						$(".deeppink .sec01 .imgbox .back").css("background-position-y",im+"px");
					}
					$(".deeppink .sec01 .txtbox").css("opacity","0");

				} else if (sct > stDPofT+(stDPse1h*0.5)){
					var im = parseInt(stDPofT+(stDPse1h*0.5));
					im = ((sct - im)*0.002);
					$(".deeppink .sec01 .txtbox").css("opacity",im);					
				}
			} else if (sct > stDPend1 && sct < stDPse2t){
				var im = parseInt(stDPend1+(wHeight*0.4));
				im = ((sct - im)*-0.002);

				$(".product .dpfront").css("opacity",im);	
				$(".deeppink .sec01").css("opacity","1");
				$(".deeppink .sec02").css("opacity","1");
				$(".bigsec.deepblue").css("opacity","0"); // deepblue 0
				$(".bigsec.pink").css("opacity","0"); // pink 0
				//console.log("dp 2등장");
				$(".deeppink .sec01").removeClass("fix");
				$(".deeppink .sec01").addClass("ab");	
				$(".deeppink .sec01 .txtbox").addClass("ab");
				$(".deeppink .sec02").removeClass("fix");
				$(".deeppink .sec02 .txtbox").css("opacity","0");		

			} else if (sct > stDPse2t && sct < stDPend2){
				//console.log("dp 2스타트");
				$(".deeppink .sec01").css("opacity","0");
				$(".pink .sec01").css("opacity","0");
				$(".bigsec.pink").css("opacity","1"); // pink 1
				$(".product .dpfront").css("opacity","0");

				$(".deeppink .sec02").addClass("fix");
				$(".deeppink .sec02").removeClass("ab");
				$(".deeppink .sec02 .txtbox").removeClass("ab");

				if (sct > stDPse2t+(stDPse2h*0.4)){
					var im = parseInt(stDPse2t+(stDPse2h*0.4));
					im = ((sct - im)*0.002);
					$(".deeppink .sec02 .txtbox").css("opacity",im);		
				} 			
			} else if (sct > stDPend2 && sct < stPofT){
				//console.log("p 1등장");
				$(".pink .sec01").css("opacity","1");
				$(".deeppink .sec02").css("opacity","1");
				$(".deeppink .sec02").removeClass("fix");
				$(".deeppink .sec02").addClass("ab");	
				$(".deeppink .sec02 .txtbox").addClass("ab");
				$(".pink .sec01").removeClass("fix");	
				$(".pink .sec01 .txtbox").css("opacity","0");	

			} else if (sct > stPofT && sct < stPend1){
				$(".deeppink .sec02").css("opacity","0");
				$(".pink .sec02").css("opacity","0");
				$(".bigsec.deeppink").css("opacity","1"); // deeppink 1
				$(".pink .sec01").addClass("fix");	
				$(".pink .sec01").removeClass("ab");	
				$(".pink .sec01 .txtbox").removeClass("ab");

				if (sct > stPofT+(stPse1h*0.4)){
					var im = parseInt(stPofT+(stPse1h*0.4));
					im = ((sct - im)*0.002);
					$(".pink .sec01 .txtbox").css("opacity",im);		
				} 
			} else if (sct > stPend1 && sct < stPse2t){
				//console.log("p se2 등장");
				$(".pink .sec01").css("opacity","1");
				$(".pink .sec02").css("opacity","1");
				$(".bigsec.deeppink").css("opacity","0"); // deeppink 0
				$(".pink .sec01").addClass("ab");	
				$(".pink .sec01 .txtbox").addClass("ab");
				$(".pink .sec02").removeClass("fix");
				$(".pink .sec02 .imgbox").css("top","0");	

			} else if (sct > stPse2t && sct < (stPse2t+stLsebgBs2)){				
				//console.log("p se2 등장 올라감");
				$(".pink .sec01").css("opacity","0");
				$(".pink .sec02").addClass("fix");
				$(".pink .sec02 .imgbox").css("top",((sct-stPse2t)*-1));
				$(".pink .sec02 .txtbox").css("opacity","0");
			
			} else if (sct > (stPse2t+stLsebgBs2) && sct < (stPend2-stLsebgBs3)){				
				//console.log("p se2 스타트");
				$(".pink .sec03").css("opacity","0");
				$(".pink .sec02").addClass("fix");
				$(".pink .sec02").removeClass("ab");
				$(".pink .sec02 .imgbox").css("top",(stLsebgBs2*-1));
				$(".pink .sec02 .imgbox").css("bottom","auto");

				if (sct > stPse2t+stLsebgBs2+(stPse2h*0.2)){
					var im = parseInt(stPse2t+stLsebgBs2+(stPse2h*0.2));
					im = ((sct - im)*0.002);
					$(".pink .sec02 .txtbox").css("opacity",im);
				}			
			} else if (sct > (stPend2-stLsebgBs3) && sct < stPse3t){
				//console.log("p se3 등장");
				$(".pink .sec02").css("opacity","1");
				$(".pink .sec03").css("opacity","1");
				$(".bigsec.blue").css("opacity","0"); // blue 0
				$(".pink .sec02").removeClass("fix");
				$(".pink .sec02").addClass("ab");
				$(".pink .sec02 .imgbox").css("top","auto");
				$(".pink .sec02 .imgbox").css("bottom","0");
				$(".pink .sec03").removeClass("fix");	
				$(".pink .sec03 .txtbox").css("opacity","0");	

			} else if (sct > stPse3t && sct < stPend3){
				//console.log("p se3 스타트");	
				$(".pink .sec02").css("opacity","0");
				$(".bigsec.blue").css("opacity","1"); // blue 1
				$(".blue .sec01").css("opacity","0");
				$(".pink .sec03").addClass("fix");	
				$(".pink .sec03").removeClass("ab");

				if (sct > stPse3t+(stPse3h*0.2)){
					var im = parseInt(stPse3t+(stPse3h*0.2));
					im = ((sct - im)*0.002);
					$(".pink .sec03 .txtbox").css("opacity",im);
				}
			} else if (sct > stPend1 && sct < stBofT){
				//console.log("b se1 등장");
				$(".blue .sec01").css("opacity","1");
				$(".blue .sec02").css("opacity","0");
				$(".pink .sec03").addClass("ab");	
				$(".pink .sec03 .txtbox").addClass("ab");
				$(".pink .sec03").removeClass("fix");
				$(".blue .sec01").removeClass("fix");
				$(".blue .sec01 .txtbox").css("opacity","0");	

				$(".pink .sec03").css("opacity","1");
			} else if (sct > stBofT && sct < stBend1){
				$(".pink .sec03").css("opacity","0");
				$(".blue .sec02").css("opacity","1");
				//console.log("b se1 스타트");
				$(".bigsec.pink").css("opacity","1"); // pink 1
				$(".blue .sec01").addClass("fix");	
				$(".blue .sec01").removeClass("ab");

				if (sct > stBofT+(stBse1h*0.2)){
					var im = parseInt(stBofT+(stBse1h*0.2));
					im = ((sct - im)*0.002);
					$(".blue .sec01 .txtbox").css("opacity",im);
				}
			} else if (sct > stBend1 && sct < stBse2t){
				//console.log("b se2 등장");
				$(".blue .sec01").css("opacity","1");
				$(".bigsec.pink").css("opacity","0"); // pink 0
				$(".blue .sec01").addClass("ab");	
				$(".blue .sec01 .txtbox").addClass("ab");
				$(".blue .sec01").removeClass("fix");
				$(".blue .sec02").removeClass("fix");
				$(".blue .sec02 .imgbox").css("top","0");		

			} else if (sct > stBse2t && sct < (stBse2t+wHeight)){	
				//console.log("b se2 내려감");		
				$(".blue .sec01").css("opacity","0");
				$(".blue .sec02").addClass("fix");
				$(".blue .sec02 .imgbox").css("top",((sct-stBse2t)*-1));
				$(".blue .sec02 .txtbox").css("opacity","0");				
			
			} else if (sct > (stBse2t+wHeight)){				
				//console.log("b se2 스타트");

				if (sct > stBse2t+wHeight+(stBse2h*0.2)){
					var im = parseInt(stBse2t+wHeight+(stBse2h*0.2));
					im = ((sct - im)*0.002);
					$(".blue .sec02 .txtbox").css("opacity",im);
				}
			} else {
				console.log("out");
			}
		});
	});

};