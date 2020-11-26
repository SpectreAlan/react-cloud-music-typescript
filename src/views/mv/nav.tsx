import React, {useEffect, useRef, useState} from "react";
import {ITypes} from '../../store/modules/mv/reducer'
import {NavBox} from "./style";
import Scroll from "../../components/scroll";

interface TypesInterface {
  list: ITypes,
  updateCategory: Function
}

const Nav = (props: TypesInterface) => {
  const {list, updateCategory} = props
  const Category = useRef(null)
  const [category, setCategory] = useState(0)

  useEffect(() => {
    if (list.length) {
      handleClick(list[0].id)
    }
    let count = 0
    // eslint-disable-next-line array-callback-return
    list.map((item) => {
      count += item.name.length * 13 + 5
    });
    if (Category.current) {
      (Category.current as any).style.width = `${count}px`;
    }
  }, [list]);

  const handleClick = (id: number) => {
    setCategory(id)
    updateCategory(id)
  }

  return (
    <NavBox>
      <Scroll direction={'horizontal'}>
        <div ref={Category}>
          {
            list.map((type) => (
              <span
                key={type.id}
                className={category === type.id ? 'active' : ''}
                onClick={
                  () => {
                    handleClick(type.id)
                  }
                }
              >
              {type.name}
            </span>
            ))
          }
        </div>
      </Scroll>
    </NavBox>
  )
}
export default React.memo(Nav)
