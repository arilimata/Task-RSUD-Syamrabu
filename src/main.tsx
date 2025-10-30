import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from './components/Layout.tsx';
import PendapatanParkir from './pages/PendapatanParkir.tsx';
import SKM from './pages/SKM.tsx';
import RekamMedik from './pages/RekamMedik.tsx';
import Harmoni from './pages/Harmoni.tsx';
import Sakip from './pages/Sakip.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Shared Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="pendapatan-parkir" />} />
          <Route path="rekam-medik" element={<RekamMedik />} />
          <Route path="pendapatan-parkir" element={<PendapatanParkir />} />
          <Route path="skm" element={<SKM />} />
          <Route path="harmoni" element={<Harmoni />} />
          <Route path="sakip" element={<Sakip />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
