import React, {useState, forwardRef, useRef, useEffect, ReactNode, useImperativeHandle} from "react"
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'
import PullDown from '@better-scroll/pull-down'
import SpectrumLoading from '../loading/spectrum'
import Loading from '../loading'
import {Container} from './style'

BScroll.use(Pullup).use(PullDown)

interface ScrollProps {
  direction?: 'vertical' | 'horizontal';
  click?: boolean;
  refresh?: boolean;
  pullLoading?: boolean;
  bounceTop?: boolean;
  bounceBottom?: boolean;
  onScroll?: Function;
  pullUp?: Function;
  pullDown?: Function;
  children: ReactNode;
}

const Scroll = forwardRef((props: ScrollProps, ref) => { // forwardRef 提供能够被父级调用的scroll实例
  const {
    direction = 'vertical',
    click = true,
    refresh = true,
    pullLoading = false,
    bounceTop = true,
    bounceBottom = true,
  } = props;

  const {
    onScroll,
    pullDown = () => {
      bScroll && bScroll.finishPullDown()
    },
    pullUp = () => {
      bScroll && bScroll.finishPullUp()
    },
  } = props;
  const [bScroll, setBScroll] = useState<BScroll | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => { // 初始化scroll实例
    const scroll = new BScroll(scrollContainerRef.current!, {
      pullUpLoad: {threshold: 20},
      scrollX: direction === 'horizontal', // 开启横向滚动
      scrollY: direction === 'vertical', // 开启纵向滚动
      click: click, // 是否支持click事件
      pullDownRefresh: {
        threshold: 20,  // 配置顶部下拉的距离来决定刷新时机
        stop: 40 // 回弹悬停的距离。BetterScroll 在派发 pullingDown 钩子之后，会立马执行回弹悬停动画
      },
      bounce: { // 超过边缘的回弹动画
        top: bounceTop,
        bottom: bounceBottom
      }
    });
    setBScroll(scroll);
    return () => {
      setBScroll(null);
    }
  }, []);

  useEffect(() => { // 结束上下拉刷新行为
    if (!pullLoading && bScroll) {
      bScroll.y < 0 ? bScroll.finishPullUp() : bScroll.finishPullDown()
    }
  }, [bScroll, pullLoading])

  useEffect(() => { // 滚动事件
    if (!bScroll) return;
    onScroll && bScroll.on('scroll', onScroll)
    pullUp && bScroll.on('pullingUp', pullUp)
    pullDown && bScroll.on('pullingDown', pullDown)
    return () => {
      bScroll.destroy()
    }
  }, [bScroll]);
  useEffect(() => { // 当 DOM 结构发生变化的时候重新计算 BetterScroll,防止滚动假死
    if (refresh && bScroll) {
      bScroll.refresh();
    }
  });

  // 搭配forwardRef 一起使用，ref 已经在 forWardRef 中默认传入
  useImperativeHandle(ref, () => ({
    refresh() {
      if (bScroll) {
        bScroll.refresh();
      }
    },
    init() {
      if (bScroll) {
        bScroll.refresh();
        bScroll.scrollTo(0, 0);
      }
    },
    getBScroll() {
      if (bScroll) {
        return bScroll;
      }
    }
  }));

  const upStyle = (bScroll && bScroll.y < 0 && pullLoading) ? '' : 'none' // 上拉加载动画
  const downStyle = (bScroll && bScroll.y > 0 && pullLoading) ? '' : 'none' // 下拉刷新动画

  //
  return (
    <Container ref={scrollContainerRef}>
      {props.children}
      <div className='up' style={{display: upStyle}}><Loading/></div>
      <div className='down' style={{display: downStyle}}><SpectrumLoading/></div>
    </Container>
  );
})
export default Scroll
