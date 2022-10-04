import { useRouter } from 'next/router'
import { DiaryProvider } from '../../src/providers/diary'
import moods from '../../src/utils/constant'
//TODO: mood应该作为一个component而不是page
function mood() {
  const router = useRouter()
  const setMood = async (mood: string) => {
    try {
      const { msg } = await DiaryProvider.setMood({
        mood: mood,
        id: router.query.id,
      })
      alert(msg)
      router.push('/')
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <div className='w-screen h-screen flex place-content-center place-items-center'>
      {/* border-black border-solid border-2 */}
      <div
        className='grid gap-10 grid-cols-4 w-[30vw] h-[35vh]
    place-content-center place-items-center'>
        {moods.map((m, i) => (
          <div
            key={i}
            className='rounded-full w-16 h-16 border-[1px] border-opacity-20 border-black border-solid '
            onClick={() => setMood(m)}>
            {m}
          </div>
        ))}
      </div>
    </div>
  )
}

export default mood
