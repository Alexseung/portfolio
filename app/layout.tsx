// import React from 'react';
// import './main.css';

// // /app/layout.tsx
// export default function Layout({children}: {children: React.ReactNode}) {
//   return (
//     <div>
//       <header>
//         <h1>My Website</h1>
//       </header>
//       <main>{children}</main>
//     </div>
//   );
// }

import React from 'react';
import './main.css';

// /app/layout.tsx
export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      {' '}
      {/* 반드시 <html> 태그 포함 */}
      <body>
        <div>
          <header>
            <h1>윤승근씨 포트폴리오</h1>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
