import { getPlaiceholder } from "plaiceholder";

export const imagePlaceholderHelper = () => {
  return {
    getPlaceholder: async (coverUrl: string | null | undefined) => {
      if (coverUrl) {
        const { base64, img } = await getPlaiceholder(coverUrl);
        return {
          ...img,
          blurDataURL: base64,
        }
      } else {
        return null
      }
    }
  }
}