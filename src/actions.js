export const onSliderChangeValue = n => ({
  type: "SLIDER_CHANGE",
  newValue: Math.floor(n)
})
export const onSliderComplete = n => ({
  type: "SLIDER_COMPLETE",
  maxValue: n < 250 ? 500 : Math.floor(n * 2)
})
