$(function(){

	// 底层画布
	var c=document.getElementById("myCanvas1");
	var cxt=c.getContext("2d");

	// 上层画布,绘制矩形提示信息
	var c1=document.getElementById("myCanvas2");
	var cxt1=c.getContext("2d");

	/*开始绘制外边框*/
	cxt.beginPath();
	cxt.strokeStyle   = '#cdc9c4';
	cxt.lineWidth = 4;
	cxt.moveTo(100,400);
	cxt.lineTo(1020,400);
	cxt.stroke();

	cxt.beginPath();
	cxt.strokeStyle   = '#cdc9c4';
	cxt.lineWidth = 4;
	cxt.moveTo(100,400);
	cxt.lineTo(100,0);
	cxt.stroke();

	/*开始绘制横向内边框*/
	cxt.beginPath();
	cxt.strokeStyle='#e7e5e2';
	cxt.lineWidth = 1;
	for(let i=1;i<=6;i++){
		cxt.moveTo(100,400-60*i);
		cxt.lineTo(980,400-60*i);
		cxt.stroke();
	}
	/*开始绘制竖向内边框*/
	for(let i=1;i<=11;i++){
		cxt.moveTo(100+80*i,400);
		cxt.lineTo(100+80*i,40);
		cxt.stroke();
	}
	
	/*开始绘制竖轴文字*/
	cxt.font = "16px SimHei";
    cxt.fillStyle = "#00c5de";
    //从坐标点(50,345)开始绘制文字
    for(let i=0;i<=6;i++){
    	cxt.fillText(10*i+"万", 50, 405-60*i);
    }

    /*开始绘制横轴文字*/
    for(let i=1;i<=12;i++){
    	cxt.fillText("2017-"+i, 80*i, 440);
    }

    /*开始绘制圆点(每月数据)*/
    ////模拟的每月数据
    var arr=[22,40,50,60,32,11,0,45,50,15,20,55];
   
    //开始绘制(圆点Y轴坐标)
    var yArr=[];
    for(let i=0,len=arr.length;i<len;i++){
    	yArr.push(400-arr[i]*6);
    }
    for(let j=0,len=yArr.length;j<len;j++){
    	//画实心圆
    	cxt.beginPath();
    	cxt.fillStyle="#00c5de";
		cxt.arc(100+80*j,yArr[j],9,0,Math.PI*2,true);
		cxt.fill();
		cxt.closePath();
		//绘制连接圆的折线
		cxt.beginPath();
		cxt.strokeStyle='#00c5de';
		cxt.lineWidth = 1;
		cxt.moveTo(100+80*j,yArr[j]);
		cxt.lineTo(100+80*(j+1),yArr[j+1]);
		cxt.stroke();
    }
	c1.addEventListener("mousemove", function (evt) { 
	  // 获取鼠标在canvas画板上的坐标
	  var mousePos = getMousePos(c, evt); 
	  var pagex=mousePos.x,
	  	  pagey=mousePos.y;
	  for(let j=0,len=yArr.length;j<len;j++){
	 	//鼠标移入圆的范围,给圆添加新样式
	 	if(pagex>(100+80*j-9) && pagex<(100+80*j+9) && pagey>(yArr[j]-9) && pagey<(yArr[j]+9)){
	 		// 绘制红色实心圆
	    	cxt1.beginPath();
	    	cxt1.fillStyle="#c9302c";
			cxt1.arc(100+80*j,yArr[j],9,0,Math.PI*2,true);
			cxt1.fill();
			cxt1.closePath();
			// 开始绘制当月的信息的矩形外框
			// cxt1.beginPath();
   //          cxt1.lineWidth = 1;
   //          cxt1.strokeStyle = "#00c5de";
   //          cxt1.moveTo(100+80*j+10, yArr[j]+10);
   //          cxt1.lineTo(100+80*j+10, yArr[j]+55);
   //          cxt1.lineTo(100+80*j+70, yArr[j]+55);
   //          cxt1.lineTo(100+80*j+70, yArr[j]+10);
   //          cxt1.closePath();
   //          cxt1.stroke();
            // 绘制矩形外框内的文字
      //       cxt1.font = "15px SimHei";
    		// cxt1.fillStyle = "#00c5de";
      //       cxt1.fillText(arr[j]+"万", 100+80*j+20, yArr[j]+37);
	 	}else{
	 		// 再重新绘制蓝色实心圆
 		 	cxt1.beginPath();
	    	cxt1.fillStyle="#00c5de";
			cxt1.arc(100+80*j,yArr[j],9,0,Math.PI*2,true);
			cxt1.fill();
			cxt1.closePath();
	 	}
      }
 	}, false); 

    //获取鼠标在canvas画布上的位置(****不是浏览器窗口的鼠标位置)
	 function getMousePos(canvas, evt) { 
	   var rect = canvas.getBoundingClientRect(); 
	   return { 
	     x: evt.clientX - rect.left * (canvas.width / rect.width),
	     y: evt.clientY - rect.top * (canvas.height / rect.height)
	   }
	 }

	//定义清除圆形区域函数
	function clearCircle(oc,x,y,r){
	    for(var i=0; i< Math.round(Math.PI * r); i++){
	        var angle = (i / Math.round(Math.PI * r)) * 360;
	        oc.clearRect(x, y, Math.sin(angle * (Math.PI / 180)) * r , Math.cos(angle * (Math.PI / 180)) * r);
	    }

	}

   

})