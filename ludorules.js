var redhome=2;
var bluehome=2;

var redover=0;
var blueover=0;

var red6=0;
var blue6=0;

var redpath= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,27,27,27,27,27];
var bluepath=[15,16,17,18,19,20,21,22,23,24,25,26,27,0,1,2,3,4,5,6,7,8,9,10,11,12,13,13,13,13,13,13];

var red1x=65;
var red1y=65;
var red2x=65;
var red2y=65;

var blue1x= 520;
var blue1y=520;
var blue2x=520;
var blue2y=520;

var red1=-1;
var red2=-1;
var blue1=-1;
var blue2=-1;



var turn=0;
var dice=0;


function givex (n)
{
	switch (n)
	{
		case 0:
		case 27:
		case 26:
		case 25:
		case 24:
		case 23:
		case 22:
		case 21:
			return 65;
		case 1:
		case 20:
			return 130;
		case 2:
		case 19:
			return 195;
		case 3:
		case 18:
			return 260;
		case 4:
		case 17:
			return 325;
		case 5:
		case 16:
			return 390;
		case 6:
		case 15:
			return 455;
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
		case 12:
		case 13: 
		case 14:
			return 520;
	}

}

function givey (m)
{
	switch (m)
	{
		case 0:
		case 1:
		case 2:
		case 3:
		case 4: 
		case 5:
		case 6:
		case 7:
			return 65;
		case 8:
		case 27:
			return 130;
		case 9:
		case 26:
			return 195;
		case 10:
		case 25:
			return 260;
		case 11:
		case 24:
			return 325;
		case 12:
		case 23:
			return 390;
		case 13:
		case 22:
			return 455;
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19: 
		case 20: 
		case 21:
			return 520;

	}
}

/*function roll()
{
	dice= Math.ceil( (Math.random() )*6); 
	document.getElementById("display").innerHTML=toString(dice);
	return dice;

}

function show(m,n,s)
{
	ctx.font = "15px Arial";
	ctx.fillText(s, m, n);
}
*/

var c=0;
var now=false;


function move ()
{
	dice=Math.ceil( (Math.random() )*6); 
	console.log("1");
	console.log("Dice:"+dice);
	document.getElementById("display").innerHTML=dice;
	console.log("2");
	ctx.font = "15px Arial";
	notnow=true;

	if (turn%2==0)				//turn is even, starting from 0, red will move
	{
		if (dice==6) {
			red6++;
		}

		console.log("3");
		if ((dice!=6) && (redhome==2))
		{
			turn++;
			document.getElementById("winner").innerHTML= "Blue's turn";
			document.getElementById("dice").addEventListener("click", move);
		}
		console.log("4");

		if (red6==1 && redhome==2){
			red1=0;
			redhome=1;
			notnow=false;
			red1x= givex(redpath[red1]);
			red1y=givey(redpath[red1]);
			ctx.fillText("1A", red1x, red1y);
			document.getElementById("dice").addEventListener("click", move);
		}

		if (red6==2 && redhome==1) {
			red2=0;
			redhome=0;
			notnow=true;
			red2x= givex(redpath[red2]);
			red2y=givey(redpath[red2]);
			ctx.fillText("1B", red2x, red2y);
			document.getElementById("dice").addEventListener("click", move);
		}

		if (redover==0 && red1>=0 && notnow) {
			red1+=dice;
			red1x= givex(redpath[red1]);
			red1y=givey(redpath[red1]);
			ctx.fillText("1A", red1x, red1y);
			if (redpath[red1]==27) {
				redover=1;
			}
		}

		if (redover==1 && red2>=0 && notnow){
			red2+=dice;
			red1+=dice;
			red2x= givex(redpath[red2]);
			red2y=givey(redpath[red2]);
			ctx.fillText("1B", red2x, red2y);
			if (redpath[red2]==27) {
				redover=2;
			}
		}
		console.log(c++);
		document.getElementById("winner").innerHTML= "Blue's turn";
		document.getElementById("dice").addEventListener("click", move);
		console.log(c++);

	}


	if (turn%2==1)				//turn is odd, starting from 1, blue will move
	{
		if (dice==6) {
			blue6++;
		}

		if ((dice!=6) && bluehome==2)
		{
			turn++;
			document.getElementById("winner").innerHTML= "Red's turn";
			document.getElementById("dice").addEventListener("click", move);
			
		}

		if (blue6==1){
			blue1=0;
			notnow=false;
			blue1x= givex(bluepath[blue1]);
			blue1y=givey(bluepath[blue1]);
			ctx.fillText("2A", blue1x, blue1y);
			document.getElementById("dice").addEventListener("click", move);
			

		}

		if (blue6==2) {
			blue2=0;
			notnow=false;
			blue2x= givex(bluepath[blue2]);
			blue2y=givey(bluepath[blue2]);
			ctx.fillText("2B", blue2x, blue2y);
			document.getElementById("dice").addEventListener("click", move);
			
		}

		if (blueover==0 && blue1>=0 && notnow) {
			blue1+=dice;
			blue1x= givex(bluepath[blue1]);
			blue1y=givey(bluepath[blue1]);
			ctx.fillText("2A", blue1x, blue1y);
			if (bluepath[blue1]==13) {
				blueover=1;
			}
		}

		if (blueover==1 && blue2>=0 && notnow){
			blue2+=dice;
			blue2x= givex(bluepath[blue2]);
			blue2y=givey(bluepath[blue2]);
			ctx.fillText("2B", blue2x, blue2y);
			if (bluepath[blue2]==27) {
				blueover=2;
			}
		}

		document.getElementById("winner").innerHTML="Red's turn";
		document.getElementById("dice").addEventListener("click", move);

	}

	turn++;
	if (redover==2) {
		document.getElementById("winner").innerHTML="Red wins";
	}

	if (blueover==2) {
		document.getElementById("winner").innerHTML="Blue wins";
	}
}