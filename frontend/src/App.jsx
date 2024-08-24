import { useState } from 'react'


function App() {

  return (
    <main className='w-screen h-full m-auto'>
      <div className='w-11/12 h-full min-h-screen m-auto flex justify-center items-center bg-gray-200'>
        <div className='flex min-h-40 w-full min-w-40 box-border flex-row flex-wrap gap-4'>
          <div className='flex min-h-40 box-border flex-row min-w-40 flex-wrap grow shrink basis-7/12 gap-4'>
            <div className='flex grow shrink basis-4/12 box-border min-w-40 h-40'>
              <div className='bg-red-400 grow shrink'>Intro</div>
            </div>
            <div className='flex grow shrink basis-4/12 box-border min-w-40 h-40'>
              <div className='bg-red-400 grow shrink'>Education</div>
            </div>
            <div className='flex min-h-40 box-border flex-row min-w-40 flex-wrap grow shrink basis-7/12'>
              <div className='flex grow shrink basis-5/12 box-border min-w-40 h-40'>
                <div className='bg-red-400 grow shrink'>Skills</div>
              </div>
            </div>
            <div className='flex min-h-40 box-border flex-row min-w-40 flex-wrap grow shrink basis-7/12 gap-4'>
              <div className='flex grow shrink basis-12/12 box-border min-w-40'>
                <div className='bg-red-400 grow shrink'>Whatever</div>
              </div>
              <div className='flex grow shrink basis-12/12 box-border min-w-40'>
                <div className='bg-red-400 grow shrink'>Contact</div>
              </div>
            </div>
          </div>
          <div className='flex min-h-40 box-border flex-row min-w-40 flex-wrap grow shrink basis-2/12'>
            <div className='flex grow shrink basis-4/12 box-border min-w-40'>
              <div className='bg-red-500 grow shrink'>Projects</div>
            </div>
          </div>
        </div>
      </div>
    </main>


  )
}

export default App
