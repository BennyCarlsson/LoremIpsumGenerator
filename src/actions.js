import { getLoremIpsumText, getLoremIpsumWordCount, getLoremIpsumSentenceCount, getLoremIpsumParagraphCount } from "./LoremIpsumFunctions"

export const onSliderChangeValue = (n, countOnValues) => {
  const text = getLoremIpsumText(n, countOnValues)
  return {
    type: "SLIDER_CHANGE",
    newValue: Math.floor(n),
    loremIpsumText: text,
    wordCount: getLoremIpsumWordCount(text),
    sentenceCount: getLoremIpsumSentenceCount(text),
    paragraphCount: getLoremIpsumParagraphCount(text)
  }
}
export const onSliderComplete = n => ({
  type: "SLIDER_COMPLETE",
  maxValue: n < 250 ? 500 : Math.floor(n * 2) > 67831 ? 67831 : Math.floor(n * 2)
})
export const changeCountOn = value => ({
  type: "CHANGE_COUNT_ON",
  value
})