import React from 'react'
import Iterable from './Iterable'

interface IProps {
  iterable: {
    diaries: IDiary[]
    currentIndex: number
    doubleClick: Function
    deleteDiary: Function
  }
}

export default function Iterator({ iterable }: IProps) {
  const { diaries } = iterable
  return (
    <>
      {diaries.map((d, i) => (
        <Iterable iterable={iterable} d={d} i={i} key={i} />
      ))}
    </>
  )
  // TODO:明天启动一下js项目，不是next的原因的话就把迭代器和Iterable合并一下
}
