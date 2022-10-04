import React from 'react'

interface IProps {
  diaries: IDiary[]
  c: number
  dd: Function
  d: Function
}
export default function Untitle2({
  diaries,
  c: currentIndex,
  dd: doubleClick,
  d: deleteDiary,
}: IProps) {
  return (
    <>
      {diaries.map((d, i) => (
        <div
          // border border-black border-solid
          onClick={() => deleteDiary(d._id, i)}
          onMouseDown={e => doubleClick(i, e)}
          className={`relative pl-6 ${
            i == currentIndex &&
            `pointer-events-none before:pointer-events-auto before:w-4 before:h-4 before:rounded-2xl before:bg-rose-500
              before:absolute before:z-10 before:mr--5 before:mt--5 before:right-0 before:bottom-4`
          }`}
          key={i}>
          {d.content}
        </div>
      ))}
    </>
  )
}
