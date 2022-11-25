import React from 'react'

interface IProps {
  iterable: {
    diaries: IDiary[]
    currentIndex: number
    doubleClick: Function
    deleteDiary: Function
  }
  d: IDiary
  i: number
}

export default function Iterable({
  iterable: { deleteDiary, doubleClick, currentIndex },
  d,
  i,
}: IProps) {
  return (
    <div
      onClick={() => deleteDiary(d._id, i)}
      onMouseDown={e => doubleClick(i, e)}
      // border border-black border-solid
      className={`
      relative border-b border-gray-500 w-[75vw] pt-4 ${
        i == currentIndex &&
        `pointer-events-none before:pointer-events-auto before:w-4 before:h-4 before:rounded-2xl before:bg-rose-500
         before:absolute before:z-10 before:mr--5 before:mt--5 before:left-0 before:top-0 before:hover:cursor-pointer`
      }`}>
      <span className='whitespace-pre-wrap text-base leading-8 tracking-wider'>
        {d.content}
      </span>
    </div>
  )
}
