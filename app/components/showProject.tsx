'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function () {
  const settings = {
    dots: true, // 슬라이더 아래에 현재 슬라이드 위치를 표시하는 점(dot)을 표시.
    infinite: true, // 슬라이더가 끝에 도달해도 처음으로 이어지도록 순환.
    speed: 500, // 슬라이드 애니메이션 속도(밀리초 단위, 500ms).
    slidesToShow: 3, // 한 화면에 보여줄 슬라이드 개수.
    slidesToScroll: 1, // 슬라이드를 넘길 때 한 번에 이동하는 슬라이드 개수.
    arrows: true, // 좌우 화살표 네비게이션 버튼 표시.
  };

  return (
    <div className='mx-28'>
      <Slider {...settings}>
        <div className='border border-blue-500 h-44 justify-items-center font-semibold'>
          <h3 className='pt-36'>Project 1</h3>
        </div>
        <div className='border border-blue-500 h-44 justify-items-center font-semibold'>
          <h3 className='pt-36'>Project 2</h3>
        </div>
        <div className='border border-blue-500 h-44 justify-items-center font-semibold'>
          <h3 className='pt-36'>Project 3</h3>
        </div>
        <div className='border border-blue-500 h-44 justify-items-center font-semibold'>
          <h3 className='pt-36'>Project 4</h3>
        </div>
        <div className='border border-blue-500 h-44 justify-items-center font-semibold'>
          <h3 className='pt-36'>Project 5</h3>
        </div>
        <div className='border border-blue-500 h-44 justify-items-center font-semibold'>
          <h3 className='pt-36'>Project 6</h3>
        </div>
      </Slider>
    </div>
  );
}
