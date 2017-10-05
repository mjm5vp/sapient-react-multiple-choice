import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import CardStyles from './Card.css'
import Questions from './questions'



class CardComponent extends Component {
  state = {
    data: Questions,
    currentSlide: {},
    index: 0,
    correctAnswer: 0
  }

  handleButtonPress = (i) => {
    console.log(i)
    this.nextQuestion()
  }

  nextQuestion() {
    var newIndex = this.state.index + 1
    console.log(this.state.data.length)
    if (newIndex <= this.state.data.length - 1) {
      this.setState({
        index: newIndex
      })
    } else {
      console.log('finished')
    }

  }

  prevQuestion = () => {
    var newIndex = this.state.index - 1
    this.setState({
      index: newIndex
    })
  }

  renderChoices = () => {
    const { data, index, currentSlide } = this.state

    return data[index].choices.map((choice, i) => {
      return (
        <RaisedButton className='buttonStyle' key={i} label={choice} onClick={() => this.handleButtonPress(i)}/>
      )
    })
  }

  renderPrevArrow() {
    var arrow = this.state.index > 0 ? <div className='prevArrow' onClick={this.prevQuestion}><img src='/prev.png'/></div> : null
    return arrow
  }

  renderStep() {
    return (
      <div className='step'>
        Step {this.state.index + 1} of {this.state.data.length}
      </div>
    )
  }



  render() {
    const { data, index, currentSlide } = this.state




    return (
      <Card className='mainCard'>
        <div >
          <div className='topCardStyle'>
            {this.renderPrevArrow()}
            {this.renderStep()}
          </div>
          <CardTitle className='cardTitleStyle' title={data[index].question} subtitle={data[index].subQuestion} />
          <CardActions className='cardActionsStyle'>
            {this.renderChoices()}
          </CardActions>
        </div>
      </Card>
    )
  }
}

const styles = {

}

export default CardComponent;
