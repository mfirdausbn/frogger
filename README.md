# frogger

GA unit 1 Project

Explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.

Technologies used:
Basic DOM manipulation and event listeners

Approach taken:
1: Create grids in HTML
2: Each grid will have a class to display items
3: Objects "move" by removing and adding classes across grids
4: Game is lost when froggy collides with bus or snake. This is achieved by checking if the froggy "contains" the class of a bus/snake
5: Game is won when froggy reaches the dragonfly
6: Game speed can be adjusted using the setInterval function

Unsolved problems:
1: white background on froggy when he crosses the logs. This is because both froggy and the logs are background images and froggy will replace the logs' background image. I can solve this problem by changing the log from a background image into just a background colour.

Further stretch goals:
1: create a button to increase the difficulty by adjusting setInterval function
2: increase grid size and add more elements
3: randomise the movement of the logs,snakes/bus
