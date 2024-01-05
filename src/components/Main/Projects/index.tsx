import Image from 'next/image'

export function Projects () {
    return (
      <section id="projects" className="mb-24">
        <h2 className='sticky py-4 top-0 text-4xl font-bold text-slate-200 bg-slate-900/75 backdrop-blur tracking-widest mb-4 md:relative md:bg-slate-900/0 md:py-0 lg:relative lg:bg-slate-900/0 lg:py-0'>Projects</h2>
          <a href="https://github.com/brygmos/RollingScopes" target='blank' className='hover:bg-gray-800 transition-all rounded-lg flex flex-col items-start p-8 cursor-pointer group'>
            <span className='mb-4 group text-slate-200'>
              <span className='font-bold border-b border-transparent pb-px transition group-hover:text-teal-300'>RollingScopes</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 -rotate-45 group-hover:text-teal-300 inline-block h-4 w-4 -translate-y-px transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1" aria-hidden="true"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path></svg>
            </span>
            <span className='text-sm mb-2'>The project was implemented as part of the Rolling Scopes School React course</span>
            <div className='w-auto'>
              <Image
                src="/images/projects/rollingScopes/desktop.png"
                alt="rollingScopes/desktop"
                width={1000}
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
          </a>
          <a href="https://github.com/brygmos/severstal-notes" target='blank' className='hover:bg-gray-800 transition-all rounded-lg flex flex-col items-start p-8 cursor-pointer group'>
            <span className='mb-4 group text-slate-200'>
              <span className='font-bold border-b border-transparent pb-px transition group-hover:text-teal-300'>Notes App</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 -rotate-45 group-hover:text-teal-300 inline-block h-4 w-4 -translate-y-px transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1" aria-hidden="true"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path></svg>
            </span>
            <span className='text-sm mb-2'>The project was implemented as a test tast for company</span>
            <div className='w-auto'>
              <Image
                src="/images/projects/severstalNotes/desktop.png"
                alt="severstalNotes/desktop"
                width={1000}
                height={5}
              />
            </div>
            <div className='tags mt-2 flex justify-start'>
              <ul className='flex flex-wrap'>
                <li className='mt-2 mr-2 flex items-center text-xs px-3 py-1 bg-cyan-950 text-teal-300 rounded-full'>React</li>
                <li className='mt-2 mr-2 flex items-center text-xs px-3 py-1 bg-cyan-950 text-teal-300 rounded-full'>Redux</li>
                <li className='mt-2 mr-2 flex items-center text-xs px-3 py-1 bg-cyan-950 text-teal-300 rounded-full'>Vite</li>
                <li className='mt-2 mr-2 flex items-center text-xs px-3 py-1 bg-cyan-950 text-teal-300 rounded-full'>Vitest</li>
              </ul>
            </div>
          </a>
          <a href="https://github.com/brygmos/graphiql-app" target='blank' className='group hover:bg-gray-800 transition-all rounded-lg flex flex-col items-start p-8 cursor-pointer'>
            <p className='mb-4 group text-slate-200'>
              <span className='font-bold border-b border-transparent pb-px transition group-hover:text-teal-300'>GraphiQL</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 -rotate-45 group-hover:text-teal-300 inline-block h-4 w-4 -translate-y-px transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1" aria-hidden="true"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path></svg>
          </p>
          <p className='text-sm mb-2'>Playground app for testing queries to server using GraphQL</p>
            <div className='w-auto'>
              <Image
                src="/images/projects/graphiQL/desktop.png"
                alt="rollingScopes/desktop"
                width={1000}
                height={5}
              />
            </div>
            <div className='tags mt-2 flex justify-start'>
              <ul className='flex flex-wrap'>
                <li className='mt-2 mr-2 flex items-center text-xs px-3 py-1 bg-cyan-950 text-teal-300 rounded-full'>React</li>
                <li className='mt-2 mr-2 flex items-center text-xs px-3 py-1 bg-cyan-950 text-teal-300 rounded-full'>Redux</li>
                <li className='mt-2 mr-2 flex items-center text-xs px-3 py-1 bg-cyan-950 text-teal-300 rounded-full'>GraphQL</li>
                <li className='mt-2 mr-2 flex items-center text-xs px-3 py-1 bg-cyan-950 text-teal-300 rounded-full'>Firebase</li>
                <li className='mt-2 mr-2 flex items-center text-xs px-3 py-1 bg-cyan-950 text-teal-300 rounded-full'>MaterialUI</li>
                <li className='mt-2 mr-2 flex items-center text-xs px-3 py-1 bg-cyan-950 text-teal-300 rounded-full'>i18n</li>
                <li className='mt-2 mr-2 flex items-center text-xs px-3 py-1 bg-cyan-950 text-teal-300 rounded-full'>CodeMirror</li>
              </ul>
            </div>
          </a>
          <a href="https://github.com/brygmos/ulbiAnvanced" target='blank' className='group hover:bg-gray-800 transition-all rounded-lg flex flex-col items-start p-8 cursor-pointer'>
            <p className='mb-4 group text-slate-200'>
              <span className='font-bold border-b border-transparent pb-px transition group-hover:text-teal-300'>UlbiAdvanced</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 -rotate-45 group-hover:text-teal-300 inline-block h-4 w-4 -translate-y-px transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1" aria-hidden="true"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path></svg>
          </p>
          <p className='text-sm mb-2'>Implemented during tutorial course by Ulbi (youtube blogger)</p>
            <div className='w-auto'>
              <Image
                src="/images/projects/ulbiAdvanced/desktop.png"
                alt="rollingScopes/desktop"
                width={1000}
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
          </a>
        </section>
    )
}