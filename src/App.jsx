

import { Outlet } from 'react-router-dom';
import NavBar from './Routes File/NavBar';

function App() {

  return (
    <>
      <div className='max-w-7xl mx-auto'>
        <NavBar></NavBar>
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default App
