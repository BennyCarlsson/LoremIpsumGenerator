import React from "react"
import { StyleSheet, View } from "react-native"
import { connect } from "react-redux"
import { onSliderChangeValue, onSliderComplete } from "../actions"
import LoremIpsum from "./LoremIpsum"
import MySlider from "./MySlider"
import Counter from "./Counter"
import CopyButton from "./CopyButton"

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>
        <LoremIpsum />
        <View style={styles.sliderView}>
          <MySlider />
          <Counter />
          <CopyButton />
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
