import { About } from './About'
import { Skills } from './Skills'
import { Experience } from './Experience'
import { Projects } from './Projects'
export function Main () {
    return (
        <main className="@apply lg:w-2/4 lg:py-24">
        <About/>
        <Skills/>
        <Experience/>
        <Projects/>
      </main>
    )
}
