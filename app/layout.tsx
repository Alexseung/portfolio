'use client';

import React from 'react';
import './main.css';
import Menu from './menu';
import {useRouter} from 'next/navigation';

// /app/layout.tsx
export default function Layout({children}: {children: React.ReactNode}) {
  const router = useRouter();
  const goHome = () => {
    router.push('/');
  };

  return (
    <html lang='en'>
      {' '}
      {/* 반드시 <html> 태그 포함 */}
      <body>
        <div>
          <header>
            <div
              className='text-2xl mb-4 hover:cursor-pointer'
              onClick={goHome}
            >
              윤승근씨 포트폴리오
            </div>
            <Menu></Menu>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
