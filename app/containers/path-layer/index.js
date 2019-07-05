/**
 * PathLayer: https://deck.gl/#/documentation/deckgl-api-reference/layers/line-layer，一个对象一条线
 * tooltip: http://deck.gl/#/documentation/developer-guide/adding-interactivity?section=example-display-a-tooltip-for-hovered-object
 * view state transition: https://deck.gl/#/documentation/deckgl-api-reference/views/view-state-transitions
 */

import React from 'react'
import {PathLayer} from '@deck.gl/layers'
import {StaticMap} from 'react-map-gl'

import {colorToRGBArray} from '../../common/js/util'
import data from './sample'

import DeckGL, {
  MapView,
} from 'deck.gl'

import './index.styl'

// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiYW5uaHVhbmciLCJhIjoiY2p4bXZqbTc2MDgyaDNobzZ6cWR0NWtpdCJ9.Kbvafyb464cRf5FKZRlLeg'

class App extends React.Component {
  state = {
    viewState: {
      longitude: -122.41669, // 经度
      latitude: 37.7853, // 纬度
      zoom: 10, // 地图缩放系数，数值越大，缩放越大
      pitch: 0,
      bearing: 0
    }
  }

  render() {
    const {viewState} = this.state

    const layers = [
      new PathLayer({
        id: 'path-layer',
        data,
        pickable: true,
        widthScale: 20,
        widthMinPixels: 2,
        getPath: d => d.path,
        getColor: d => colorToRGBArray(d.color),
        getWidth: d => 5,
      })
    ]

    return (
      <React.Fragment>
        <DeckGL
          viewState={viewState}
          controller={true}
          layers={layers}
          onViewStateChange={({viewState}) => {
            this.setState({
              viewState: {
                ...viewState,
              }
            })
          }}
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
