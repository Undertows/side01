import React, { useState, useEffect } from 'react'
import { DiaryProvider } from '../../src/providers/diary'
import DateSelector from '../../src/components/DateSelector'
import Cover from '../../src/components/Cover'
import moods from '../../src/utils/constant'

export default function Memories() {
  const [diaries, setDiaries] = useState<IDiary[]>([]) //or [] as IDiary[]
  const [time, getTime] = useState<subCondition>()
  const [currentIndex, setCurrentIndex] = useState(-1)

  const props = {
    diaries,
    currentIndex,
    deleteDiary,
    doubleClick,
  }

  useEffect(() => {
    //TODO: 一上来只随机展示一条日记
    getDiariesByWhat('all', {})
  }, [])

  function getDiariesByWhat(what: string, subCondition: subCondition) {
    DiaryProvider.getDiariesByWhat(what, subCondition).then(diaries => {
      setDiaries(diaries)
    })
  }

  async function deleteDiary(id: string, index: number) {
    if (index == currentIndex) {
      setDiaries(diaries.filter(d => d._id !== id))
      setCurrentIndex(-1)
      const { msg } = await DiaryProvider.deleteDiary(id)
      alert(msg)
    }
  }

  if (typeof window === 'object') {
    //documentを使う関数を入れる
    document.oncontextmenu = e => {
      e.preventDefault()
    }
  }

  function doubleClick(
    index: number,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    if (e.button === 2) setCurrentIndex(index)
    setTimeout(() => {
      setCurrentIndex(-1)
    }, 5000)
  }
  return (
    <>
      <select
        onChange={e => getDiariesByWhat('mood', { mood: e.target.value })}>
        {moods.map(m => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>
      {'  '}
      <DateSelector handleDateSelect={getTime} />
      <button onClick={() => getDiariesByWhat('date', time!)}>byDate</button>
      {'  '}
      {/* // flex flex-col place-items-center */}
      <Cover props={props} />
    </>
  )
}
