import React, { Component } from 'react'
import Beer from './Beer'
export default class Beers extends Component {
  constructor() {
    console.log("In Constructor")
    super()

    this.state = {
      isClicked: false,
      beers: [],
    }
  }

  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers")
    .then((res) => {
      return res.json()
    })
    .then((data) =>
    this.setState({
      beers: data.map((item) => ({
        ...item
      })),
    }))
  }

  render() {
    // console.log('in beers')
    return (
      <ul className="items">
        {
          this.state.beers.map((item) => {
            return <Beer id={item.id} name={item.name} image={item.image_url} brewers_tips={item.brewers_tips} tagline={item.tagline}/>
          })
        }
      </ul>
    )
  }
}
