import { getLoremIpsumTextChar, getLoremIpsumWordCount } from "./LoremIpsumFunctions"

const defaultValue = {
  maxValue: 500,
  minValue: 11,
  sliderValue: 500,
  loremIpsum: getLoremIpsumTextChar(500),
  wordCount: getLoremIpsumWordCount(500)
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
