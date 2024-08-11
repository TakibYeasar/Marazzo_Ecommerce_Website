import { Navbar, Sidebar, Footer } from '@/containers/dashboard/';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <div className="flex-1 bg-bgSoft p-5 min-h-screen">
        <Sidebar />
      </div>
      <div className="flex-4 p-5">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default Layout
