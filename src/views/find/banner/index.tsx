import React from "react"
import Slider from "../../../components/slider"
import {IBanner} from '../../../store/modules/find/reducer'

interface BannerInterface {
  list: IBanner
}

const Banner = (props: BannerInterface) => {
  const {list} = props
  return (
    <Slider count={list.length} dot={true} autoplay={true}>
      {
        list.map((item) => (
          <div className="slide-page" key={item.bannerId} style={{height: '200px'}}>
            <img src={item.pic} alt={item.typeTitle} height="100%" width="100%"/>
          </div>
        ))
      }
    </Slider>
  )
}

export default React.memo(Banner)
