import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useState, useCallback } from 'react'
import Head from 'next/head'
// import Image from 'next/image'
import { DiaryProvider } from '../src/providers/diary'

const Home: NextPage = () => {
  const [diary, setDiary] = useState('')
  const router = useRouter()

  const saveDiary = async () => {
    const { msg, diaryObj } = await DiaryProvider.saveDiary({ content: diary })
    console.log(msg)
    // console.log(diaryObj._id)
    selectMood(diaryObj!._id)
  }

  const selectMood = (id: string) => {
    router.push(`/mood/?id=${id}`)
  }
  return (
    <div>
      <Head>
        <title>SideProject02</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='h-screen w-screen flex flex-col justify-center items-center'>
        <textarea
          autoFocus
          onChange={e => setDiary(e.target.value)}
          className='w-[40vw] h-[50vh] rounded outline-none resize-none
        border-transparent border-solid border-2 text-2xl'
        />
        <div className='flex mt-10 gap-20'>
          <button
            className='border-2 border-solid border-transparent
        bg-opacity-40 bg-gray-400 rounded-md w-[10vw] h-[7vh]
        text-xl'
            onClick={saveDiary}>
            烂&nbsp;笔&nbsp;头
          </button>
          <button className='text-xl' onClick={() => router.push('/memories')}>
            好&nbsp;记&nbsp;性
          </button>
        </div>
      </div>
    </div>
  )
}

// Home.getInitialProps = async () => {}

export default Home
