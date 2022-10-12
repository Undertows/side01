import React from 'react'
import Iterable from './Iterable'

export interface IProps {
  props: {
    diaries: IDiary[]
    currentIndex: number
    doubleClick: Function
    deleteDiary: Function
  }
}
export default function Cover({ props }: IProps) {
  const { diaries } = props
  return (
    <div
      className='w-screen h-screen
    grid grid-flow-row grid-cols-1 place-content-center
    gap-10 justify-items-start '>
      {/* <Iterator iterable={props} /> */}
      {diaries.map((d, i) => (
        <Iterable iterable={props} d={d} i={i} key={i} />
      ))}
    </div>
  )
}
//TODO: props传递有没有其他好看不啰嗦的方法吗
