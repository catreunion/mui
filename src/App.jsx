import React from "react"
import { Routes, Route } from "react-router-dom"
// import Expenses from "./routes/expenses"
import Home from "./page/Home"
import Invoices from "./invoice/Invoices"
import Invoice from "./invoice/Invoice"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route path="expenses" element={<Expenses />} /> */}

          <Route path="invoices" element={<Invoices />}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select an invoice</p>
                </main>
              }
            />
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>

          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </>
  )
}

export default App
