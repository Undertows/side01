import React, { useState, useLayoutEffect } from 'react'

interface IProps {
  type?: string
  notices: string
  setNotices: Function
}
export default function Notices({ type, notices, setNotices }: IProps) {
  useLayoutEffect(() => {
    setTimeout(() => {
      setNotices(false)
    }, 7000)
  })

  return (
    <div
      className={`rounded-md w-[18vw] h-[10vh]
    flex place-items-center place-content-start text-sm fixed top-3 right-3
    ${type == 'warning' && 'text-red-600'}`}
      onMouseOver={() => console.log('first')}>
      <span className={`transition duration-1000 ease-in-out p-3`}>
        {notices}
      </span>
    </div>
  )
}
