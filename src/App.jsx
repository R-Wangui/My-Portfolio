// import 'bootstrap/dist/css/bootstrap.min.css';
import "tailwindcss";
// import Projects from './pages/Projects'
// import Resume from './pages/Resume';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
// import AboutMe from './pages/AboutMe';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          {/* <Route path='/aboutme' element={<AboutMe />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/resume' element={<Resume />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App