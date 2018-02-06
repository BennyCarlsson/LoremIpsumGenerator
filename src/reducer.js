import { getLoremIpsumTextOnWord, getLoremIpsumWordCount, getLoremIpsumSentenceCount, getLoremIpsumParagraphCount, getLoremIpsumTextOnParagraph, getLoremIpsumTextOnSentence, getLoremIpsumTextOnChar } from "./LoremIpsumFunctions"
import { countOnValues } from "./components/Counter"
const startNumber = 500
const startText = getLoremIpsumTextOnChar(startNumber)
const defaultValue = {
  countOn: countOnValues.WORD,
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
        loremIpsumText: getLoremIpsumTextOnChar(action.newValue),
        wordCount: getLoremIpsumWordCount(text),
        sentenceCount: getLoremIpsumSentenceCount(text),
        paragraphCount: getLoremIpsumParagraphCount(text)
      }
    case "SLIDER_COMPLETE":
      return {
        ...state,
        maxValue: action.maxValue
      }
    case "CHANGE_COUNT_ON":
      return {
        ...state,
        countOn: action.value
      }
    default:
      return state
  }
}
export default reducer
