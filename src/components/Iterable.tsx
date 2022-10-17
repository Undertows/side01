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
      // border border-black border-solid
      onClick={() => deleteDiary(d._id, i)}
      onMouseDown={e => doubleClick(i, e)}
      className={`border border-black border-solid
      relative ${
        i == currentIndex &&
        `pointer-events-none before:pointer-events-auto before:w-4 before:h-4 before:rounded-2xl before:bg-rose-500
              before:absolute before:z-10 before:mr--5 before:mt--5 before:right-0 before:bottom-4`
      }`}>
        <span className='text-xl'>{d.content}</span>
    </div>
  )
}
