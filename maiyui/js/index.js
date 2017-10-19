$(document).ready(function() {

		$('#contain').fullpage({
			sectionsColor: ['#1bbc9b', '#eeeeee', '#eeeeee', '#f8f8f8'],
			anchors: ['page1', 'page2', 'page3', 'page4'],
			menu: '#menu',
			afterLoad: function(anchorLink, index){
				if(index==2){
					$(".section2 .cirEff").css({"transform":"rotate(90deg)","transform-origin":"center center"})
				}
				
				
			},
			onLeave: function(index, direction){
				if(index==2 && direction==3){
					
					$(".section2 .cirEff").css({"transform":"rotate(180deg)","transform-origin":"center center"})
				
				}
				if(index==2 && direction==1){
					
					$(".section2 .cirEff").css({"transform":"rotate(0deg)","transform-origin":"center center"})
				
				}
			},
			afterRender:function(){
				console.log(1)
			},
			afterResize:function(){
				 setCirWid();
//				$('.slider_01').carouFredSel({
//					destroy:{
//						'origOrder':false
//					}
//				})
//				$('.slider_02').carouFredSel({
//					destroy:{
//						'origOrder':false
//					}
//				})
				$('.slider_02').trigger("destroy",{origOrder:true})
				$('.slider_01').trigger("destroy",{origOrder:true})
				$('.switch_wrap').trigger("destroy",{origOrder:true})
				
				
				section3Silder();
				 index_gd_home('.section3 .imgWrap img', ".section3 .imgWrap", 750, 1080);
				 
				 
				 
			}
		});
		
	
		
		
		
//section2
	setCirWid();
	function setCirWid(){
		var hig=$(".section2 .cirWrap").height();
		$(".section2 .cirWrap").width(hig);
	}
		
		
		




//section3
		section3Silder();
		index_gd_home('.section3 .imgWrap img', ".section3 .imgWrap", 750, 1080);
		function section3Silder(){
			$('.slider_01').carouFredSel({
	
				responsive: true,
				'scroll': {'duration': 600,'items': 1, 
	//					'fx': 'crossfade'
					},
	            'swipe': {'onMouse': true},
	            'auto': false,
	            'pagination': {
	                  'container': ".slider_02", 
	                    'anchorBuilder': false
	            }
			
		    });
		    $('.slider_02').carouFredSel({
	
				responsive: true,
				'scroll': {'duration': 600,'items': 1,
	//					'fx': 'crossfade'
					event:'click'
				},
	            'swipe': {'onMouse': true},
	            'auto': true,
	            'pagination': {
	                  'container': ".switch_wrap", 
	                    'anchorBuilder': false
	            },
	            'synchronise': ".slider_01"
			
		    });
			
			
			$(".switch_wrap").carouFredSel({
	            'width': '100%',
	            'scroll': {
	            	'duration': 600, 
	            	'items': 1
	            },
	            'direction':"down",
	            'auto': 'true', 
	            'synchronise': ".slider_02"
	        });
		}
		
		
		
		 function index_gd_home(a, b, w, h) {
                    var $window = $(b);
                    var $windowWidth = function() {
                        return $window.width();
                    };
                    var $windowHeight = function() {
                        return $window.height();
                    };
                    $window.fssResize(function() {
                        var width = $windowWidth();
                        var height = $windowHeight();

                        $(b).each(function() {
                            $this = $(this);
                            $this.height(height).width(width);
                            $this.triggerHandler("configuration", {height: height, width: width, items: {width: width}});
                            $this.triggerHandler("updateSizes");
                        });

                    });

                    $(a).each(function() {
                        $(this).fullscreenstage({'width': w, 'height': h});
                    });

                    $(window).fssResize();
                   
                }
                 
		

});