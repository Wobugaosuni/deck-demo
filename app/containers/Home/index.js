/**
 * LineLayer: https://deck.gl/#/documentation/deckgl-api-reference/layers/line-layer
 * tooltip: http://deck.gl/#/documentation/developer-guide/adding-interactivity?section=example-display-a-tooltip-for-hovered-object
 */

import React from 'react'
import {LineLayer} from '@deck.gl/layers'
import {StaticMap} from 'react-map-gl'
import data from './sample'

import DeckGL, {
  COORDINATE_SYSTEM,
  PolygonLayer,
  PointCloudLayer,
  MapView,
  FirstPersonView,
  // ThirdPersonView,
  TripsLayer
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

const initialViewState = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 9,
  pitch: 0,
  bearing: 0
}

class App extends React.Component {
  _renderTooltip() {
    const {hoveredObject, pointerX, pointerY} = this.state || {}
    return hoveredObject && (
      <div style={{position: 'absolute', zIndex: 1, pointerEvents: 'none', left: pointerX, top: pointerY, backgroundColor: 'rgba(0,0,255,.1)'}}>
        { 
          hoveredObject.message
        }
      </div>
    )
  }

  render() {
    const layers = [
      new LineLayer({
        id: 'line-layer', 
        data, // 一个对象一条线，Data to be used by the LineLayer
        pickable: true, // 是否响应鼠标事件，Whether the layer responds to mouse pointer picking events
        getWidth: 10, // The line width of each object
        getSourcePosition: d => d.from.coordinates,
        getTargetPosition: d => d.to.coordinates,
        getColor: d => [Math.sqrt(d.inbound + d.outbound), 140, 0, 170], // The rgba color of each object, in r, g, b, [a]. Each component is in the 0-255 range.
        onHover: ({object, x, y}) => {
          const tooltip = object ? `${object.from.name} to ${object.to.name}` : ''

          this.setState({
            hoveredObject: {
              message: tooltip,
            },
            pointerX: x,
            pointerY: y
          })
        }
      })
    ]

    return (
      <React.Fragment>
        <DeckGL
          initialViewState={initialViewState}
          controller={true}
          layers={layers} // 图层，一条竖线
        >
          <MapView id="map" width="1200px" height="800px" controller={true}>
            <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
          </MapView>
        </DeckGL>
        {
          this._renderTooltip()
        }
      </React.Fragment>
    )
  }
}

export default App
