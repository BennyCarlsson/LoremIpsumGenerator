import React from "react"
import { StyleSheet, Text, View, Slider } from "react-native"

export default class Index extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Lorem Ipsum</Text>
        <Slider
          maximumValue={250}
          minimumValue={2}
          minimumTrackTintColor={"#fff0"}
          style={{ width: 200 }}
          value={50}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})
