//dcript for drawing the gameboard


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");


	tileSize= 65;

	//red start and end
	ctx.fillStyle = "#FF0000";
	ctx.fillRect(40,40, 65,65);		//start
	ctx.fillStyle= "#FF9999";
	ctx.fillRect(40,105, 65,65);		//end

	//blue start and end
	ctx.fillStyle= "#0000FF";
	ctx.fillRect(495,495, 65,65);		//start
	ctx.fillStyle= "#9999FF";
	ctx.fillRect(495,430, 65,65);		//end

	// outer square
	ctx.moveTo(40, 40);
	ctx.lineTo(560, 40);
	ctx.lineTo(560, 560);
	ctx.lineTo(40, 560);
	ctx.lineTo(40, 40);
	ctx.stroke();

	//inner square
	ctx.moveTo(40, 105);
	ctx.lineTo(560, 105);
	ctx.stroke();
	ctx.moveTo(495, 40);
	ctx.lineTo(495, 560);
	ctx.stroke();
	ctx.moveTo(560, 495);
	ctx.lineTo(40, 495);
	ctx.stroke();
	ctx.moveTo(105, 560);
	ctx.lineTo(105, 40);
	ctx.stroke();

	//upper line tiles
	ctx.moveTo(175, 40);
	ctx.lineTo(175, 105); 		//1 of 5
	ctx.moveTo(240, 40);
	ctx.lineTo(240, 105); 		//2 of 5
	ctx.moveTo(305, 40);
	ctx.lineTo(305, 105); 		//3 of 5
	ctx.moveTo(370, 40);
	ctx.lineTo(370, 105); 		//4 of 5
	ctx.moveTo(435, 40);
	ctx.lineTo(435, 105); 		//5 of 5
	ctx.stroke();

	//right line tiles
	ctx.moveTo(495, 170);
	ctx.lineTo(560, 170);		//1 of 5
	ctx.moveTo(495, 235);
	ctx.lineTo(560, 235);		//2 of 5
	ctx.moveTo(495, 300);
	ctx.lineTo(560, 300);		//3 of 5
	ctx.moveTo(495, 365);
	ctx.lineTo(560, 365);		//4 of 5
	ctx.moveTo(495, 430);
	ctx.lineTo(560, 430);		//5 of 5
	ctx.stroke();
	

	//bottom tiles
	ctx.moveTo(175, 495);
	ctx.lineTo(175, 560); 		//1 of 5
	ctx.moveTo(240, 495);
	ctx.lineTo(240, 560); 		//2 of 5
	ctx.moveTo(305, 495);
	ctx.lineTo(305, 560); 		//3 of 5
	ctx.moveTo(370, 495);
	ctx.lineTo(370, 560); 		//4 of 5
	ctx.moveTo(435, 495);
	ctx.lineTo(435, 560); 		//5 of 5
	ctx.stroke();

	//left tiles
	ctx.moveTo(40, 170);
	ctx.lineTo(105, 170);		//1 of 5
	ctx.moveTo(40, 235);
	ctx.lineTo(105, 235);		//2 of 5
	ctx.moveTo(40, 300);
	ctx.lineTo(105, 300);		//3 of 5
	ctx.moveTo(40, 365);
	ctx.lineTo(105, 365);		//4 of 5
	ctx.moveTo(40, 430);
	ctx.lineTo(105, 430);		//5 of 5
	ctx.stroke();
