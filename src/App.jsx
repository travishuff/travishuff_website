import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Credits from './pages/Credits'
import Discography from './pages/Discography'
import Gear from './pages/Gear'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/discography" element={<Discography />} />
        <Route path="/gear" element={<Gear />} />
      </Routes>
    </BrowserRouter>
  )
}
