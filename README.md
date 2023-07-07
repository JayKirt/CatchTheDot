<h1 "text-decoration: underline;" >CatchTheDot </h1>
A simple catch the dot game <br>
<u> To do: </u><br>
make the bounce pattern more random<br>

<u>How to modify speed: </u> <br>
In the script.js file modify the below code (which is annotated) to change the speed of the bouncing ball, changing the number from 10 will change the speed of the ball. The lower the number the faster the speed of the bouncing ball. <br>
<br>
setInterval(moveTarget, 10); <br>

<u> Modify gameboard size: </u> <br>
Within the script.js file find the below lines of code (which is annotated) and change the numbers- currently set to  800px.<br>
Change the numbers- currently 800px.<br>
<br>
gameBoard.style.width = '800px'; <--<br>
gameBoard.style.height = '800px'; <--<br>

<u>Modify bounce direction:</u> <br>
Within the script.js file find the below code change the numners to change the direction of the bounce on both the X and Y axis.<br> 
<br>
let targetDirectionX = 2;<br>
 let targetDirectionY = 2;<br>
