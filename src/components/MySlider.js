import React from "react"
import { StyleSheet, Slider } from "react-native"
import { connect } from "react-redux"
import { onSliderChangeValue, onSliderComplete } from "../actions"

class MySlider extends React.Component {
  render() {
    return (
      <Slider
        maximumValue={this.props.maxValue}
        minimumValue={this.props.minValue}
        minimumTrackTintColor={"#fff0"}
        style={styles.slider}
        value={this.props.sliderValue}
        onValueChange={n => {
          this.props.onSliderChange(n)
        }}
        onSlidingComplete={n => {
          this.props.onSliderComplete(n)
        }}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    sliderValue: state.sliderValue,
    minValue: state.minValue,
    maxValue: state.maxValue
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onSliderChange: n => {
      dispatch(onSliderChangeValue(n))
    },
    onSliderComplete: n => {
      dispatch(onSliderComplete(n))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MySlider)

const styles = StyleSheet.create({
  slider: {
    height: 45,
    width: "100%"
  }
})
