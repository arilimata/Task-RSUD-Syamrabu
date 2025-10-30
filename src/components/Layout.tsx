import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import SideMenu from "./Sidemenu";

function Layout() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      {/* Kontainer utama responsif */}
      <div className="flex flex-col md:flex-row grow p-2 md:p-4 gap-4">
        <div className="w-full md:w-1/4">
          <SideMenu currentPath={currentPath} />
        </div>

        <main className="flex-1 w-full">
          <Outlet /> {/* Menampilkan konten halaman aktif */}
        </main>
      </div>
    </div>
  );
}

export default Layout;
