import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Home from '../containers/Home'
import IconLayer from '../containers/icon-layer'
import LineLayer from '../containers/line-layer'
import PathLayer from '../containers/path-layer'
import MapStyle from '../containers/map-style'

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/icon-layer" component={IconLayer} />
          <Route path="/line-layer" component={LineLayer} />
          <Route path="/path-layer" component={PathLayer} />
          <Route path="/map-style" component={MapStyle} />
        </Switch>
      </Router>
    )
  }
}
