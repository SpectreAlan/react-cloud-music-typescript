import React, {ReactNode, useEffect, useRef, useState} from 'react';
import BScroll from '@better-scroll/core'
import Slide from '@better-scroll/slide'
import {Container} from './style'

BScroll.use(Slide)

interface IProp {
  direction?: 'vertical' | 'horizontal';
  children: ReactNode;
  count?: number;
  interval?: number;
  autoplay?: boolean;
  dot?: boolean;
  height?: number;
}

const Slider = (props: IProp) => {
  const [slider, setSlider] = useState<BScroll | null>(null);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const {
    interval = 3000,
    height = 200,
    count = 0,
    direction = 'horizontal',
    dot = false,
    autoplay = false,
  } = props;
  const list: number[] = new Array(count).fill(1)
  useEffect(() => {
    if (!slider && count) {
      const slider = new BScroll(scrollContainerRef.current!, {
        scrollX: direction === 'horizontal',
        scrollY: direction === 'vertical',
        slide: {
          interval,
          autoplay
        },
        useTransition: true,
        momentum: false,
        bounce: false,
        stopPropagation: false,
        probeType: 2
      })
      setSlider(slider);
      slider.on('slideWillChange', (page: any) => {
        setCurrentPageIndex(page.pageX)
      })
    }
  }, [slider, count, direction, interval, autoplay]);
  const goToPage = (index: number) => {
    slider && slider.goToPage(index, 0)
    setCurrentPageIndex(index)
  }

  return (
    <Container height={height}>
      <div className="banner-wrapper">
        <div className="slide-banner-wrapper" ref={scrollContainerRef}>
          <div className="slide-banner-content">
            {props.children}
          </div>
        </div>
        {
          dot ? (<div className="dots-wrapper">
            {
              list.map((item, index) => (
                <span
                  className={'dot ' + (index === currentPageIndex ? 'active' : '')}
                  key={index}
                  onClick={() => goToPage(index)}
                />
              ))
            }
          </div>) : ''
        }
      </div>
    </Container>
  );
}

export default React.memo(Slider);
