"use client"

import {useState} from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from '@mui/material/Typography';

import CircleButton from "./components/circle_button"
import SubmitButton from "./components/submit_button"
import { poppins } from './style/fonts';
import {theme} from "./style/theme"


export default function App() {
  const [isSelected, setIsSelected] = useState(false);
  const [rating, setRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const buttonIsSelected = (value) => {
    return (rating === value);
  }

  const SelectRating = (ratingValue) => {
    if (ratingValue === rating) {
      setRating(0);
      setIsSelected(false);
    }
    else {
      setRating(ratingValue)
      setIsSelected(true);
    }
  }

  const SubmitRating = () => {
    if (isSelected) setIsSubmitted(true);
  }

  return (
    
    <main style={{backgroundColor: theme.very_dark_slate}} className="flex min-h-screen flex-col items-center justify-between sm:px-20 pt-24">
        <div className=" sm:max-w-5xl items-center justify-center flex">
          {(!isSubmitted) ?
          <Card style={{backgroundColor: theme.dark_slate, borderRadius: '3%'}} className="flex flex-col lg:w-2/5 md:w-3/6 w-5/6 items-center justify-center sm:px-5 px-3 pt-8">
            <CardMedia style={{width: "50%"}}
            component= "img"
            src="review.svg">
            </CardMedia>
            <CardContent>
              <div className="flex flex-col justify-between sm:px-0 px-10">
              <Typography align="left" gutterBottom="24" color={theme.light_grey} style={{fontFamily: poppins.style.fontFamily, fontWeight: 600, fontSize: '30px'}}>
                Rate Us!
              </Typography>
              <Typography paragraph="true" color={{color: theme.normal_grey}} style={{fontFamily: poppins.style.fontFamily, fontWeight: 400, fontSize: '14px', textAlign: 'left'}}>
                We highly value your feedback and would greatly appreciate it if 
                you could take a moment to rate our service. 
                Your opinion is essential to us.
              </Typography>
              </div>
              <div className="flex flex-row justify-between mb-5 sm:px-0 px-5">
                <CircleButton value="1" onClick={() => {SelectRating(1)}} selected={buttonIsSelected(1)}/>
                <CircleButton value="2" onClick={() => {SelectRating(2)}} selected={buttonIsSelected(2)}/>
                <CircleButton value="3" onClick={() => {SelectRating(3)}} selected={buttonIsSelected(3)}/>
                <CircleButton value="4" onClick={() => {SelectRating(4)}} selected={buttonIsSelected(4)}/>
                <CircleButton value="5" onClick={() => {SelectRating(5)}} selected={buttonIsSelected(5)}/>
              </div>
              <div className="sm:px-0 px-5">
              <SubmitButton onClick={SubmitRating}/>
              </div>
            </CardContent>
          </Card> 
          :
          <Card style={{backgroundColor: theme.dark_slate, borderRadius: '3%'}} className="flex flex-col lg:w-2/5 md:w-3/6 w-5/6 items-center justify-center sm:px-5 px-5 pt-8">
            <CardMedia style={{width: "50%", height: "40%"}}
            component= "img"
            src="thankyou.svg">
            </CardMedia>
            <CardContent className="flex flex-col items-center">
              <Typography align="center" color={theme.orange} backgroundColor={{backgroundColor: theme.dark_grey}} 
              style={{fontFamily: poppins.style.fontFamily, fontSize: '14px', paddingTop: '2px', paddingBottom: '2px', marginTop: '4x', fontWeight: 500, 
                      width: '75%', height: 'fit-content', borderRadius: '9999px'}}>
                You rate us {rating} out of 5
              </Typography>
              <Typography align="center" gutterBottom="24" color={theme.light_grey} style={{fontFamily: poppins.style.fontFamily, fontWeight: 600, fontSize: '30px', paddingTop: '10px'}}>
                Thank You!
              </Typography>
              <Typography align="center" paragraph="true" color={{color: theme.normal_grey}} style={{fontFamily: poppins.style.fontFamily, fontWeight: 400, fontSize: '14px', textAlign: 'center'}}>
                We value the time you've taken to rate our service.
                If you require any assistance, please don't hesitate to react out to us.
              </Typography>
            </CardContent>
          </Card>}

        </div>
    </main>
  )
}
