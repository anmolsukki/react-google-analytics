import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ReactGA from "react-ga";
import routes from '../Config/routes';

class Main extends React.Component {

    loading = () => <div>Loading...</div>;

    initizeAnalytics = () => {
        ReactGA.initialize("UA-159663056-1")
        ReactGA.pageview(this.props.location.pathname + this.props.location.search);
    }

  render() {
    this.initizeAnalytics()
    return (
        <main>
            <Suspense fallback={this.loading()}>
                <Switch>
                {routes.map((route, idx) => {
                    return route.component ? (
                    <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={(props) => <route.component {...props} />}
                    />
                    ) : null;
                })}
                <Redirect from="/" to="/home" />
                </Switch>
            </Suspense>
        </main>
    );
  }
}

export default Main;
