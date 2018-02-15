import React from "react"
import App from "./components/App"
import { Provider } from "react-redux"
import { store } from "./reducer"

export default class Index extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
