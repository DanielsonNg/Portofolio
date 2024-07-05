import {BrowserRouter} from 'react-router-dom'

import{ About, Experience,
Hero, Works, StarsCanvas,
Tech} from './components'
const App = () => {
  return (
    <>
    <BrowserRouter>
     <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Hero />
      </div>
      <div className='relative z-0'>
        <About />
        <Tech />
        <StarsCanvas />
      </div>
      <Experience />
      <Works />
     </div>
     </BrowserRouter>
    </>
  )
}

export default App
