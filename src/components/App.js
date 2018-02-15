import React from "react"
import { StyleSheet, View } from "react-native"
import LoremIpsum from "./LoremIpsum"
import MySlider from "./MySlider"
import Counter from "./Counter"
import CopyButton from "./CopyButton"

export default class App extends React.Component {
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
