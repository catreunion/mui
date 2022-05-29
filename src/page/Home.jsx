import React from "react"
import { Outlet, Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <h1>Bookkeeper</h1>
      <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
        <Link to="/invoices">Invoices</Link> | <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </>
  )
}

export default Home
