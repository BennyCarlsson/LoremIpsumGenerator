import React from "react"
import { StyleSheet, Slider, View, Text, TouchableOpacity } from "react-native"
import { connect } from "react-redux"
import { onSliderChangeValue, onSliderComplete } from "../actions"

class MySlider extends React.Component {
  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => this.props.onSliderChange(this.props.sliderValue - 1)}><Text>-</Text></TouchableOpacity>
        <Slider
          maximumValue={this.props.maxValue}
          minimumValue={this.props.minValue}
          minimumTrackTintColor={"#fff0"}
          thumbTintColor={"#03a4b3"}
          style={styles.slider}
          value={this.props.sliderValue}
          onValueChange={n => {
            this.props.onSliderChange(n)
          }}
          onSlidingComplete={n => {
            this.props.onSliderComplete(n)
          }}
        />
        <TouchableOpacity onPress={() => this.props.onSliderChange(this.props.sliderValue + 1)}><Text>+</Text></TouchableOpacity>
      </View>
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
    width: "90%"
  }
})
