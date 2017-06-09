import React, {Component} from 'React'

const URL = "http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC"

class GifListContainer extends Component {
  constructor(){
    super()

    this.state = {
      gifs: []
    }
  }
  componentWillMount(){
    fetch(URL)
      .then(x => x.json())
      .then(x => this.setState({ gifs: x.data }))
      .then(console.log(x))
  }

  render(){
    return(
      <div className='latest-gifs'>
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}


export default GifListContainer
