# Project challenge [DIO](https://www.dio.me/): Mario Kart

Challenge from the Node.js course by [Felipe Aguiar](https://github.com/felipeAguiarCode)

In this project I developed a racing simulator inspired by Mario Kart using Node.js, where all the game logic is executed in the terminal.

Original repository developed by Felipe: https://github.com/digitalinnovationone/formacao-nodejs/tree/main/03-projeto-mario-kart

## What I changed in my version

- Project 100% in English

- I used typescript instead of javascript

- I developed my own logic, simplifying the process and fixing some bugs.

## Rules & Mechanics

- The computer must receive two characters, each competing in a race using one object.

- The characters will race on a randomly generated 5-round track.

- Each round, a track segment will be drawn — it can be a straight, a curve, or a confrontation.

- If the segment is a STRAIGHT, each player rolls a 6-sided die and adds their SPEED attribute. The winner earns 1 point.

- If the segment is a CURVE, each player rolls a 6-sided die and adds their HANDLING attribute. The winner earns 1 point.

- If the segment is a CONFRONTATION, each player rolls a 6-sided die and adds their POWER attribute. The loser loses 1 point.

- No player can have a negative score (minimum is 0).

- At the end, the player with the most points wins.
