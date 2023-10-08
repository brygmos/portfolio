import Image from 'next/image'
import { Inter } from 'next/font/google'
import CursorGlow from '../components/CursorGlow/index'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`lg:flex min-h-screen lg:justify-between lg:px-24 xl:px-48 2xl:px-72 px-4 gap-4 ${inter.className}`} style={{ background: 'radial-gradient(600px at 1065px 137px, rgba(29, 78, 216, 0.15), transparent 80%)' }}>
      <CursorGlow/>
      <div className="lg:w-2/4 ">
        <aside className="sticky top-0 lg:py-24 py-4 lg:flex lg:flex-col lg:justify-between lg:h-screen">
          <div className="mb-8">
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
          <section id="socials" className="mb-8">
          <h2 className='text-4xl font-bold text-slate-200 tracking-widest mb-4'>Socials</h2>
          <div>
            <ul className='flex gap-4'>
              <li>
                <a href="https://github.com/brygmos" target='blank' className='hover:text-slate-200 inline-block'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/brygmos" target='blank' className='hover:text-slate-200 inline-block'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>
                </a>
              </li>
              <li>
                <a href="https://web.telegram.org/k/#@Brygmos" target='blank' className='hover:text-slate-200 inline-block'>
                  <svg width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6">
                  <title>Telegram</title>
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.codewars.com/users/brygmos" target='blank' className='hover:text-slate-200 inline-block'>
                  <svg fill="currentColor" width="800px" height="800px" viewBox="0 0 24 24" role="img" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg"><title>Codewars</title><path d="M.76 12.2l-.08-.04c-.18-.1-.32-.25-.42-.44-.14-.26-.2-.5-.2-.75l.02-.13c0-.2.05-.38.14-.55l.08-.15c.04-.08.1-.15.15-.22.06-.07.07-.16.05-.24l-.05-.16c-.06-.2-.1-.4-.1-.6L.32 8.8c0-.22.06-.44.2-.6l.1-.13c.07-.1.18-.16.3-.2.1-.03.17-.13.18-.25l.02-.34c0-.27.13-.52.33-.7l.24-.18c.05-.05.1-.1.14-.18.05-.06.06-.14.05-.2-.02-.1 0-.13.05-.14.16.06.26.04.33-.04l.13-.17.36-.4c.1-.1.14-.28.08-.42l-.12-.26c-.02-.06 0-.13.05-.15.13 0 .22.05.26.13l.04.07c.06.12.2.18.3.13.22-.08.4-.1.57-.1h.32c.22 0 .4-.15.44-.38.04-.28.14-.5.28-.65.15-.17.32-.3.52-.4.26-.14.42-.34.47-.6.07-.32.24-.55.47-.7l.76-.43.22-.13c.13-.08.25-.18.35-.3l.2-.24c.1-.1.2-.17.32-.2.1-.03.24-.05.36-.04l.4.03c.2 0 .36.05.52.12l.1.05c.1.04.2.02.25-.05L10 .7l.43-.45c.1-.1.22-.14.35-.12.13.02.26.07.38.13.18.1.33.14.5.14h.1c.22 0 .44.03.66.08l.15.04c.15.04.3-.02.4-.14.03-.05.1-.06.14-.02.03.02.04.04.05.07.02.2.14.35.3.4l.16.05c.17.05.32.16.42.3.1.15.22.3.36.4l.1.1c.1.1.24.14.38.13h.59c.24 0 .47.04.7.14.22.1.45.12.66.04.22-.07.45-.1.68-.07l.43.07c.2.02.4.12.52.27l.05.05c.1.1.2.23.3.37.06.13.2.2.34.2h.62c.15 0 .3.03.42.1.13.1.24.2.34.3l.1.13c.12.14.18.33.17.53 0 .16.12.3.28.3l.2.02c.14 0 .26.1.33.23l.1.2.26.58c.04.1.05.2.04.28 0 .1.03.18.1.22l.1.07c.13.1.2.25.18.42l-.07.47-.02.2c-.02.1.03.23.12.3.15.1.22.23.23.38v.2c0 .1-.02.22-.1.3-.06.08-.1.18-.1.3l.03.23c0 .16.1.3.2.4.14.1.22.26.24.42.04.25.05.45.05.65v.23c0 .08 0 .16.03.24.02.07.07.14.13.18l.2.15c.2.13.34.3.42.53.1.22.13.45.13.68v.08c0 .18-.02.37-.08.54-.05.18-.04.35.03.5.08.14.13.3.15.47.04.2.02.4-.05.56l-.02.07c-.05.12-.13.23-.23.32-.1.1-.2.16-.26.23-.06.06-.1.16-.07.25l.03.14c.05.2.05.4 0 .58v.08c-.04.15-.1.28-.16.4-.07.13-.17.23-.3.3l-.15.1c-.07.04-.12.13-.12.22 0 .1-.04.2-.1.26l-.15.2c-.1.13-.23.24-.37.3-.14.1-.26.2-.35.3-.1.12-.18.26-.22.4-.04.18-.18.28-.33.28h-.54c-.14 0-.27.1-.33.22-.07.16-.14.27-.23.37-.1.1-.16.22-.2.36-.02.12-.12.2-.22.16-.13-.06-.26 0-.32.1-.12.2-.24.35-.37.48l-.07.06c-.13.1-.3.18-.45.18-.18 0-.27.08-.3.2-.03.1-.05.23-.06.34-.02.12-.06.23-.1.33l-.05.06c-.1.15-.18.3-.28.43l-.04.06c-.13.17-.3.3-.5.35-.24.08-.45.1-.66.1h-.14c-.1 0-.2.06-.27.16l-.06.1-.06.12-.13.22c-.1.18-.25.3-.45.36-.2.05-.43.07-.64.06l-.16-.02c-.14 0-.27-.04-.4-.1-.1-.04-.24 0-.3.1-.1.14-.22.22-.35.26l-.3.1c-.2.05-.42.05-.63 0l-.16-.05c-.1 0-.2-.05-.28-.1-.1-.05-.2-.07-.3-.06l-.13.02c-.2.02-.38 0-.56-.05l-.27-.06c-.12-.04-.23-.12-.3-.23-.05-.1-.16-.18-.3-.2H9.9c-.2-.03-.38-.1-.5-.25L9 22.5l-.14-.12-.22-.16-.13-.1c-.15-.1-.33-.18-.52-.2l-.6-.1c-.06 0-.1-.02-.16-.03L7 21.74c-.1-.02-.2-.1-.27-.2-.06-.1-.17-.14-.27-.1-.2.08-.36.1-.52.13H5.8c-.26.02-.5-.02-.74-.13-.24-.1-.4-.25-.55-.44-.12-.17-.3-.3-.52-.34l-.28-.06c-.2-.04-.4-.12-.58-.24-.2-.14-.3-.27-.38-.43-.08-.15-.13-.32-.14-.5v-.08c-.02-.2-.16-.38-.35-.43-.23-.07-.4-.17-.55-.3-.14-.13-.22-.32-.22-.52l.02-.44c0-.17-.05-.32-.17-.43-.12-.12-.2-.27-.2-.43l-.03-.36c-.02-.26-.07-.52-.13-.78-.06-.23.03-.46.22-.57l.07-.05c.1-.07.14-.2.08-.32l-.08-.1c-.1-.1-.2-.17-.3-.2-.08-.02-.1-.1-.1-.15l.1-.12c.06-.07.05-.18 0-.24-.08-.08-.12-.18-.13-.28l-.02-.7c0-.14.02-.28.06-.42.04-.12 0-.26-.12-.32zm9.9-1.32c.07-.07.06-.2 0-.25-.1-.08-.17-.17-.23-.27l-.1-.16c-.07-.13-.16-.24-.26-.34l-.02-.02c-.1-.08-.17-.18-.23-.3-.05-.1-.05-.2 0-.3l.06-.1c.06-.1.1-.24.1-.36v-.04c0-.1-.04-.2-.1-.3-.04-.08-.08-.18-.1-.28V8.1c-.03-.12 0-.25.08-.35.08-.13.14-.25.17-.4v-.02c.04-.1.02-.23-.04-.33s-.08-.2-.04-.32l.07-.2c.06-.18.15-.34.27-.48l.14-.15.1-.12.06-.06c.06-.06.07-.16.02-.24-.05-.1-.08-.2-.06-.3l.02-.14c.03-.2.1-.4.23-.56l.04-.04c.15-.2.34-.33.56-.4l.27-.1c.12-.04.2-.17.2-.3 0-.16.05-.3.14-.43l.05-.05c.1-.17.22-.34.3-.52l.07-.13c.02-.03.03-.07.03-.1 0-.17-.1-.32-.26-.33L11.76 2c-.25-.02-.5 0-.74 0l-.85.1c-.13 0-.23.1-.24.24 0 .14-.1.26-.22.3l-.36.1-.1.03-.3.1c-.22.07-.4.23-.5.45l-.08.13c-.1.22-.27.4-.48.53-.2.13-.3.34-.32.58v.1c-.02.2-.08.4-.2.54l-.05.08c-.08.1-.1.23-.05.34.05.12.08.25.07.38v.53c0 .14-.1.26-.2.3-.14.05-.23.16-.27.3l-.05.2c-.04.2.03.4.2.52.16.12.26.3.3.52v.18c.03.2.14.4.32.5.18.12.32.3.4.5l.05.16c.08.22.26.35.46.37h.06c.18 0 .34.1.44.26.1.16.26.27.44.3l.28.08c.17.05.33.14.46.27l.02.02c.1.08.26.07.35-.04l.07-.08zm1.14-.92c.1.06.2.03.24-.06l.03-.05c.07-.14.16-.28.26-.4l.2-.3c.03 0 .04-.02.05-.04l.24-.32c.1-.1.22-.17.36-.17.13 0 .24-.07.3-.2.04-.14.1-.27.22-.38l.05-.06c.1-.1.2-.15.3-.2.13-.02.25-.04.37-.04h.3c.12 0 .22-.05.28-.15.06-.1.15-.17.25-.22l.1-.04c.16-.07.34-.12.52-.14l.2-.02c.12 0 .25 0 .37.07.1.07.23.06.33-.02l.07-.04c.15-.1.32-.18.5-.2h.02c.2-.04.38-.04.58-.03h.1c.2.03.37.1.5.25l.03.04c.1.1.26.18.4.18h.17c.05 0 .1-.02.13-.07.03-.03.08-.06.13-.06h.1c.14 0 .27.04.4.08l.17.07c.16.05.33.1.5.12h.12c.08 0 .13-.05.13-.12 0-.1-.02-.2-.07-.28L20.68 7c-.08-.13-.14-.27-.2-.4l-.02-.05c-.05-.1-.05-.2 0-.3V6.2c.02-.08-.02-.17-.1-.2L20.28 6c-.16-.05-.3-.14-.4-.27l-.1-.1c-.1-.1-.16-.25-.2-.4-.05-.13-.16-.23-.3-.23h-.42c-.15-.02-.28-.1-.37-.22l-.04-.05c-.07-.1-.13-.22-.17-.34-.05-.1-.16-.16-.26-.13l-.12.04c-.2.07-.4.1-.6.08l-.16-.02c-.17 0-.33-.07-.46-.17l-.1-.07c-.08-.06-.16-.1-.25-.14-.1-.04-.18-.02-.24.05l-.05.06c-.1.1-.24.18-.38.2l-.54.03c-.1 0-.2.05-.27.12-.08.07-.17.12-.27.14h-.02c-.1 0-.2.07-.3.14v.02c-.1.1-.23.15-.36.15l-.04.02c-.12 0-.24 0-.36.03h-.12c-.17.03-.3.17-.34.35l-.04.23c-.03.16-.1.3-.2.43-.1.12-.22.2-.37.2h-.15-.02c-.1.02-.2.13-.18.25.02.17 0 .32-.03.47l-.04.17c-.04.15-.14.27-.27.32l-.06.03h-.02c-.06.04-.1.13-.05.2.06.1.08.2.07.3l-.03.32c0 .12-.05.23-.1.33-.06.1-.06.2-.02.3l.1.22c.05.1.06.2.03.32-.03.1-.05.2-.04.3 0 .1.06.2.14.24l.02.02zm7.9 7.23c.1.1.25.14.37.06l.2-.13c.1-.07.18-.17.22-.3v-.02l.1-.3.06-.1.04-.1.04-.07c.04-.08.1-.14.2-.17l.04-.02c.08-.02.13-.1.13-.18 0-.1.05-.18.1-.25l.08-.07.2-.26v-.02c.06-.08.1-.17.12-.27.02-.1 0-.2-.04-.3l-.02-.04c-.04-.1-.06-.17-.07-.26l-.03-.28-.03-.3c0-.1.04-.2.1-.3.07-.08.12-.18.16-.28v-.04l.02-.02c.02-.1-.03-.2-.12-.2-.1-.05-.2-.13-.23-.25l-.03-.06c-.05-.18-.08-.36-.08-.54l.02-.5v-.03c0-.17-.14-.3-.3-.3h-.02c-.2 0-.36-.06-.5-.2l-.08-.1-.2-.23-.26-.3c-.1-.14-.2-.26-.33-.38-.1-.1-.25-.2-.4-.22l-.2-.03c-.1-.02-.23-.07-.34-.14-.08-.06-.2-.04-.28.04l-.13.14-.06.04c-.07.02-.14-.02-.17-.1-.04-.12-.04-.26.02-.38v-.06c0-.07-.06-.12-.12-.1h-.16c-.18 0-.36-.02-.53-.1l-.1-.04c-.1-.05-.22-.08-.33-.08-.1 0-.2.02-.3.08l-.04.03c-.12.08-.26.12-.4.13h-.33c-.15 0-.3.05-.4.13-.13.08-.27.13-.42.16l-.27.04c-.12.03-.25.08-.36.17-.1.1-.24.16-.37.2l-.05.02c-.16.05-.3.15-.4.3l-.12.12c-.07.1-.07.22 0 .32.06.1.18.13.3.1l.15-.06c.08-.03.17 0 .24.04.06.05.15.08.24.07l.25-.03c.14 0 .28 0 .42.04.15.05.28.1.4.2s.25.14.4.16c.15.02.3.05.44.1l.1.02c.1.03.18.1.24.2.05.08.1.2.1.3v.03c0 .12.1.2.2.2h.06c.16 0 .33.02.5.07l.07.03c.1.04.2.1.27.2.08.1.13.2.16.3l.03.14c.03.15.04.3.04.46v.05c0 .1.07.2.18.24.1.02.22.06.33.12l.05.02c.13.08.26.18.36.3l.05.07c.13.15.2.34.2.53v.07c0 .15-.03.3-.08.44-.04.12 0 .26.13.3l.07.05c.15.06.28.17.38.3.1.15.14.32.14.5v.3c-.02.1-.05.18-.1.25s-.05.17 0 .24l.06.1zm-6.4-5.12h-.02c-.04 0-.06.05-.05.1l.04.2c.04.16.06.32.08.48.02.16.1.3.22.4h.04c.15.12.24.3.25.48v.5c-.02.1 0 .2.06.28l.05.05c.1.12.14.26.15.4l.03.55c0 .13-.08.24-.2.26l-.1.02c-.07 0-.1.08-.1.15 0 .08.03.17.06.25v.02c.03.1.04.2.03.3l-.04.27c-.04.2-.1.38-.2.56l-.07.12c-.05.1-.12.16-.2.2-.1.04-.17.12-.2.22l-.08.36c-.05.2-.14.4-.26.6h-.02c-.12.16-.27.3-.45.4l-.12.08-.3.15c-.1.04-.16.13-.18.24l-.05.33c-.03.2-.1.37-.24.5l-.13.15-.15.15L11 21c-.12.14-.3.2-.5.17l-.36-.07-.33-.04h-.09c-.04.04-.05.1-.02.16.07.12.18.2.3.2l.22.04c.1 0 .22.05.32.1.1.07.2.12.32.15h.02c.13.05.27.06.4.05l.15-.02c.17-.02.33 0 .47.06l.12.04c.05.02.13 0 .18-.05.06-.06.12-.1.2-.13l.08-.02c.13-.04.26-.06.4-.06h.08c.12 0 .23.02.33.08l.04.02c.07.03.15 0 .2-.06.03-.07.1-.14.17-.2l.25-.17.16-.1.08-.05c.1-.07.24-.1.36-.1l.36-.03c.14-.02.26-.12.3-.26.04-.15.1-.3.2-.43s.2-.24.3-.34c.13-.1.26-.15.4-.16h.08c.16-.03.28-.18.27-.34v-.02V18.77c.02-.1.06-.23.12-.33l.2-.3.08-.1c.06-.05.1-.12.17-.2l.1-.13c.06-.1.06-.23-.02-.32-.1-.1-.15-.24-.17-.38v-.04c-.02-.16-.02-.33.03-.5v-.05c.05-.13.12-.26.2-.38.08-.1.07-.24-.03-.32l-.17-.15c-.14-.12-.22-.3-.24-.48l-.02-.2c0-.06 0-.13-.02-.2l-.02-.15c-.02-.17-.12-.3-.26-.4l-.07-.02c-.1-.06-.2-.15-.28-.27-.08-.1-.12-.24-.15-.38l-.03-.17c0-.06-.04-.1-.1-.13l-.16-.05-.32-.1c-.1-.02-.2-.1-.27-.17h-.02c-.06-.08-.16-.08-.22-.02l-.1.1c-.02.03-.04.04-.07.03-.06 0-.1-.05-.08-.1.02-.16-.04-.32-.17-.42l-.13-.1-.3-.2c-.08-.03-.2 0-.24.1l-.04.06c0 .02-.03.03-.04.04-.04 0-.1 0-.1-.05l-.03-.05c-.03-.06-.1-.1-.16-.12zm-1.2 1l-.05-.05c-.05-.04-.1-.03-.15.02-.07.12-.13.25-.16.38v.02c-.03.13-.15.22-.27.2h-.1-.02c-.14 0-.25.12-.25.26 0 .18-.06.36-.17.5l-.06.06c-.1.13-.25.22-.4.27l-.08.02c-.1.03-.18.1-.2.22 0 .1-.06.2-.14.28l-.1.08c-.12.13-.3.2-.48.22l-.5.05c-.16 0-.3.1-.4.25-.1.15-.25.25-.4.27l-.22.02c-.16.02-.33.02-.5-.02l-.1-.02-.27-.07c-.1-.03-.18 0-.24.07l-.1.13c-.13.15-.32.22-.5.2l-.65-.08c-.1 0-.18-.05-.27-.1-.1-.06-.17-.13-.24-.2l-.25-.3c-.03-.02-.08-.03-.13-.02l-.14.06-.56.14c-.1.03-.23 0-.33-.06-.1-.08-.22-.1-.34-.1H3.2c-.12.03-.2.16-.16.28l.04.2c.03.1.02.22-.03.32s-.04.2.03.3l.06.08c.08.12.2.22.3.32.1.1.2.2.28.33l.15.27c.08.14.2.22.36.22.15 0 .3.05.42.15l.3.28c.08.07.2.08.28.02l.05-.02c.06 0 .1.04.1.1v.05c0 .13.1.25.23.3l.45.1c.16.05.32.1.47.2h.08c.08 0 .15-.07.14-.16v-.35c0-.1.04-.2.12-.24l.05-.02c.05.02.1.06.08.1v.17c0 .13.04.25.13.34.1.1.23.12.34.08.12-.05.24-.06.37-.05l.37.02c.18.02.35 0 .5-.07.18-.06.33-.14.47-.25l.06-.04.3-.27c.1-.1.23-.15.35-.15h.4c.2-.02.38-.2.4-.4l.04-.2c0-.13.06-.25.15-.35.1-.1.2-.16.3-.2l.12-.05c.17-.07.3-.22.36-.4l.06-.24c.05-.2.15-.4.3-.53l.02-.02c.12-.1.14-.3.06-.44l-.03-.07c-.07-.1-.08-.25-.03-.38.05-.14.1-.26.18-.38l.1-.14c.04-.08.04-.2-.02-.27-.06-.08-.1-.18-.1-.28l-.02-.14v-.34c.02-.1 0-.23-.03-.33l-.04-.12zm-1.43-.76v-.03c0-.1-.06-.16-.14-.16h-.26c-.1.02-.2.02-.28 0h-.45c-.23 0-.45-.04-.67-.1l-.24-.06-.2-.06-.45-.15c-.24-.07-.42-.23-.53-.45l-.05-.1c-.07-.15-.22-.23-.37-.2-.17 0-.34 0-.5-.08l-.12-.05c-.23-.1-.4-.3-.4-.57l-.04-.27c-.03-.14-.12-.27-.24-.32-.14-.06-.27-.14-.4-.23l-.05-.03c-.15-.12-.28-.28-.35-.47l-.02-.06c-.05-.16-.06-.33-.02-.5l.02-.06c.04-.13.05-.26.05-.4 0-.12-.05-.24-.14-.33l-.14-.13c-.16-.13-.26-.32-.27-.53-.02-.22-.02-.43.02-.64V6.3v-.03c0-.12-.1-.2-.2-.2H4.2c-.13 0-.24.08-.3.2-.05.14-.13.25-.22.36l-.04.05-.2.2-.1.1c-.1.1-.16.25-.18.4-.02.15-.06.3-.12.44l-.02.05c-.05.12-.13.23-.23.3-.1.08-.17.2-.17.32l-.02.46c0 .2-.03.4-.1.6l-.02.08c-.05.13 0 .27.12.33l.42.18.04.02c.03 0 .04.02.05.05.03.04 0 .1-.03.1l-.1.05c-.06.02-.1.08-.12.15l-.02.1v.02l-.1.56c-.02.08-.02.17-.02.26 0 .08.05.15.12.18l.22.1c.1.06.22.13.3.2l.1.08c.03.04.08.08.12.1l.04.04c.07.06.12.14.14.23l.1.45c0 .12.1.22.2.25l.16.05s.03 0 .05.02l.2.06c.16.05.3.14.42.26.12.1.24.23.34.37l.04.04c.08.1.2.15.32.12s.25-.04.38-.04h.15c.1 0 .23.03.34.1.1.06.23.1.35.15h.03c.12.05.25.03.35-.04.1-.08.23-.12.36-.12l.47.03c.1 0 .2-.02.25-.1h.02l.17-.16.05-.05c.08-.1.2-.14.32-.15h.45c.12 0 .23-.1.28-.2.05-.1.15-.18.27-.2l.2-.04c.08 0 .15-.07.18-.16.03-.1.08-.18.15-.24l.16-.16c.1-.1.15-.2.17-.32z"/></svg>
                </a>
              </li>
            </ul>
          </div>
        </section>
        </aside>
      </div>
      <main className="lg:w-2/4 lg:py-24">
        <section id="about" className="lg:mb-24 mb-8">
          <h2 className='sticky py-4 top-0 text-4xl font-bold text-slate-200 bg-slate-900/75 backdrop-blur tracking-widest mb-4 md:relative md:bg-slate-900/0 md:py-0 lg:relative lg:bg-slate-900/0 lg:py-0'>About</h2>
          <p className='mb-4'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint sunt necessitatibus iusto culpa quibusdam exercitationem temporibus rerum recusandae reiciendis vel veritatis nostrum, quasi eveniet voluptatem provident quos quas aspernatur doloremque. Nulla, suscipit incidunt eius assumenda enim laboriosam saepe, cum repellendus aut ipsam doloremque numquam, iusto quas qui. Magnam, minima in.
          </p>
          <p className='mb-4'>
            My main focus these days is building products and leading projects for our clients at Upstatement. In my free time I`ve also released an online video course that covers everything you need to know to build a web app with the Spotify API.
          </p>
          <p>
            When I`m not at the computer, I`m usually rock climbing, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds.
          </p>
        </section>
        <section id="skills" className="lg:mb-24 mb-8 m-auto">
        {/* <h2 className='text-4xl font-bold text-slate-200 tracking-widest'>Skills</h2> */}
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
        <section id="experience" className="mb-24">
        {/* <h2 className='text-4xl font-bold text-slate-200 tracking-widest mb-4'>Experience</h2> */}
        <h2 className='sticky py-4 top-0 text-4xl font-bold text-slate-200 bg-slate-900/75 backdrop-blur tracking-widest mb-4 md:relative md:bg-slate-900/0 md:py-0 lg:relative lg:bg-slate-900/0 lg:py-0'>Experience</h2>

        <div className='mb-24'>
          <a href="https://myresume.ru/resume/doDruHPDqry/" target='blank' className='group text-slate-200'>
            <span className='font-bold border-b border-transparent pb-px transition group-hover:border-teal-300'>View CV</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2" aria-hidden="true"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path></svg>
          </a>
        </div>
        </section>
        <section id="projects" className="mb-24">
        {/* <h2 className='text-4xl font-bold text-slate-200 tracking-widest mb-4'>Projects</h2> */}
        <h2 className='sticky py-4 top-0 text-4xl font-bold text-slate-200 bg-slate-900/75 backdrop-blur tracking-widest mb-4 md:relative md:bg-slate-900/0 md:py-0 lg:relative lg:bg-slate-900/0 lg:py-0'>Projects</h2>


          <section className='hover:bg-gray-800 transition-all rounded-lg flex flex-col items-start p-8 cursor-pointer group'>
            <a href="https://github.com/brygmos/RollingScopes" target='blank' className='mb-4 group text-slate-200'>
              <span className='font-bold border-b border-transparent pb-px transition group-hover:text-teal-300'>RollingScopes</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 -rotate-45 group-hover:text-teal-300 inline-block h-4 w-4 -translate-y-px transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1" aria-hidden="true"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path></svg>
          </a>
          <p className='text-sm mb-2'>The project was implemented as part of the Rolling Scopes School React course</p>
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
          </section>
          <section className='group hover:bg-gray-800 transition-all rounded-lg flex flex-col items-start p-8 cursor-pointer'>
            <a href="https://github.com/brygmos/graphiql-app" target='blank' className='mb-4 group text-slate-200'>
              <span className='font-bold border-b border-transparent pb-px transition group-hover:text-teal-300'>GraphiQL</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 -rotate-45 group-hover:text-teal-300 inline-block h-4 w-4 -translate-y-px transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1" aria-hidden="true"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path></svg>
          </a>
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
          </section>
          <section className='group hover:bg-gray-800 transition-all rounded-lg flex flex-col items-start p-8 cursor-pointer'>
            <a href="https://github.com/brygmos/ulbiAnvanced" target='blank' className='mb-4 group text-slate-200'>
              <span className='font-bold border-b border-transparent pb-px transition group-hover:text-teal-300'>UlbiAdvanced</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 -rotate-45 group-hover:text-teal-300 inline-block h-4 w-4 -translate-y-px transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1" aria-hidden="true"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path></svg>
          </a>
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
          </section>
        </section>
      </main>
    </div>
  )
}
