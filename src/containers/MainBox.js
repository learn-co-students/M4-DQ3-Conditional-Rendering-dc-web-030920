import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  constructor(){
    super()
    this.state = {
      page: 'profile'
    }
  }

  handlePageChange = (event) => {
    this.setState({
      page: event.target.id
    })
  }


  render() {
    let detailsToDisplay = ''
     if (this.state.page === 'profile'){
       detailsToDisplay = < Profile />
     }else if (this.state.page ==='photo'){
       detailsToDisplay = < Photos />
     }else if (this.state.page ==='cocktail'){
       detailsToDisplay = <Cocktails />
     }else if (this.state.page ==='pokemon'){
       detailsToDisplay = <Pokemon />
     }

    return (
      <div>
        <MenuBar handlePageChange={this.handlePageChange} />
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
