import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import loadable from 'loadable-components';
import './App.css';

const Loading = () => <div>Loading...</div>;

const DefaultLayout = loadable(() => import('./Container'), {
  LoadingComponent: Loading
});

class App extends Component {
  render() {
    return (
      <main className="App" style={{ marginTop: '56px' }}>
        <HashRouter>
          <Switch>
            <Route path="/" component={DefaultLayout} />
          </Switch>
        </HashRouter>
      </main>
    );
  }
}

export default App;
