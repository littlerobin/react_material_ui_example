import React from 'react'
import { StepOne } from './StepOne'
import { StepTwo } from './StepTwo'
import { StepThree } from './StepThree'
import { StepFour } from './StepFour'

const steps = 
    [
      {name: 'Job Info', component: <StepOne/>},
      {name: 'Sources & Rules', component: <StepTwo/>},
      {name: 'Job Output', component: <StepThree/>},
      {name: 'Summary', component: <StepFour/>}
    ]

export { steps }