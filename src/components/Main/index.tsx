import { About } from './About'
import { Skills } from './Skills'
import { Experience } from './Experience'
import { Projects } from './Projects'
export function Main () {
    return (
        <main className="lg:w-2/4 lg:py-24">
        <About/>
        <Skills/>
        <Experience/>
        <Projects/>
        <p className='text-slate-500 text-center'>Design inspired by <a href="https://v4.brittanychiang.com/" className='text-slate-400 hover:text-slate-300' target="_blank">Brittany Chiang</a> site</p>
      </main>
    )
}
