import React, {Component} from 'react'
import Modal from './Components/Modal/Modal'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isShown: false
    }
  }

  // eslint-disable-next-line
  showModalHandler = () => {
    document.body.classList.add('ov-h')
    this.setState({
      isShown: true
    })
  }

  hideModalHandler = () => {
    this.setState({
      isShown: false
    })
    document.body.classList.remove('ov-h')
  }

  toggleModalHandler = () => {
    this.state.isShown ? document.body.classList.remove('ov-h') : document.body.classList.add('ov-h')

    this.setState(prevState => ({
      isShown: !prevState.isShown
    }))
  }


  render() {
    return (
      <div className="App">

        {/* Demo content */}
        <div className="body-wrapper">
          <h1>Long scrollable page</h1>
          <h4>shrink the viewport to scroll the modal</h4>

          <button className="btn btn-fixed" onClick={this.toggleModalHandler}>
            {!this.state.isShown ? 'Show modal' : 'Hide modal'}
          </button>
        </div>
        {/* Demo content */}


        {/* Modal component */}
          <Modal
            isOpen={this.state.isShown}
            hideHandler={this.hideModalHandler}
            title='Scrollable modal window'>
              {/* Child content */}
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, sit laudantium. Sed, dolorem atque veritatis
                blanditiis modi illo nobis cum labore nam impedit vel laudantium rem  ab!</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, sit laudantium. Sed, dolorem atque veritatis
                blanditiis modi illo nobis cum labore nam impedit vel laudantium rem  ab!</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, sit laudantium. Sed, dolorem atque veritatis
                blanditiis modi illo nobis cum labore nam impedit vel laudantium rem  ab!</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, sit laudantium. Sed, dolorem atque veritatis
                  blanditiis modi illo nobis cum labore nam impedit vel laudantium rem  ab!</p>
              {/* Child content */}
          </Modal>
        {/* Modal component */}

      </div>
    )
  }
}