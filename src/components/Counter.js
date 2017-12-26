import React from "react"
import { StyleSheet, Text, View, ScrollView, Slider } from "react-native"
import { connect } from "react-redux"

class Counter extends React.Component {
  render() {
    return (
      <Text style={styles.numberText}>
        Characters: {this.props.sliderValue} Words: {this.props.wordCount}
      </Text>
    )
  }
}

const mapStateToProps = state => {
  return {
    sliderValue: state.sliderValue,
    wordCount: state.wordCount
  }
}

export default connect(mapStateToProps)(Counter)

const styles = StyleSheet.create({
  numberText: {
    margin: 0,
    padding: 0
  }
})
