export function Skills () {
    return (
      <section id="skills" className="lg:mb-24 mb-8 m-auto">
        <h2 className='sticky py-4 top-0 text-4xl font-bold text-slate-200 bg-slate-900/75 backdrop-blur tracking-widest mb-4 md:relative md:bg-slate-900/0 md:py-0 lg:relative lg:bg-slate-900/0 lg:py-0'>Skills</h2>
        <div className='lg:flex md:flex sm:flex flex-wrap justify-center block m-auto lg:text-left md:text-left sm:text-left'>
          <div className='flex flex-col mt-4 mx-4 text-left'>
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
    )
}