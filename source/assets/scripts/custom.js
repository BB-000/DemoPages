var preventOrphans = function(element) {
	//Would suggest this is used for title text mainly
	$(element).each(function(){
	    var string = $(this).html();
	    string = string.replace(/ ([^ ]*)$/,'&nbsp;$1');
	    $(this).html(string);
	});
}






// Svg icons

// new svgIcon( document.querySelector( '.mainMenu svg-icon-hamburger' ), 
	// svgIconConfig, { easing : mina.elastic, speed: 600 } );


// window.onload = function() {
// 	var s = Snap('#burgerSVG');
// 	Snap.load('../images/burger.svg', function(f) {
// 		burga = f.select('#burgerSVG');
// 		burga.hover(function(){
// 			burga.animate({y:500}, 500, mina.elestic);
// 		},
// 		function() {
// 			burga.animate({y:10}, 500, mina.elastic);
// 		}
// 		);
// 		s.append(f);
// 	});
// };


// burgerIcon : { 
// 	url : '../images/burger.svg',
// 	animation : [
// 		{ 
// 			el : 'path:nth-child(5)', 
// 			animProperties : { 
// 				from : { val : '{"path" : "m 61.693118,24.434001 -59.386236,0 29.692524,19.897984 z"}', animAfter : '{"stroke" : "#000"}' }, 
// 				to : { val : '{"path" : "m 61.693118,24.434001 -59.386236,0 29.692524,-19.7269617 z"}', animAfter : '{"stroke" : "#444"}' }
// 				} 
// 		},
// 		{ 
// 			el : 'rect:nth-child(3)', 
// 			animProperties : { 
// 				from : { val : '{"transform" : "t0 0"}', after : '{ "opacity" : 0 }' }, 
// 				to : { val : '{"transform" : "t-10 -10"}', before : '{ "opacity" : 1 }' }
// 			} 
// 		}
// ]
// }



// var s = new Snap('#svg-burger');

// Snap.load('../assets/images/burger.svg', function (response) {
//     var burger = response;
//     s.append(burger);
// });












////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////  Animated Svg icons - using snap.svg 
/////////////////////////  & function from http://tympanus.net/Development/AnimatedSVGIcons/ 
////////////////////////////////////////////////////////////////////////////////////////////

var svgIconConfig = {
 burger : {
		url : '../assets/images/burger.svg',
		animation : [
			{ 
				el : 'path:nth-child(1)', 
				animProperties : { 
					from : { val : '{"path" : "m 5.0916789,20.818994 53.8166421,0"}' }, 
					to : { val : '{"path" : "M 12.972944,50.936147 51.027056,12.882035"}' }
				} 
			},
			{ 
				el : 'path:nth-child(2)', 
				animProperties : { 
					from : { val : '{"transform" : "s1 1", "opacity" : 1}', before : '{"transform" : "s0 0"}' }, 
					to : { val : '{"opacity" : 0}' }
				} 
			},
			{ 
				el : 'path:nth-child(3)', 
				animProperties : { 
					from : { val : '{"path" : "m 5.0916788,42.95698 53.8166422,0"}' }, 
					to : { val : '{"path" : "M 12.972944,12.882035 51.027056,50.936147"}' }
				} 
			}
		]
	}
};

var burger = new svgIcon( document.querySelector( '.mainMenu .svg-icon-burger' ), 
svgIconConfig, { 
	easing : mina.elastic, 
	speed: 600,
    evtoggle : 'click', 
    selfTrigger : 'toggleMenu',
	onToggle : function() { console.log('toggle') } 
} );







$(function(){
	$('#toggleMenu').click(function(){
		// burger.toggle(true);
	})
})



path1 = Snap.select('#p01');



function animateSvg01() {
	path1.animate({stroke: 'green'}, 3000);
}




  ////////////////////////////////////////////////////////////////
 ////////////////////////////////// Line Graph   ////////////////
