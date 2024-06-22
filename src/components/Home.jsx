import React from 'react'
import Sidenav from './Templates/Sidenav'

const Home = () => {
	document.title = "MovieApp|| HOmepage"
  return (
	<>
	<Sidenav/>
	<div className='w-[20%] h-full '></div>
	<div className='w-[80%] h-full '></div>
	</>
  )
}

export default Home