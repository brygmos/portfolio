import { Inter } from 'next/font/google'
import CursorGlow from '../components/CursorGlow/index'
import { Aside } from '@/components/Aside'
import { Main } from '@/components/Main'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <div className={`lg:flex min-h-screen lg:justify-between lg:px-24 xl:px-48 2xl:px-72 px-4 gap-4 ${inter.className}`} style={{ background: 'radial-gradient(600px at 1065px 137px, rgba(29, 78, 216, 0.15), transparent 80%)' }}>
      <CursorGlow/>
      <Aside/>
      <Main/>
    </div> 
  )
}
