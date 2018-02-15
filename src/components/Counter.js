import React from "react"
import { StyleSheet, Text, View, ScrollView, Slider, TouchableOpacity } from "react-native"
import { changeCountOn } from "../actions"
import { connect } from "react-redux"

export const countOnValues = {
  CHARACTER: 0,
  WORD: 1,
  SENTENCE: 2,
  PARAGRAPH: 3
}

class Counter extends React.Component {
  onSelect(index, value) {
    this.setState({
      text: `Selected index: ${index} , value: ${value}`
    })
  }
  render() {
    const countOn = this.props.countOn;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.changeCountOn(countOnValues.CHARACTER)}>
          <Text style={[styles.numberText, countOn === countOnValues.CHARACTER && styles.active]}>
            Char: {this.props.sliderValue}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.changeCountOn(countOnValues.WORD)}>
          <Text style={[styles.numberText, countOn === countOnValues.WORD && styles.active]}>
            Words: {this.props.wordCount}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.changeCountOn(countOnValues.SENTENCE)}>
          <Text style={[styles.numberText, countOn === countOnValues.SENTENCE && styles.active]}>
            Sentence: {this.props.sentenceCount}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.changeCountOn(countOnValues.PARAGRAPH)}>
          <Text style={[styles.numberText, countOn === countOnValues.PARAGRAPH && styles.active]}>
            Paragraphs: {this.props.paragraphCount}
          </Text>
        </TouchableOpacity>
      </View >
    )
  }
}

const mapStateToProps = state => {
  return {
    sliderValue: state.sliderValue,
    wordCount: state.wordCount,
    sentenceCount: state.sentenceCount,
    paragraphCount: state.paragraphCount,
    countOn: state.countOn
  }
}
const mapDispatchToProps = dispatch => {
  return {
    changeCountOn: value => {
      dispatch(changeCountOn(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    width: "100%",
  },
  active: {
    borderBottomWidth: 2,
    borderColor: "#03a4b3",
    fontSize: 16
  },
  numberText: {
    fontSize: 15,
    margin: 0,
    padding: 0,
    marginBottom: 2
  }
})
