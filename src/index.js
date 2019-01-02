import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import Router from './components/Router'
import './css/style.css'

render( <Router />, document.querySelector('#main'))


// Idea for Reskin
// Create a Readme file for this
// Create an Add Inventory button that changes Order component into Inventory component
// Boardgame ordering interface? 
// Create a new set of dummy data
//      Name, Price (from Amazon?), Desc from BGG?, Image from BGG?, Rating from BGG?
// Use React Hooks and modern React to do everything