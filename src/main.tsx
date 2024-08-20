import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './app.tsx'
import './global.css'
import { Layout } from "./components/layout/Layout.tsx"
import { Header } from "./components/header/Header.tsx"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout className="h-screen">
      <Header/>
      <App />
    </Layout>
  </React.StrictMode>,
)
