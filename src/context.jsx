import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

export const myContext = () => {
  const [BututtonToMainVisible, setBututtonToMainVisible] = useState(false);

  return (
    <Provider
      value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}
    >
      {this.props.children}
    </Provider>
  )
  
}
