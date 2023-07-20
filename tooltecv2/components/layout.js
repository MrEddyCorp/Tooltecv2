import react from "react";
import '../styles/globals.css'
import { NavBar } from "@/components/navbar"

 
export default function Layout({ children }) {
  return (
    <>
      <NavBar></NavBar>
      <main>{children}</main>
    </>
  )
}