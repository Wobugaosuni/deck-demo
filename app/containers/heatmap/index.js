/**
 * https://uber.github.io/react-map-gl/#/Examples/heatmap
 * https://docs.mapbox.com/help/tutorials/make-a-heatmap-with-mapbox-gl-js/
 * demo: https://docs.mapbox.com/help/demos/heatmap/index.html
 * Add a new layer below labels: https://docs.mapbox.com/mapbox-gl-js/example/geojson-layer-in-stack/
 */

import React from 'react'
import ReactMapGL from 'react-map-gl'
import { observable, toJS } from 'mobx'
import {observer} from 'mobx-react'

import getMapBoxStyle from './map-style'
import './index.styl'
import data from './sample'

// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiYW5uaHVhbmciLCJhIjoiY2p4bXZqbTc2MDgyaDNobzZ6cWR0NWtpdCJ9.Kbvafyb464cRf5FKZRlLeg'

@observer
class App extends React.Component {
  _mapRef = React.createRef()

  state = {
    viewport: {
      longitude: -79.999732, // 经度
      latitude: 40.4374, // 纬度
      zoom: 18, // 地图缩放系数，数值越大，缩放越大
      pitch: 0,
      bearing: 0
    }
  }

  @observable sources = {
    'trees': {
      type: 'geojson',
      data,
    }
  }

  @observable layers = [{
    id: 'trees-heat',
    type: 'heatmap',
    source: 'trees',
    maxzoom: 15,
    paint: {
      // increase weight as diameter breast height increases
      'heatmap-weight': {
        property: 'dbh',
        type: 'exponential',
        stops: [
          [1, 0],
          [62, 1]
        ]
      },
      // increase intensity as zoom level increases
      'heatmap-intensity': {
        stops: [
          [11, 1],
          [15, 3]
        ]
      },
      // assign color values be applied to points depending on their density
      'heatmap-color': [
        'interpolate',
        ['linear'],
        ['heatmap-density'],
        0, 'rgba(236,222,239,0)',
        0.2, 'rgb(208,209,230)',
        0.4, 'rgb(166,189,219)',
        0.6, 'rgb(103,169,207)',
        0.8, 'rgb(28,144,153)'
      ],
      // increase radius as zoom increases
      'heatmap-radius': {
        stops: [
          [11, 15],
          [15, 20]
        ]
      },
      // decrease opacity to transition into the circle layer
      'heatmap-opacity': {
        default: 1,
        stops: [
          [14, 1],
          [15, 0]
        ]
      },
    }
  }, {
    id: 'trees-point',
    type: 'circle',
    source: 'trees',
    minzoom: 14,
    paint: {
      // increase the radius of the circle as the zoom level and dbh value increases
      'circle-radius': {
        property: 'dbh',
        type: 'exponential',
        stops: [
          [{ zoom: 15, value: 1 }, 5],
          [{ zoom: 15, value: 62 }, 10],
          [{ zoom: 22, value: 1 }, 20],
          [{ zoom: 22, value: 62 }, 50],
        ]
      },
      'circle-color': {
        property: 'dbh',
        type: 'exponential',
        stops: [
          [0, 'rgba(236,222,239,0)'],
          [10, 'rgb(236,222,239)'],
          [20, 'rgb(208,209,230)'],
          [30, 'rgb(166,189,219)'],
          [40, 'rgb(103,169,207)'],
          [50, 'rgb(28,144,153)'],
          [60, 'rgb(1,108,89)']
        ]
      },
      'circle-stroke-color': 'white',
      'circle-stroke-width': 1,
      'circle-opacity': {
        stops: [
          [14, 0],
          [15, 1]
        ]
      }
    }
  }]

  _getMap = () => {
    // console.log('this._mapRef:', this._mapRef.current.getMap())
    return this._mapRef.current ? this._mapRef.current.getMap() : null
  }

  _handleMapLoaded(e) {
    const map = this._getMap()

    map.addSource('trees', {
      type: 'geojson',
      data: data
    })

    map.addLayer(this.layers[0], 'waterway-label')  // 第二个参数是放到某一个图层的下面
    map.addLayer(this.layers[1], 'waterway-label')

    // not work????
    // map.on('click', 'trees-point', function(e) {
    //   console.log('click click click')
    //   debugger
    // })
  }

  render() {
    return (
      <ReactMapGL
        mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
        width={1400} // 图的宽度
        height={900}
        {...this.state.viewport}
        // mapStyle={getMapBoxStyle(toJS(this.sources), toJS(this.layers))}
        onViewportChange={(viewport) => {
          // console.log('viewport:', viewport)
          this.setState({viewport})
        }}
        ref={this._mapRef}
        onLoad={e => this._handleMapLoaded(e)}
        onClick={e => {
          if (!e.features) return
          console.log('圈圈被点击了：', '<b>DBH:</b> ' + e.features[0].properties.dbh)
        }} // 地图被点击
      />
    )
  }
}

export default App
