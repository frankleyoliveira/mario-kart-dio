import { players } from './players'
import { PlayerInRace, PlayerName } from './types'

function selectPlayer(name: PlayerName): PlayerInRace {
  const player = players.find((p) => p.name === name)!

  return {
    ...player,
    points: 0,
  }
}

function getRandomNum(maxNum: number) {
  return Math.floor(Math.random() * maxNum) + 1
}

function logRollResult(
  name: string,
  skill: string,
  diceResult: number,
  attribute: number
) {
  console.log(
    `🎲 ${name} rolled a ${skill} dice. Result: ${diceResult} + ${attribute} = ${
      diceResult + attribute
    }`
  )
}

;(function main() {
  const player1 = selectPlayer('Mario')
  const player2 = selectPlayer('Luigi')

  const blockAndSkill = {
    STRAIGHT: 'speed',
    CURVE: 'handling',
    CONFRONTATION: 'power',
  } as const

  console.log(
    `🏁🚨 Race between ${player1.name} and ${player2.name} starting...\n`
  )

  // Play the race rounds
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Round ${round}`)

    // draw block
    const [block, skill] = Object.entries(blockAndSkill)[getRandomNum(3) - 1]
    console.log(`Block: ${block}`)

    // roll dices
    const diceResult1 = getRandomNum(6)
    const diceResult2 = getRandomNum(6)

    // skill test
    let skillSum1 = diceResult1 + player1[skill]
    let skillSum2 = diceResult2 + player2[skill]

    logRollResult(player1.name, skill, diceResult1, player1[skill])
    logRollResult(player2.name, skill, diceResult2, player2[skill])

    const isConfrontation = block === 'CONFRONTATION'

    if (skillSum1 > skillSum2) {
      console.log(`${player1.name} won the round!`)
      if (isConfrontation) {
        if (player2.points > 0) {
          player2.points--
          console.log(`${player2.name} lost one point 🐢`)
        }
      } else {
        console.log(`${player1.name} scored one point!`)
        player1.points++
      }
    } else if (skillSum2 > skillSum1) {
      console.log(`${player2.name} won the round!`)
      if (isConfrontation) {
        if (player1.points > 0) {
          player1.points--
          console.log(`${player1.name} lost one point 🐢`)
        }
      } else {
        console.log(`${player2.name} scored one point!`)
        player2.points++
      }
    } else {
      console.log('The round ended in a draw')
    }

    console.log(
      `\nPartial result after round ${round}:\n${player1.name}: ${player1.points}\n${player2.name}: ${player2.points}`
    )
    console.log('_____________________________\n')
  }

  // Declare winner
  console.log('\nFinal result:')
  console.log(`${player1.name}: ${player1.points}`)
  console.log(`${player2.name}: ${player2.points}`)

  if (player1.points > player2.points) {
    console.log(`\n${player1.name} won the race! Congratulations! 🏆`)
  } else if (player2.points > player1.points) {
    console.log(`\n${player2.name} won the race! Congratulations! 🏆`)
  } else {
    console.log('\nThe race ended in a draw')
  }
})()
