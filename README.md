# CatchTheDot
A simple catch the dot game <br>
To do:<br>
make the bounce pattern more random<br>

How to modify speed: <br>
In the script.js file modify the below code (which is annotated) to change the speed of the bouncing ball, c hanging the number from 10 will change the speed of the ball. The lower the number the faster the speed of the bouncing ball. <br>
setInterval(moveTarget, 10); <br>

Modify gameboard size:<br>
Within the script.js file find the below lines of code (which is annotated) and change the numbers- currently set to  800px.<br>
Change the numbers- currently 800px.<br>
gameBoard.style.width = '800px'; <--<br>
gameBoard.style.height = '800px'; <--<br>

Modify bounce direction: <br>
Within the script.js file find the below code change the numners to change the direction of the bounce on both the X and Y axis.<br>
let targetDirectionX = 2;<br>
 let targetDirectionY = 2;<br>
