import { GENRES } from "./constants"

export const getRandomGenre = () => {
  return GENRES[Math.floor(Math.random() * GENRES.length)]
}