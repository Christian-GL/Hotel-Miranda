
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

import { Home } from './pages/home/home'
import { Layout } from './pages/layout/layout'


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path='' element={<Home />} />
                {/* <Route path='/myPhotos' element={<PageMyPhotos />} /> */}
            </Route>
        </Routes>
    </BrowserRouter >
)
