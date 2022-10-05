import React from 'react'
import Iterator from './Iterator'

export interface IProps {
  props: {
    diaries: IDiary[]
    currentIndex: number
    doubleClick: Function
    deleteDiary: Function
  }
}
export default function Cover({ props }: IProps) {
  return (
    <div
      className='w-screen h-screen
    grid grid-flow-row grid-cols-4 place-content-center
    gap-6 justify-items-start '>
      <Iterator iterable={props} />
    </div>
  )
}
//TODO: props传递有没有其他好看不啰嗦的方法吗
