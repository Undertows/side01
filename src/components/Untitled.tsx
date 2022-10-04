import React from 'react'
import Untitled2 from '../../src/components/Untitled2'

interface IProps {
  diaries: IDiary[]
  currentIndex?: number
  dd: Function
  d: Function
}
export default function Untitled({ diaries, currentIndex, dd, d }: IProps) {
  return (
    <div
      className='w-screen h-screen
    grid grid-flow-row grid-cols-4  place-content-center
    gap-6 justify-items-start '>
      <Untitled2 dd={dd} diaries={diaries} c={currentIndex!} d={d} />
    </div>
  )//TODO: props传递的太丑陋了。。
}
