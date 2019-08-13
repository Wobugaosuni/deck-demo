/**
 * https://uber.github.io/react-map-gl/#/Examples/heatmap
 * https://docs.mapbox.com/help/tutorials/make-a-heatmap-with-mapbox-gl-js/
 */

import React from 'react'
import ReactMapGL from 'react-map-gl'
import {json as requestJson} from 'd3-request'

import './index.styl'

// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiYW5uaHVhbmciLCJhIjoiY2p4bXZqbTc2MDgyaDNobzZ6cWR0NWtpdCJ9.Kbvafyb464cRf5FKZRlLeg'
const HEATMAP_SOURCE_ID = 'earthquakes-source'

class App extends React.Component {
  state = {
    viewport: {
      longitude: 114.06667, // 经度
      latitude: 22.61667, // 纬度
      zoom: 3, // 地图缩放系数，数值越大，缩放越大
      pitch: 0,
      bearing: 0
    }
  }
  _mapRef = React.createRef()

  _mkHeatmapLayer = (id, source) => {
    const MAX_ZOOM_LEVEL = 9
    return {
      id,
      source,
      maxzoom: MAX_ZOOM_LEVEL,
      type: 'heatmap',
      layout: {
        "visibility": "visible" // 是否显示图层, "visible", "none". Defaults to "visible"
      },
      paint: {
        // Increase the heatmap weight based on frequency and property magnitude
        'heatmap-weight': ['interpolate', ['linear'], ['get', 'mag'], 0, 0, 6, 1],
        // Increase the heatmap color weight weight by zoom level
        // heatmap-intensity is a multiplier on top of heatmap-weight
        'heatmap-intensity': ['interpolate', ['linear'], ['zoom'], 0, 1, MAX_ZOOM_LEVEL, 3],
        // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
        // Begin color ramp at 0-stop with a 0-transparancy color
        // to create a blur-like effect.
        'heatmap-color': [
          'interpolate',
          ['linear'],
          ['heatmap-density'],
          0,
          'rgba(33,102,172,0)',
          0.2,
          'rgb(103,169,207)',
          0.4,
          'rgb(209,229,240)',
          0.6,
          'rgb(253,219,199)',
          0.8,
          'rgb(239,138,98)',
          0.9,
          'rgb(255,201,101)'
        ],
        // Adjust the heatmap radius by zoom level
        'heatmap-radius': ['interpolate', ['linear'], ['zoom'], 0, 2, MAX_ZOOM_LEVEL, 20],
        // Transition from heatmap to circle layer by zoom level
        'heatmap-opacity': ['interpolate', ['linear'], ['zoom'], 7, 1, 9, 0]
      },
    }
  }

  _getMap = () => {
    // console.log('this._mapRef:', this._mapRef.current.getMap())
    return this._mapRef.current ? this._mapRef.current.getMap() : null
  }

  _handleMapLoaded = event => {
    const map = this._getMap()

    requestJson(
      'https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson',
      (error, response) => {
        if (!error) {
          console.log('request success:', response)
          // Note: In a real application you would do a validation of JSON data before doing anything with it,
          // but for demonstration purposes we ingore this part here and just trying to select needed data...
          // const features = response.features
          // const endTime = features[0].properties.time
          // const startTime = features[features.length - 1].properties.time

          // this.setState({
          //   earthquakes: response
            // endTime,
            // startTime,
            // selectedTime: endTime
          // })
          map.addSource(HEATMAP_SOURCE_ID, {type: 'geojson', data: response})
          map.addLayer(this._mkHeatmapLayer('heatmap-layer', HEATMAP_SOURCE_ID))
        }
      }
    )
  }

  render() {
    return (
      <ReactMapGL
        mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
        width={1400} // 图的宽度
        height={900}
        {...this.state.viewport}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={(viewport) => {
          // console.log('viewport:', viewport)
          this.setState({viewport})
        }}
        ref={this._mapRef}
        onLoad={e => this._handleMapLoaded(e)}
      />
    )
  }
}

export default App
