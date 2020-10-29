import React from 'react'
import {Card,Button} from 'react-bootstrap'
import classes from './MovieCard.module.css'
import getformatDate from '../../lib/getFormatDate'
export const MovieCard = (props) => {
  return (
    <Card style={{ width: '40rem' }}>

      <Card.Body className={classes.MovieCardBody}>
        <div className={classes.voteContainer}>
          <span><i className="fa fa-arrow-up" style={{cursor:'pointer'}}/></span>
          <span>{props.voting}</span>
          <span><i className="fa fa-arrow-down" style={{cursor:'pointer'}}/></span>
        </div>
        <Card.Img variant="left" src={props.poster} className={classes.movieImg}/>    
        <div>
          <Card.Title>{props.title}</Card.Title>
          <p>
            <b>Genre : </b> {props.genre}
          </p>
          <p>
            <b>Directors : </b> {props.director.toString()}
          </p>
          <p>
            <b>Starring : </b> {props.stars}
          </p>
          <p>
            {props.runTime | 0} Min | {props.language} | {getformatDate(props.releasedDate)}
          </p>
          <p>
            {props.pageViews} | Voted by {props.totalVoted}
          </p>
        </div>
      </Card.Body>
      <Button variant="primary">Watch Trailer</Button>

    </Card>
  )
}
