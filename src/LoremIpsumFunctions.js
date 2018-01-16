import { LoremIpsumText } from "./LoremIpsum"

export const getLoremIpsumText = (n) => {
  const recursiveFunction = (n, x = 0, lastString = "") => {
    myString = LoremIpsumText.slice(0, n + x + 1)
    const stripedString = myString.replace(/<p>|<\/p>/g, "")
    if (stripedString.length < n && myString.trim() !== lastString.trim()) {
      recursiveFunction(n, n - stripedString.length + 1, myString)
    }
    return myString
  }
  return recursiveFunction(n)
}
export const getLoremIpsumWordCount = n => {
  return getLoremIpsumText(n).split(" ").length
}
