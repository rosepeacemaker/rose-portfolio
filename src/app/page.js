import { useRef } from 'react'
import TextReveal from '@/components/TextReveal'


const Home = () => {
  return (
    <main className='h-[300vh] bg-black w-full'>
      <div

       className='h-128px w-192px bg-teal-800'>
      </div>
      <TextReveal
      ref={triggerRef}
       splitBy="chars"
       trigger="scroll" 
        className='text-[5rem] text-white'>
        Hello Everyone
      </TextReveal>
    </main>
  )
}

export default Home