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
        <View style={{ flex: 1 }}>
          <WebView
            source={{
              html:
                "<p style='text-align: justify;'>" +
                this.props.loremIpsum +
                "</p>"
            }}
          />
        </View>
        <View style={styles.sliderView}>
          <Slider
            maximumValue={this.props.maxValue}
            minimumValue={11}
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
          <Text style={styles.numberText}>{this.props.sliderValue}</Text>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    sliderValue: state.sliderValue,
    loremIpsum: state.loremIpsum,
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

export default connect(mapStateToProps, mapDispatchToProps)(App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  scrollView: {
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
