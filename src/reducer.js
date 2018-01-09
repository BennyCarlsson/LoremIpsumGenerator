import { getLoremIpsumText, getLoremIpsumWordCount } from "./LoremIpsum"

const defaultValue = {
  maxValue: 1000,
  minValue: 11,
  sliderValue: 500,
  loremIpsum: getLoremIpsumText(500),
  wordCount: getLoremIpsumWordCount(500)
}

const reducer = (state = defaultValue, action) => {
  switch (action.type) {
    case "SLIDER_CHANGE":
      return {
        ...state,
        sliderValue: action.newValue,
        loremIpsum: getLoremIpsumText(action.newValue),
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