////////////////////////////////////////////////////////////////



		// $(function(){ 

		var s = Snap('#chartsvg');

		var chart = Snap.load("assets/images/graphLine1opt.svg", function(f) {
			s.append(f);


			ln1 = s.select("#path001");
			ln2 = s.select("#path002");
			ln3 = s.select("#path003");
			ln4 = s.select("#path004");
			ln5 = s.select("#path005");

			newPath = s.select("#newPath001");

			dot0 = s.select("#circle000");
			dot1 = s.select("#circle001");
			dot2 = s.select("#circle002");
			dot3 = s.select("#circle003");
			dot4 = s.select("#circle004");
			dot5 = s.select("#circle005");

			dots = s.select("#circles");

			rects = s.select('#rect002');

			var leng = newPath.getTotalLength();
			newPath.attr({
				'stroke-dasharray': leng + ' ' + leng,
				'stroke-dashoffset': leng 
			});



			//////////////////////////////////MASK////////////////////////////////////////
			// maskShape = Snap.select('#maskPath');
			// maskShape = s.circle(300, 300, 100);  // test circle mask
			// maskShape.attr({'fill' : '#fff'});
			// rects.attr({ mask : maskShape});  // Why hide whole shape??
			//////////////////////////////////////////////////////////////////////////////////
			
		});



		// )};

	// window.onload = function() {
	// $(function(){ 



		// ANIMATE DOTS 1 BY 1
		var animateDotsSeq = function() {
			// make this pass in the parameters of where to animate the dots to
			goDot0();
		}

		var goDot0 = function() {
			console.log('dot 0');
			dot0.animate({
				cy: 117
			}, 1000, goDot1)
		}
		var goDot1 = function() {
			console.log('dot 1');
			dot1.animate({
				cy: 220
			}, 1000, goDot2)
		}
		var goDot2 = function() {
			console.log('dot 2');
			dot2.animate({
				cy: 336
			}, 1000, goDot3)
		}
		var goDot3 = function() {
			console.log('dot 3');
			dot3.animate({
				cy: 389
			}, 1000, goDot4)
		}
		var goDot4 = function() {
			console.log('dot 4');
			dot4.animate({
				cy: 343
			}, 1000, goDot5)
		}
		var goDot5 = function() {
			console.log('dot 5');
			dot5.animate({
				cy: 211
			}, 1000, animatePath)
		}


		var goDotX = function(dot, y) {
			console.log(dot);

			dot.animate({
				cy: y
			}, 1000)
		}

		var animateDots = function() {
			goDotX(dot0, 117);
			setTimeout(goDotX(dot1, 220), 2000);
			setTimeout(goDotX(dot2, 336), 4000);
		}



		var animateDotsAll = function() {

			dot0.animate({
			    cy: 117
			}, 1000)

			dot1.animate({
			    cy: 220
			}, 1000)

			dot2.animate({
			    cy: 336
			}, 1000)

			dot3.animate({
			    cy: 389
			}, 1000)

			dot4.animate({
			    cy: 343
			}, 1000)

			dot5.animate({
			    cy: 211
			}, 1000, animatePath)



		}

		var resetDots = function() {
			// dots.attr({ cy : 542 });
			dot1.attr({ cy : 0});
			dot2.attr({ cy : 0});
			dot3.attr({ cy : 0});
			dot4.attr({ cy : 0});
			dot5.attr({ cy : 0});

		}


		var animatePath = function() {
			var leng = newPath.getTotalLength();
			console.log(leng);

			newPath.animate({
				'stroke-dasharray': leng + ' ' + leng,
				'stroke-dashoffset': 0
			}, 1500)
		}






		
		var animateD1 = function() {
			ln1.animate({
				d : "m101 117 98 41"
			}, 1000)
		};

		// ln1.attr({ d : 'm101 117 98 31' });





		// });

	// }



$(function(){ 
	$('#go').click(animateDotsAll);
	$('#go2').click(animateDotsSeq);
});