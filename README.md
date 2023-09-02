<h1><ins>Catch The Dot.</ins></h1>
<h2>A simple catch the dot game</h2> 

<h4><ins>To do:</ins></h4> 

<ol>
  <li>Make the bounce pattern more randomised.</li>
  <li>Add a score.</li>
  <li>Add a user inputted username.</li>
  <li>Different variants of ball size and speed randomised on reset.</li>
  <li>Less clunky reset feature, without an alert.</li>
  <li>Changing gameboard shape</li>
</ol>
<br>
  
<h3><ins>How to modify speed:</ins> </h3> 
<p>In the script.js file modify the below code (which is annotated) to change the speed of the bouncing ball, changing the number from 10 will change the speed of the ball. The lower the number the faster the speed of the bouncing ball. </p> 

<p>setInterval(moveTarget, 10);</p> 
<br>

<h3><ins>Modify gameboard size:</ins></h3> 
<p>Within the script.js file find the below lines of code (which is annotated) and change the numbers- currently set to  800px.</p> 
<p>Change the numbers- currently 800px.</p> 

<p>gameBoard.style.width = '800px'; <-- </p> 
<p>gameBoard.style.height = '800px'; <-- </p> 
<br>

<h3><ins>Modify bounce direction:</ins></h3> 
<p>Within the script.js file find the below code change the numners to change the direction of the bounce on both the X and Y axis.</p>  

<p>let targetDirectionX = 2;</p>
<p> let targetDirectionY = 2; </p>

