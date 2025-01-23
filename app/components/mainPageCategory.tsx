'use client';

import React from 'react';
import {useRouter} from 'next/navigation';

export default function () {
  const router = useRouter();
  const goToPage = (languageItem: string) => {
    router.push(`/language/${languageItem}`); // 동적 경로로 이동
  };

  return (
    <>
      <main className='grid grid-cols-3 justify-items-center mx-32'>
        <div
          onClick={() => goToPage('javascript')}
          className='border border-red-500 w-32 h-32 my-5'
        >
          JavaScript
        </div>
        <div
          onClick={() => goToPage('react')}
          className='border border-red-500 w-32 h-32 my-5'
        >
          React
        </div>
        <div
          onClick={() => goToPage('nextjs')}
          className='border border-red-500 w-32 h-32 my-5'
        >
          Next.js
        </div>
      </main>
    </>
  );
}
