import { useEffect } from "react";

export function Navigation () {

  useEffect(()=>{
    const nav = document.querySelector('.nav')
    const sections = document.querySelectorAll<HTMLElement>('main > section');

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -70% 0px',
      threshold: [0.2],
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {

        const entrySection = entry.target as HTMLElement
        const entrySectionName = entrySection.id
        const navItem = nav?.querySelector<HTMLElement>(`[href="#${entrySectionName}"]`);

        if (entry.isIntersecting) {

          navItem?.classList.add('active')

        } else {

          navItem?.classList.remove('active');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });

  }, [])
  
    return (
      <nav className="nav hidden lg:block" aria-label="In-page jump links">
              <ul className="mt-16 w-max">
                <li className="navLi" >
                  <a className="active group flex items-center py-3 text-slate-500 " href="#about">
                    <span className="nav-indicator group-[.active]:bg-teal-300 group-[.active]:w-16 bg-slate-500 mr-4 h-px w-8 transition-all group-hover:w-16 group-hover:bg-teal-300 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none">
                    </span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest  group-hover:text-slate-200 group-focus-visible:text-slate-200 group-[.active]:text-slate-200">
                      About
                    </span>
                  </a>
                </li>
                <li className="navLi" >
                  <a className="group flex items-center py-3 text-slate-500 " href="#skills">
                    <span className="nav-indicator group-[.active]:bg-teal-300 group-[.active]:w-16 bg-slate-500 mr-4 h-px w-8 transition-all group-hover:w-16 group-hover:bg-teal-300 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none">
                    </span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest  group-hover:text-slate-200 group-focus-visible:text-slate-200 group-[.active]:text-slate-200">
                      skills
                    </span>
                  </a>
                </li>
                <li className="navLi" >
                  <a className="group flex items-center py-3 text-slate-500 " href="#experience">
                    <span className="nav-indicator group-[.active]:bg-teal-300 group-[.active]:w-16 bg-slate-500 mr-4 h-px w-8 transition-all group-hover:w-16 group-hover:bg-teal-300 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none">
                    </span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest  group-hover:text-slate-200 group-focus-visible:text-slate-200 group-[.active]:text-slate-200">
                      experience
                    </span>
                  </a>
                </li>
                <li className="navLi" >
                  <a className="group flex items-center py-3 text-slate-500 " href="#projects">
                    <span className="nav-indicator group-[.active]:bg-teal-300 group-[.active]:w-16 bg-slate-500 mr-4 h-px w-8 transition-all group-hover:w-16 group-hover:bg-teal-300 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none">
                    </span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest  group-hover:text-slate-200 group-focus-visible:text-slate-200 group-[.active]:text-slate-200">
                      projects
                    </span>
                  </a>
                </li>

              </ul>
            </nav>
    )
}