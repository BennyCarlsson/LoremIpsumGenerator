import { getLoremIpsumTextChar, getLoremIpsumWordCount } from "./LoremIpsumFunctions"

const defaultValue = {
  maxValue: 1000,
  minValue: 11,
  sliderValue: 500,
  loremIpsum: getLoremIpsumTextChar(375),
  wordCount: getLoremIpsumWordCount(375)
}

const reducer = (state = defaultValue, action) => {
  switch (action.type) {
    case "SLIDER_CHANGE":
      return {
        ...state,
        sliderValue: action.newValue,
        loremIpsum: getLoremIpsumTextChar(action.newValue),
        wordCount: getLoremIpsumWordCount(action.newValue)
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
