import { LoremIpsumText } from "./LoremIpsum"

export const getLoremIpsumTextChar = (n) => {
  const recursiveFunction = (n, x = 0, y = 0, string = "") => {
    string += LoremIpsumText.slice(x, n + y + 1)
    const countStriped = string.replace(/<\/?p[^>]*>|<\/p|<\/|<p|</g, "").length
    y = string.length - countStriped;
    if (countStriped < n) {
      return recursiveFunction(n, string.length, y, string)
    }
    if (string.slice(string.length - 1, string.length) === "<") {
      return string.slice(0, string.length - 1)
    }
    return string
  }
  return recursiveFunction(n)
}
export const getLoremIpsumWordCount = n => {
  return getLoremIpsumTextChar(n).split(" ").length
}
