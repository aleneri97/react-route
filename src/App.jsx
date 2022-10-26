import { HashRouter, Routes, Route } from 'react-router-dom'
import { BlogPage } from './BlogPage'
import { HomePage } from './HomePage'
import { Menu } from './Menu'
import { ProfilePage } from './ProfilePage'

function App() {
  return (
    <>
      <HashRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/blog" element={<BlogPage />}/>
          <Route path="/profile" element={<ProfilePage />}/>
          <Route path="*" element={<p>Not Found</p>}/>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
