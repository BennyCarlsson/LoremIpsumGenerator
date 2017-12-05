import React from "react";
import { StyleSheet, Text, View, Slider } from "react-native";
import { connect } from "react-redux";
import { onSliderChangeValue } from "../actions";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("props", this.props);
    return (
      <View style={styles.container}>
        <Text>Lorem Ipsum</Text>
        <Text>{this.props.sliderValue}</Text>
        <Slider
          maximumValue={250}
          minimumValue={2}
          minimumTrackTintColor={"#fff0"}
          style={{ width: 200 }}
          value={this.props.sliderValue}
          onValueChange={n => {
            this.props.onSliderChange(n);
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { sliderValue: state.sliderValue };
};

const mapDispatchToProps = dispatch => {
  return {
    onSliderChange: n => {
      dispatch(onSliderChangeValue(n));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
