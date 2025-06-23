export type PlayerName =
  | 'Mario'
  | 'Peach'
  | 'Yoshi'
  | 'Bowser'
  | 'Luigi'
  | 'Donkey Kong'

export interface Player {
  name: PlayerName
  speed: number
  handling: number
  power: number
}

export interface PlayerInRace extends Player {
  points: number
}
