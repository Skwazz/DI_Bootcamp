The Floor Is Lava - Hackaton Idea !


Main Goal: 
Create a game called "The Floor Is Lava".
The premise is really simple:
There will be a grid of 6X6 across all the webpage with a start the game button 
After clicking on the button a random row of the grid will switch color for 30 seconds and you need to use your mouse and 
hover only on top of the tiles that changed color without going out of the lines all the way to the buttom of the grid and press the "End" button.
If you move outside the lines you lose a life or if 30 seconds pass you lose life aswell and start from the begining.

Members:
it would be a solo project.

I have a concept of the webpage i already built that i can share the main idea

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>The Floor Is Lava</title>

    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="title">
      <h1>The Floor Is Lava!</h1>
    </div>
    <div class="d-grid gap-2 col-6 mx-auto mb-4">
        <button class="btn btn-danger" type="button">Start The Game!</button>
      </div>
   
    <div id="container"></div>
    <div class="d-grid gap-2 col-6 mx-auto mt-4">
        <button class="btn btn-warning" type="button">The End!</button>
      </div>
   
    <ul>
        <p>How To Play!</p>
        <li>
            Start by clicking the "Start The Game" Button!
        </li>
        <li>
            Tiles would change randomly and will show the right path to the end!
        </li>
        <li>
            Move your mouse over the correct tiles without going out of the lines or you will lose a life!
        </li>
        <li>
            Click on the "End" button to win!
        </li>
    </ul>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
      crossorigin="anonymous"
    ></script>
    <script src="main.js"></script>
  </body>
</html>


// css

html,
body {
  margin: 0;
  padding: 0;
}

body {
  background: #333333;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
  "Lucida Sans", Arial, sans-serif;
  font-weight: bold;
}

.title {
  display: flex;
  justify-content: center;

  color: #ffffff;
  text-shadow: 0 -1px 4px #fff, 0 -2px 10px #ff0, 0 -10px 20px #ff8000,
    0 -18px 40px #f00;
    margin-bottom: 0.5em;
}

:root {
    --grid-cols: 1;
    --grid-rows: 1;
  }
  
  #container {
    display: grid;
    grid-gap: 0.2em;
    grid-template-rows: repeat(var(--grid-rows), 1fr);
    grid-template-columns: repeat(var(--grid-cols), 1fr);
  }
  
  .grid-item {
    padding: 4.7em;
    border: 1px solid #ddd;
    text-align: center;
    background: rgba(244, 78, 1, 0.26);
    
  }
ul{
    color: whitesmoke;
    border: 1px white solid;
    position: relative;
    text-align: center;
    list-style: none;
 width: 50em;   
 height: 10em; 
 margin: auto;
 margin-top: 5em;
}


//javascript

let container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(6, 6);



let selectStartBtn = document.querySelector(`button`)

selectStartBtn.addEventListener(`click`, (event)=>{
event.target.
}
)
