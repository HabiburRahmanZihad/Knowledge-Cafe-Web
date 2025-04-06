import './App.css'

import Blogs from './components/blogs/Blogs'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Blogs></Blogs>
      </div>
    </>
  )
}

export default App