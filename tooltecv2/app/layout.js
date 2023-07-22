import react from "react";
import '../styles/site.css'
import { NavBar } from "@/components/navbar"

 
export default function Layout({ children }) {
  return (
    <>
      <NavBar></NavBar>
      <main>{children}</main>
    </>
  )
}