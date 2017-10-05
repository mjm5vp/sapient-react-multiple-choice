import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import CardStyles from '../styles/Card.css'


class FinishedScreen extends Component {
  render(){
    return (
          <Card className='mainCard finishedCard'>
            <div>
              You got {this.props.totalCorrect} correct out of {this.props.totalQuestions}
            </div>
          </Card>
    )
  }
}

export default FinishedScreen;
