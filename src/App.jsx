import { useState } from 'react'
import './Styles/App.css'
import Header from './Components/Header'
import Component1 from './Components/Component1'
import Component2 from './Components/Component2'
import Component3 from './Components/COmponent3'
import Component4 from './Components/Component4'
import Component5 from './Components/Component5'
import Component6 from './Components/Component6'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-[full] m-auto font-gotham md:w-full md:px-[32px]'>
      <Header />
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
      <Component6 />
    </div>
  )
}

export default App