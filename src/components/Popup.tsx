import { useEffect, useState } from 'react'
import { DiaryProvider } from '../../src/providers/diary'
import moods from '../../src/utils/constant'

interface IProps {
  _id: string
  setDiaryObj: Function
}

function Mood({ _id, setDiaryObj }: IProps) {
  const [blur, setblur] = useState(false)

  useEffect(() => {
    if (_id !== undefined)
      setTimeout(() => {
        setblur(true)
      }, 10)
  })

  const setMood = async (mood: string) => {
    try {
      const { msg } = await DiaryProvider.setMood({
        mood: mood,
        id: _id,
      })
      // setblur(false)//TODO: 退场动画
      document.querySelector('textarea')!.value = ''
      setDiaryObj(null) //popup消失
    } catch (e) {
      setDiaryObj(null) //网络错误时popup消失
      console.log(`set mood失败 ${e}`)
    }
  }
  return (
    <div
      className={`${blur && 'backdrop-blur-sm'}
    absolute z-20 w-screen h-screen
    transition duration-400 ease-in-out
    flex place-content-center place-items-center`}>
      <div
        className={`${blur && 'scale-110'} transform
    transition duration-200 ease-in-out
    w-[30vw] h-[35vh]
    grid gap-10 grid-cols-4
    place-content-center place-items-center`}>
        {moods.map((m, i) => (
          <div
            key={i}
            className={`rounded-full w-16 h-16
    border-[1px] border-opacity-20 border-black border-solid`}
            onClick={() => setMood(m)}>
            {m}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Mood
