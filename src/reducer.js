import { getLoremIpsumText } from "./LoremIpsum"

const defaultValue = {
  maxValue: 1000,
  sliderValue: 500,
  loremIpsum: getLoremIpsumText(500)
}

const counterReducer = (state = defaultValue, action) => {
  switch (action.type) {
    case "SLIDER_CHANGE":
      return {
        ...state,
        sliderValue: action.newValue,
        loremIpsum: getLoremIpsumText(action.newValue)
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
export default counterReducer
