import React from 'react'
import { useEffect, useState } from 'react'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
  const [workouts, setWorkouts]=useState(null)
  useEffect(()=>{
    const fetchWorkouts=async()=>{
      const response=await fetch('/api/workouts')
      const json=await response.json()
      if(response.ok){
        setWorkouts(json)
      }
    }
    fetchWorkouts()
  },[]) // second argument of useing react hook, run only one , passong an empty array
  return (
    <div className="home">
        <div className='workouts'>
          {workouts && workouts.map((workout)=>(
            <WorkoutDetails key={workout._id} workout={workout} />
          ))} 
          {/* // normal parenthes not curly braces because we are returning the template */}
        </div>
        <WorkoutForm/>
    </div>
  )
}

export default Home