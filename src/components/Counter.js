import React from "react"
import { StyleSheet, Text, View, ScrollView, Slider } from "react-native"
import { connect } from "react-redux"

class Counter extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.numberText}>
          Characters: {this.props.sliderValue}
        </Text>
        <Text style={styles.numberText}>
          Words: {this.props.wordCount}
        </Text>
        <Text style={styles.numberText}>
          Sentence: {this.props.sentenceCount}
        </Text>
        <Text style={styles.numberText}>
          Paragraphs: {this.props.paragraphCount}
        </Text>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    sliderValue: state.sliderValue,
    wordCount: state.wordCount,
    sentenceCount: state.sentenceCount,
    paragraphCount: state.paragraphCount
  }
}

export default connect(mapStateToProps)(Counter)

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "95%"
  },
  numberText: {
    margin: 0,
    padding: 0
  }
})
