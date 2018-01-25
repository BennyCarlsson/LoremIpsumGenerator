import { getLoremIpsumTextOnWord, getLoremIpsumWordCount, getLoremIpsumSentenceCount, getLoremIpsumParagraphCount } from "./LoremIpsumFunctions"

const startNumber = 500
const startText = getLoremIpsumTextOnWord(startNumber)
const defaultValue = {
  maxValue: (startNumber * 2) + 5,
  minValue: 11,
  sliderValue: startNumber,
  loremIpsumText: startText,
  wordCount: getLoremIpsumWordCount(startText),
  sentenceCount: getLoremIpsumSentenceCount(startText),
  paragraphCount: getLoremIpsumParagraphCount(startText),
}

const reducer = (state = defaultValue, action) => {
  switch (action.type) {
    case "SLIDER_CHANGE":
      const text = getLoremIpsumTextOnWord(action.newValue)
      return {
        ...state,
        sliderValue: action.newValue,
        loremIpsumText: getLoremIpsumTextOnWord(action.newValue),
        wordCount: getLoremIpsumWordCount(text),
        sentenceCount: getLoremIpsumSentenceCount(text),
        paragraphCount: getLoremIpsumParagraphCount(text)
      }
    case "SLIDER_COMPLETE":
      return {
        ...state,
        maxValue: action.maxValue
      }
    default:
      return state
  }
}
export default reducer
