import React, { Component, useContext } from "react";
import { createBrowserHistory } from "history";

const RouterContext = React.createContext();

export class BrowserRouter extends Component {
  constructor(props) {
    super(props);
    this.history = createBrowserHistory();
    this.state = {
      location: this.history.location,
    };
    this.unlisten = this.history.listen(location => {
      this.setState({ location });
    });
    console.log("this", this.history);
  }
  componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten();
    }
  }
  render() {
    const { children } = this.props;
    return (
      <RouterContext.Provider
        value={{
          history: this.history,
          location: this.state.location,
        }}
      >
        {children}
      </RouterContext.Provider>
    );
  }
}

export function Route(props) {
  const { path, component: Cmp } = props;
  const ctx = useContext(RouterContext);
  const { location } = ctx;
  const match = path === location.pathname;
  return match && <Cmp />;
}

export class Link extends Component {
  handleClick = (event, history) => {
    const { to } = this.props;
    event.preventDefault();
    history.push(to);
  };
  render() {
    const { children, to } = this.props;
    return (
      <RouterContext.Consumer>
        {ctx => {
          return (
            <a
              href={to}
              onClick={event => this.handleClick(event, ctx.history)}
            >
              {children}
            </a>
          );
        }}
      </RouterContext.Consumer>
    );
  }
}
