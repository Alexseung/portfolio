import One from './one';
import Two from './tow';
import Three from './three';

interface PageProps {
  params: {menuItem: string}; // 동적 경로의 세그먼트
}

export default function AboutPage({params}: PageProps) {
  const {menuItem} = params;

  let PageComponent;

  switch (menuItem) {
    case 'one':
      PageComponent = One;
      break;
    case 'two':
      PageComponent = Two;
      break;
    case 'three':
      PageComponent = Three;
      break;
    default:
      PageComponent = () => <div>없는데..</div>;
  }

  return <PageComponent />;
}

// switch 문으로 각 params에 맞는 이름의 컴포넌트 가져와서 보여주기
