import { LoremIpsumText } from "./LoremIpsumText"

export const getLoremIpsumTextOnChar = n => {
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

export const getLoremIpsumTextOnWord = n => {
  return LoremIpsumText.split(" ", n).join(" ");
}
export const getLoremIpsumWordCount = text => {
  return text.split(" ").length
}
export const getLoremIpsumTextOnSentence = n => {
  return LoremIpsumText.split(".", n).join(".") + "."
}
export const getLoremIpsumSentenceCount = text => {
  return text.split(".").length
}
export const getLoremIpsumTextOnParagraph = n => {
  return LoremIpsumText.split("</p>", n).join("</p>") + "</p>"
}
export const getLoremIpsumParagraphCount = text => {
  return text.split("</p>").length
}