/**
 * LineLayer: https://deck.gl/#/documentation/deckgl-api-reference/layers/line-layer
 * IconLayer: https://deck.gl/#/documentation/deckgl-api-reference/layers/icon-layer
 * tooltip: http://deck.gl/#/documentation/developer-guide/adding-interactivity?section=example-display-a-tooltip-for-hovered-object
 */

import React from 'react'
import {IconLayer} from '@deck.gl/layers'
import {StaticMap} from 'react-map-gl'
import data2 from './sample-icon'

import DeckGL, {
  MapView,
} from 'deck.gl'

import './index.styl'

// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiYW5uaHVhbmciLCJhIjoiY2p4bXZqbTc2MDgyaDNobzZ6cWR0NWtpdCJ9.Kbvafyb464cRf5FKZRlLeg'

// Initial viewport settings
// const initialViewState = {
//   longitude: 114.06667, // 经度
//   latitude: 22.61667, // 纬度
//   zoom: 13, // 地图缩放系数，数值越大，缩放越大
//   pitch: 0,
//   bearing: 0
// }

const ICON_MAPPING = {
  marker1: {
    x: 0, 
    y: 0, 
    width: 128, 
    height: 128, 
    mask: false // icon是否使用自定义的颜色(getColor)
  },
  marker2: {
    x: 128, 
    y: 128, 
    width: 128, 
    height: 128, 
    mask: false // icon是否使用自定义的颜色(getColor)
  },
}

const initialViewState = {
  // longitude: -122.41669,
  // latitude: 37.7853,
  longitude: 114.06667, // 经度
  latitude: 22.61667, // 纬度
  zoom: 10,
  pitch: 0,
  bearing: 0
}

class App extends React.Component {
  state = {
    viewState: {
      longitude: -122.41669,
      latitude: 37.7853,
      zoom: 10,
      pitch: 0,
      bearing: 0
    }
  }

  render() {
    const layers2 = [
      new IconLayer({
        id: 'icon-layer',
        data: data2,
        pickable: true,
        // iconAtlas and iconMapping are required
        // getIcon: return a string
        iconAtlas: 'data/location-icon-atlas.png',
        iconMapping: ICON_MAPPING, // 图标集的定义
        getIcon: d => { // 展示的图标
          if (d.entries > 10000) {
            return 'marker1'
          }
          return 'marker2'
        },
        sizeScale: 15, // Icon size multiplier
        getSize: d => 3, // The height of each object, in units specified by sizeUnits (default pixels).
        getPosition: d => d.coordinates,
        getColor: d => [Math.sqrt(d.exits), 140, 0],
        onClick: (info, event) => {
          console.log('onClick info:', info)
          console.log('onClick event:', event)
        },
      })
    ]

    return (
      <React.Fragment>
        <DeckGL
          initialViewState={initialViewState}
          controller={true}
          layers={layers2} // 图层，一条竖线
        >
          <MapView id="map" width="1200px" height="800px" controller={true}>
            <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
          </MapView>
        </DeckGL>
      </React.Fragment>
    )
  }
}

export default App
