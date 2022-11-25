import React from 'react'
import Iterable from './Iterable'

export interface IProps {
  props1: {
    diaries: IDiary[]
    currentIndex: number
    doubleClick: Function
    deleteDiary: Function
  }
}
export default function Cover({ props1 }: IProps) {
  const { diaries } = props1
  return (
    <div
      className='w-full h-full flex justify-center
    '>
      <div
        className={`grid grid-flow-row grid-cols-1 place-content-center place-items-start
    gap-5 p-20 `}>
        {diaries.map((d, i) => (
          <Iterable iterable={props1} d={d} i={i} key={i} />
        ))}
      </div>
    </div>
  )
}
//TODO: props传递有没有其他好看不啰嗦的方法吗
