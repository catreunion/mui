import { Outlet, Link } from "react-router-dom"

const Layout = () => {
  return (
    <>
      {/* global nav */}
      <nav>
        <Link to="/">Home</Link> | <Link to="about">About</Link> | <Link to="invoices">Invoices</Link> | <Link to="dashboard">Dashboard</Link>
      </nav>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}

export default Layout
