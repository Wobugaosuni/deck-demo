/// app.js
import React from 'react'
import ReactMapGL from 'react-map-gl'

import './index.styl'

// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiYW5uaHVhbmciLCJhIjoiY2p4bXZqbTc2MDgyaDNobzZ6cWR0NWtpdCJ9.Kbvafyb464cRf5FKZRlLeg'

// Initial viewport settings
const initialViewState = {
  width: 1400, // 图的宽度
  height: 900,
  longitude: 114.06667, // 经度
  latitude: 22.61667, // 纬度
  zoom: 13, // 地图缩放系数，数值越大，缩放越大
  pitch: 0,
  bearing: 0
}

class App extends React.Component {
  render() {
    return (
      <ReactMapGL
        mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
        {...initialViewState}
        onViewportChange={(viewport) => this.setState({viewport})}
      />
    )
  }
}

export default App
