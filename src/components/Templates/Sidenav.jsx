import React from 'react'
import { Link } from 'react-router-dom'

const Sidenav = () => {
  return (
	<div className='w-[20%] h-full border-r-2 border-zinc-200 p-10'>
		<h1 className='text-2xl text-white font-bold '>
			<i class="text-[#6556CD] ri-tv-fill  mr-2"></i>
		<span className='' >SCSDB</span>
		</h1>
		<nav className='flex flex-col text-zinc-400 text-xl gap-3'>
			<h1 className='text-white font-semibold text-xl mt-10 mb-5'>New Feed</h1>
			<Link className='hover:bg-[#6556CD] hover:text-white duration-300 p-5 rounded-lg'><i class="ri-fire-fill"></i>Trending</Link>
			<Link className='hover:bg-[#6556CD] hover:text-white duration-300 p-5 rounded-lg'>Popular</Link>
			<Link className='hover:bg-[#6556CD] hover:text-white duration-300 p-5 rounded-lg'>Movies</Link>
			<Link className='hover:bg-[#6556CD] hover:text-white duration-300 p-5 rounded-lg'>TV Shows</Link>
			<Link className='hover:bg-[#6556CD] hover:text-white duration-300 p-5 rounded-lg'>People</Link>
		</nav>
	</div>
  )
}

export default Sidenav