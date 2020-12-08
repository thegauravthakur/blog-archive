import Nav from '../components/nav'
import React, { Fragment } from 'react';
import Canvas from '../components/Canvas';

export default function IndexPage() {
  return (
    <Fragment>
      <Nav/>
      <div className='lg:grid lg:grid-cols-4 px-5 md:px-10 lg:px-20 gap-10'>
        <Canvas />
        <div className='my-14 px-10 py-10 bg-white'>
          <h1>Sidebar</h1>
        </div>
      </div>
    </Fragment>
  )
}
