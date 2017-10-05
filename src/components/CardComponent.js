import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CardStyles from '../styles/Card.css'
import Questions from '../questions'



class CardComponent extends Component {
  state = {
    data: Questions,
    index: 0,
    answers: [],
    name: '',
    nameEntered: false
  }

  componentDidMount() {
    console.log(this.props.name)
  }

  handleButtonPress = (i) => {
    console.log(i)
    this.handleCorrectAnswer(i)
    this.nextQuestion()
  }

  handleCorrectAnswer(i) {
    const { data, index, answers } = this.state

    if (i === parseInt(data[index].correct)){
      answers[index] = {correct: true, selected: i}
    } else {
      answers[index] = {correct: false, selected: i}
    }
  }

  countCorrect() {
    var numCorrect = this.state.answers.reduce((acc, answer) => {
      return  answer.correct === true ? acc + 1 : acc
    }, 0)
    this.props.onFinish(numCorrect)
  }

  nextQuestion() {
    var newIndex = this.state.index + 1
    // console.log(this.state.data.length)
    if (newIndex <= this.state.data.length - 1) {
      this.setState({ index: newIndex })
    } else {
      this.countCorrect()
    }

  }

  prevQuestion = () => {
    var newIndex = this.state.index - 1
    this.setState({
      index: newIndex
    })
  }

  renderChoices = () => {
    const { data, index, currentSlide, answers } = this.state

    return data[index].choices.map((choice, i) => {
        return (
          <RaisedButton
            className='buttonStyle'
            labelStyle={{ fontSize: 10 }}
            key={i} label={choice}
            onClick={() => this.handleButtonPress(i)}
          />
        )
    })
  }

  renderPrevArrow() {
    return this.state.index > 0
    ? <div className='prevArrow' onClick={this.prevQuestion}><img src='/prev.png'/></div>
    : null
  }

  renderStep() {
    return (
      <div className='step'>
        Step {this.state.index + 1} of {this.state.data.length}
      </div>
    )
  }

  handleNameText = (name) => {
    this.setState({ name })
    console.log(this.state.name)
  }

  handleNameSubmit = () => {
    this.setState({ nameEntered: true })
    console.log('handleNameSubmit')
  }

  handleNameInput = () => {

    if (this.state.nameEntered === false) {
      return (
          <div className='nameDiv'>
            <TextField
              floatingLabelText="Enter you name:"
              onChange={(e, name) => this.handleNameText(name)}
              value={this.state.name}
            />
              <RaisedButton
              className='beginButtonStyle'
              label="Enter"
              primary={true}
              onClick={() => this.handleNameSubmit()}
              />
          </div>
        )
    } else {
      return (
        <div className='nameDiv'>
          Welcome {this.state.name}
        </div>
      )
    }

  }



  render() {
    const { data, index, currentSlide } = this.state


    return (
    <div>
      {this.handleNameInput()}
      <Card className='mainCard'>
        <div >
          <div className='topCardStyle'>
            {this.renderPrevArrow()}
            {this.renderStep()}
          </div>
          <CardTitle
            className='cardTitleStyle'
            title={data[index].question}
            subtitle={data[index].subQuestion}
          />
          <CardActions className='cardActionsStyle'>
            {this.renderChoices()}
          </CardActions>
        </div>
      </Card>
    </div>

    )
  }
}


export default CardComponent;
