import { GENRES_FOR_RAND } from "../constants"

export const getRandomGenre = () => {
  return GENRES_FOR_RAND[Math.floor(Math.random() * GENRES_FOR_RAND.length)]
}