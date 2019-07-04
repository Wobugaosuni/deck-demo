/**
 * mapStyle: https://uber.github.io/react-map-gl/#/Documentation/getting-started/adding-custom-data
 * https://uber.github.io/react-map-gl/#/Examples/dynamic-styling
 */

import React from 'react'
import ReactMapGL from 'react-map-gl'

import mapStyle from './map-style'
import './index.styl'

// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiYW5uaHVhbmciLCJhIjoiY2p4bXZqbTc2MDgyaDNobzZ6cWR0NWtpdCJ9.Kbvafyb464cRf5FKZRlLeg'

class App extends React.Component {
  state = {
    viewport: {
      longitude: 114.06667, // 经度
      latitude: 22.61667, // 纬度
      zoom: 9, // 地图缩放系数，数值越大，缩放越大
      pitch: 0,
      bearing: 0
    }
  }

  render() {
    return (
      <ReactMapGL
        mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
        width={1400} // 图的宽度
        height={900}
        {...this.state.viewport}
        onViewportChange={(viewport) => {
          // console.log('viewport:', viewport)
          this.setState({viewport})
        }}
        mapStyle={mapStyle}
      />
    )
  }
}

export default App
