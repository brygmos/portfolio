import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`flex min-h-screen justify-between px-24 gap-4 ${inter.className}`} style={{ background: 'radial-gradient(600px at 1065px 137px, rgba(29, 78, 216, 0.15), transparent 80%)' }}>
      <div className="w-2/4 bg-gray-800 bg-opacity-20">
        <aside className="sticky top-0 py-24 flex flex-col justify-between h-screen">
          <div className="bg-gray-600 bg-opacity-20">
            <h1 className='text-4xl font-bold text-slate-200 tracking-widest'>Russkikh Daniil</h1>
            <h2 className='mt-2 text-lg font-medium text-slate-200 tracking-widest'>Front-end developer</h2>
            <p className='mt-4 max-w-xs leading-normal text-slate-400'>I build accessible, inclusive products and digital experiences for the web.</p>

            <nav className="nav hidden lg:block" aria-label="In-page jump links">
              <ul className="mt-16 w-max">
                <li>
                  <a className="group flex items-center py-3 active" href="#about">
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-teal-300 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none">
                    </span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                      About
                    </span>
                  </a>
                </li>
                <li>
                  <a className="group flex items-center py-3 active" href="#skills">
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-teal-300 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none">
                    </span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                      Skills
                    </span>
                  </a>
                </li>
                <li>
                  <a className="group flex items-center py-3 " href="#experience">
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-teal-300 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                      Experience
                    </span>
                  </a>
                </li>
                <li>
                  <a className="group flex items-center py-3 " href="#projects">
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-teal-300 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                      Projects
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <section id="socials" className="bg-gray-600 bg-opacity-20">
          <h2 className='text-4xl font-bold text-slate-200 tracking-widest mb-4'>Socials</h2>
        </section>
        </aside>
      </div>
      <main className="w-2/4 bg-gray-800 bg-opacity-20 py-24">
        <section id="about" className="bg-gray-600 bg-opacity-20 mb-24">
          <h2 className='text-4xl font-bold text-slate-200 tracking-widest mb-4'>About me</h2>
          <p className='mb-4'>
            Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a student-led design studio, and a huge corporation.
          </p>
          <p className='mb-4'>
            My main focus these days is building products and leading projects for our clients at Upstatement. In my free time I`ve also released an online video course that covers everything you need to know to build a web app with the Spotify API.
          </p>
          <p>
            When I`m not at the computer, I`m usually rock climbing, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds.
          </p>
        </section>
        <section id="skills" className="bg-gray-600 bg-opacity-20 mb-24">
        <h2 className='text-4xl font-bold text-slate-200 tracking-widest'>Skills</h2>
        <div className='flex flex-wrap justify-around max-w-lg'>
          <div className='flex flex-col mt-4 mx-4'>
            <h3 className='uppercase text-slate-300 font-bold text-slate-200 tracking-widest mb-2'>Languages</h3>
            <ul>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>SQL</li>
            </ul>
          </div>
          <div className='flex flex-col mt-4 mx-4'>
            <h3 className='uppercase text-slate-300 font-bold text-slate-200 tracking-widest mb-2'>Libraries</h3>
            <ul>
                <li>React</li>
                <li>Redux, RTK</li>
                <li>NodeJS</li>
                <li>GraphQL</li>
                <li>Express</li>
                <li>Tailwind</li>
            </ul>
          </div>
          <div className='flex flex-col mt-4 mx-4'>
            <h3 className='uppercase text-slate-300 font-bold text-slate-200 tracking-widest mb-2'>Tools</h3>
            <ul>
              <li>Git</li>
              <li>Bash</li>
              <li>Storybook</li>
              <li>Figma</li>
              <li>Illustrator</li>
              <li>Webpack</li>
              <li>Postman</li>
            </ul>
          </div>
        </div>
        </section>
        <section id="experience" className="bg-gray-600 bg-opacity-20 mb-24">
        <h2 className='text-4xl font-bold text-slate-200 tracking-widest mb-4'>Experience</h2>
        <div className='mb-24'>
          <a href="/aboutfs" target='blank' className='group text-slate-200'>
            <span className='font-bold border-b border-transparent pb-px transition group-hover:border-teal-300'>View CV in PDF</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2" aria-hidden="true"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path></svg>
          </a>
        </div>
        </section>
        <section id="projects" className="bg-gray-600 bg-opacity-20 mb-24">
        <h2 className='text-4xl font-bold text-slate-200 tracking-widest mb-4'>Projects</h2>
          <section className='hover:bg-gray-800 transition-all rounded-lg flex flex-col items-start p-8 cursor-pointer group'>
            <a href="/aboutfs" target='blank' className='mb-4 group text-slate-200'>
              <span className='font-bold border-b border-transparent pb-px transition group-hover:text-teal-300'>RollingScopes</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 -rotate-45 group-hover:text-teal-300 inline-block h-4 w-4 -translate-y-px transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1" aria-hidden="true"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path></svg>
          </a>
          <p className='text-sm mb-2'>The project was implemented as part of the Rolling Scopes School React course</p>
            <div className='w-auto'>
              <Image
                src="/images/projects/rollingScopes/desktop.png"
                alt="rollingScopes/desktop"
                width={5000}
                height={5}
              />
            </div>
            <div className='tags mt-2 flex justify-start'>
              <ul className='flex flex-wrap'>
                <li className='mt-2 mr-2 flex items-center text-xs px-3 py-1 bg-cyan-950 text-teal-300 rounded-full'>React</li>
                <li className='mt-2 mr-2 flex items-center text-xs px-3 py-1 bg-cyan-950 text-teal-300 rounded-full'>SSR</li>
                <li className='mt-2 mr-2 flex items-center text-xs px-3 py-1 bg-cyan-950 text-teal-300 rounded-full'>Redux</li>
                <li className='mt-2 mr-2 flex items-center text-xs px-3 py-1 bg-cyan-950 text-teal-300 rounded-full'>RTK Query</li>
                <li className='mt-2 mr-2 flex items-center text-xs px-3 py-1 bg-cyan-950 text-teal-300 rounded-full'>API</li>
                <li className='mt-2 mr-2 flex items-center text-xs px-3 py-1 bg-cyan-950 text-teal-300 rounded-full'>Vite</li>
                <li className='mt-2 mr-2 flex items-center text-xs px-3 py-1 bg-cyan-950 text-teal-300 rounded-full'>Vitest</li>
              </ul>
            </div>
          </section>
          <section className='group hover:bg-gray-800 transition-all rounded-lg flex flex-col items-start p-8 cursor-pointer'>
            <a href="/aboutfs" target='blank' className='mb-4 group text-slate-200'>
              <span className='font-bold border-b border-transparent pb-px transition group-hover:text-teal-300'>UlbiAdvanced</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 -rotate-45 group-hover:text-teal-300 inline-block h-4 w-4 -translate-y-px transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1" aria-hidden="true"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path></svg>
          </a>
          <p className='text-sm mb-2'>&quot;End-to-end&quot; frontend project. Implemented during tutorial course by Ulbi (youtube blogger)</p>
            <div className='w-auto'>
              <Image
                src="/images/projects/ulbiAdvanced/desktop.png"
                alt="rollingScopes/desktop"
                width={500}
                height={5}
              />
            </div>
            <div className='tags mt-2 flex justify-start'>
              <ul className='flex flex-wrap'>
                <li className='mt-2 mr-2 flex items-center text-xs px-3 py-1 bg-cyan-950 text-teal-300 rounded-full'>React</li>
                <li className='mt-2 mr-2 flex items-center text-xs px-3 py-1 bg-cyan-950 text-teal-300 rounded-full'>Redux</li>
                <li className='mt-2 mr-2 flex items-center text-xs px-3 py-1 bg-cyan-950 text-teal-300 rounded-full'>Webpack</li>
                <li className='mt-2 mr-2 flex items-center text-xs px-3 py-1 bg-cyan-950 text-teal-300 rounded-full'>Babel</li>
                <li className='mt-2 mr-2 flex items-center text-xs px-3 py-1 bg-cyan-950 text-teal-300 rounded-full'>Storybook</li>
                <li className='mt-2 mr-2 flex items-center text-xs px-3 py-1 bg-cyan-950 text-teal-300 rounded-full'>Jest</li>
                <li className='mt-2 mr-2 flex items-center text-xs px-3 py-1 bg-cyan-950 text-teal-300 rounded-full'>Cypress</li>
                <li className='mt-2 mr-2 flex items-center text-xs px-3 py-1 bg-cyan-950 text-teal-300 rounded-full'>Loki</li>
                <li className='mt-2 mr-2 flex items-center text-xs px-3 py-1 bg-cyan-950 text-teal-300 rounded-full'>i18n</li>
              </ul>
            </div>
          </section>
        </section>
      </main>
    </div>
  )
}
