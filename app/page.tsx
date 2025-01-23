import React from 'react';
import MainPageCategory from './components/mainPageCategory';
import ShowProject from './components/showProject';

export default function Home() {
  return (
    <>
      <div className='text-2xl'>포트폴리오</div>
      <MainPageCategory />
      <div className='mt-24'>
        <ShowProject />
      </div>
    </>
  );
}
