var noofsquare=6;
var color=[];
var targetcolor;
var selectedbtn="Hard";

var square=document.querySelectorAll(".square");
var resetbtn=document.getElementById("reset");
var mode=document.getElementsByClassName("mode");
var scoretag=document.getElementById("score");

initial();

function initial()
{
	reset();
	modebtns();
	settingsquare();
}

function modebtns()
{
	resetbtn.addEventListener("click",function(){
	reset();
	}); 

	for(var i=0;i<mode.length;i++)
	{
		mode[i].addEventListener("click",function(){
			for(var j=0;j<mode.length;j++)
			{
				mode[j].classList.remove("selected");
			}

			this.classList.add("selected");
			selectedbtn=this.textContent;

			if(this.textContent=="Easy")
				noofsquare=3;
			else
				noofsquare=6;

			reset();

		});
	}
}

function settingsquare()
{
	for(var i=0;i<noofsquare;i++)
	{
		square[i].style.background=color[i];
		square[i].addEventListener("click",function(){
			var guessedcolor=this.style.background;
			if(guessedcolor==targetcolor)
				{
					changecolor(guessedcolor);
					document.getElementById("message").textContent="Correct!";
					resetbtn.textContent="Play Again?";
					document.getElementsByTagName("h1")[0].style.background=guessedcolor;
				}
			else
				{
					this.style.background="black";
					var score=scoretag.textContent;
					score--;
					scoretag.textContent=score;
					document.getElementById("message").textContent="Try Again";
					if(score==0)
						{
							document.getElementById("message").textContent="Game Over!";
							for(var j=0;j<square.length;j++)
							{
								square[j].style.display="none";
							}
							resetbtn.textContent="Play Again?";
						}
				}
			
		});
	}
}
function reset()
{
	color=generatecolor();
	targetcolor=pickcolor();

	for(var i=0;i<square.length;i++)
		{
			if(color[i])
			{
				square[i].style.display = 'block';
				square[i].style.background=color[i];
			}
			else
			{
				square[i].style.display ="none";
			}
		}
	if(selectedbtn=="Easy")
		scoretag.textContent=2;
	else
		scoretag.textContent=3;
	document.getElementById('colordisplay').textContent=targetcolor;
	document.getElementsByTagName("h1")[0].style.background="steelblue";
	resetbtn.textContent="New Colors";
	document.getElementById("message").textContent="";
}
function changecolor(color)
{
	for(var i=0;i<square.length;i++)
	{
		square[i].style.background=color;
	}
}

function pickcolor()
{
	var random=Math.floor(Math.random()*noofsquare);
	return(color[random]);
}

function generatecolor()
{
	var arr=[];

	for(var i=0;i<noofsquare;i++)
	{
		arr[i]=randomcolor();
	}

	return arr;
}

function randomcolor()
{
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);

	return("rgb("+r+", "+g+", "+b+")");
}

