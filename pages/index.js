import React from 'react'
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Head from 'next/head';

const Navbar = dynamic(() => import('./nav'))

export default function Home_movie(props) {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <div className='bg__dark'>
        <Navbar />
        <div className='mt-5'>
          <div className='d-flex justify-content-center'>
          <Image src="https://www.wallpaperup.com/uploads/wallpapers/2015/12/12/859126/5b431ce5733d1553d3b7bf0efc11412e-1000.jpg" width="700" height="500"/>
          </div>
        </div>
      </div>
    </div>
  )
}