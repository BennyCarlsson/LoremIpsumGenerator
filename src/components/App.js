import React from "react"
import { StyleSheet, Text, View, ScrollView, Slider } from "react-native"
import { connect } from "react-redux"
import { onSliderChangeValue, onSliderComplete } from "../actions"
import LoremIpsumText from "./LoremIpsumText"
import MySlider from "./MySlider"
import Counter from "./Counter"

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>
        <LoremIpsumText />
        <View style={styles.sliderView}>
          <MySlider />
          <Counter />
        </View>
      </View>
    )
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  sliderView: {
    alignItems: "center",
    justifyContent: "center"
  }
})
