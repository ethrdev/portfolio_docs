import Link from 'next/link'
import { motion } from 'framer-motion'
import { Footer } from '@/components/Footer'
import { Logo } from '@/components/Logo'
import { Navigation } from '@/components/Navigation'
import { Prose } from '@/components/Prose'
import { SectionProvider } from '@/components/SectionProvider'
import { Home, Send } from 'lucide-react'

export function Layout({ children, sections = [] }) {
  return (
    <SectionProvider sections={sections}>
      <div className="lg:ml-80 xl:ml-80">
        <motion.header
          layoutScroll
          className="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex"
        >

          <div className="relative justify-between contents lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto lg:border-r lg:pt-4 lg:pb-8 lg:border-[#313035] xl:w-72 ">
            <div className="items-center hidden lg:flex lg:justify-between lg:px-6">
              <Link href="https://poker-scientist.com" target="_blank" passHref aria-label="Home">
                <Logo className="pt-2" />
              </Link>
              <div className="font-normal pt-2 leading-7 text-sm lg:text-xl text-[#313035]">|</div>
              <Link href="/" aria-label="Documentation" passHref>
                <div className="text-sm font-semibold pt-2 lg:pr-4 tracking-wide text-[#8a8f98] hover:text-[#fefefe] duration-100">Documentation</div>
              </Link>
            </div>
            <Navigation className="hidden lg:mt-16 lg:block lg:px-6" />
            <div className='fixed bottom-0 z-50 p-4 border-t lg:px-6 lg:border-[#313035] lg:w-72 xl:w-72'>
              <Link href="https://poker-scientist.productlane.io/roadmap" className="flex flex-row items-center justify-start w-full h-full gap-2 py-1 leading-7" passHref target="_blank" aria-label='Send feedback'>
                <Send size={14} className=' text-[#8a8f98]'></Send>
                <div className='text-xs font-medium tracking-wider text-[#8a8f98] hover:text-[#fefefe] duration-100'>
                  Send feedback
                </div>
              </Link>
              <Link href="https://app.poker-scientist.com/" className="flex flex-row items-center justify-start w-full h-full gap-2 py-1 leading-7" target="_blank" passHref>
                <Home size={14} className='fill-[#8a8f98] '></Home>
                <div className='text-xs tracking-wider font-medium  text-[#8a8f98] hover:text-[#fefefe] duration-100'>
                  Go to PS app
                </div>
              </Link>
            </div>
          </div>
        </motion.header>
        <div className="relative px-4 sm:px-6 lg:px-8">
       
          <main className="py-4 pt-10 ">
            <Prose as="article">{children}</Prose>
          </main>
          <Footer />
        </div>
      </div>
    </SectionProvider>
  )
}
