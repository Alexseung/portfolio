import JavaScript from './JavaScript';
import React from './React';
import Nextjs from './Nextjs';

interface PageProps {
  params: {languageItem: string}; // 동적 경로의 세그먼트
}

export default function AboutPage({params}: PageProps) {
  const {languageItem} = params;

  let PageComponent;

  switch (languageItem) {
    case 'javascript':
      PageComponent = JavaScript;
      break;
    case 'react':
      PageComponent = React;
      break;
    case 'nextjs':
      PageComponent = Nextjs;
      break;
    default:
      PageComponent = () => <div>없는데..</div>;
  }

  return <PageComponent />;
}
