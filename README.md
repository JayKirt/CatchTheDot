# CatchTheDot
A simple catch the dot game 
To do:
make the bounce pattern more random

How to modify speed:
In the script.js file modify the below code (which is annotated) to change the speed of the bouncing ball, c hanging the number from 10 will change the speed of the ball. The lower the number the faster the speed of the bouncing ball. 
setInterval(moveTarget, 10); 

Modify gameboard size:
Within the script.js file find the below lines of code (which is annotated) and change the numbers- currently set to  800px.
Change the numbers- currently 800px.
gameBoard.style.width = '800px'; <--
gameBoard.style.height = '800px'; <--

Modify bounce direction: 
Within the script.js file find the below code change the numners to change the direction of the bounce on both the X and Y axis.
let targetDirectionX = 2;
 let targetDirectionY = 2;
