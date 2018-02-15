import { getLoremIpsumText, getLoremIpsumWordCount, getLoremIpsumSentenceCount, getLoremIpsumParagraphCount } from "./LoremIpsumFunctions"
import { countOnValues } from "./components/Counter"
import { createStore } from "redux"

const startNumber = 11
const startText = "Lorem Ipsum"
const defaultValue = {
  countOn: countOnValues.WORD,
  maxValue: (startNumber * 2) + 5,
  minValue: 11,
  sliderValue: startNumber,
  loremIpsumText: startText,
  wordCount: 2,
  sentenceCount: 1,
  paragraphCount: 1
}

const reducer = (state = defaultValue, action) => {
  switch (action.type) {
    case "SLIDER_CHANGE":
      return {
        ...state,
        sliderValue: action.newValue,
        loremIpsumText: action.loremIpsumText,
        wordCount: action.wordCount,
        sentenceCount: action.sentenceCount,
        paragraphCount: action.paragraphCount
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

export const store = createStore(reducer)
