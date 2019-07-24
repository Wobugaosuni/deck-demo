import React from 'react'
import {Link} from 'react-router-dom'

import './index.styl'

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div role="containers:Home" style={{display: 'flex', flexDirection: 'column'}}>
        <Link to="/icon-layer">icon-layer</Link>
        <Link to="/line-layer">line-layer</Link>
        <Link to="/path-layer">path-layer</Link>
        <Link to="/map-style">map-style</Link>
        <Link to="/heatmap-earthquakes">heatmap-earthquakes</Link>
        <Link to="/heatmap">heatmap</Link>
      </div>
    )
  }

}

export default Home
