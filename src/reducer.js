const defaultValue = {
  sliderValue: 50
};

const counterReducer = (state = defaultValue, action) => {
  switch (action.type) {
    case "SLIDER_CHANGE":
      return (state = {
        sliderValue: action.newValue
      });
    default:
      return state;
  }
};

export default counterReducer;
