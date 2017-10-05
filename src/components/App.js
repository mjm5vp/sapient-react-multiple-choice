import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CardComponent from './CardComponent';
import Finished from './Finished'
import Questions from '../questions'

class App extends Component {
  state = {
    finished: false,
    totalCorrect: 0,
    totalQuestions: Questions.length
   }

  onFinish = (totalCorrect) => {
    this.setState({
      finished: true,
      totalCorrect
     })
  }

  renderComponent() {
    return ( this.state.finished
    ? <Finished totalCorrect={this.state.totalCorrect} totalQuestions={this.state.totalQuestions} />
    : <CardComponent onFinish={this.onFinish}/>
    )
  }

  render(){
    return (
      <MuiThemeProvider>
        {this.renderComponent()}
      </MuiThemeProvider>
    )
  }

}

export default App;
