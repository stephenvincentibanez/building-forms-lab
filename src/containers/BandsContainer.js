import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import {connect} from 'react-redux'

class BandsContainer extends Component {

  renderBands = () => {
    if(this.props.bands.length > 0){
      return this.props.bands.map(band => (<li>{band.name}</li>))
      }
    }

  render() {
    console.log(this.props.bands)
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        {this.renderBands()}
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}


const mapDispatchToProps = dispatch => {
  return {
    addBand: (band) => {
      dispatch({type: 'ADD_BAND', band})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
