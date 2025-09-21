import React from "react"
import ReactDOM from "react-dom/client"
import { AdminDashboard } from "./admin-dashboard"
import { AuthProvider } from "./auth-provider"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <AdminDashboard />
    </AuthProvider>
  </React.StrictMode>
)
