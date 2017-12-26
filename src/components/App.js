import React from "react"
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Slider,
  WebView
} from "react-native"
import { connect } from "react-redux"
import { onSliderChangeValue, onSliderComplete } from "../actions"

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textView}>
          <WebView
            injectedJavaScript={
              "window.scrollTo(0,document.body.scrollHeight);"
            }
            source={{
              html:
                "<style>p{text-align: justify;}</style>" +
                "<p style='text-align: justify;'>" +
                this.props.loremIpsum +
                "</p>"
            }}
          />
        </View>
        <View style={styles.sliderView}>
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
          <Text style={styles.numberText}>
            Characters: {this.props.sliderValue} Words: {this.props.wordCount}
          </Text>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    sliderValue: state.sliderValue,
    minValue: state.minValue,
    loremIpsum: state.loremIpsum,
    maxValue: state.maxValue,
    wordCount: state.wordCount
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

export default connect(mapStateToProps, mapDispatchToProps)(App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  textView: {
    flex: 1,
    marginTop: 20
  },
  sliderView: {
    alignItems: "center",
    justifyContent: "center"
  },
  slider: {
    height: 45,
    width: "100%"
  },
  numberText: {
    margin: 0,
    padding: 0
  }
})
