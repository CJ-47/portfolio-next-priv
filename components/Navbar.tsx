"use client"
import React,{useState} from "react";
import Link from "next/link"; 
import { useTheme } from "next-themes";
import {RiMoonFill , RiSunLine} from "react-icons/ri"
import {IoMdMenu,IoMdClose} from "react-icons/io"

interface NavItem{
    label: string
    page : string
}

const Nav_items : Array<NavItem> =[
    {
        label:"Home",
        page:"home",
    },
    {
        label:"About",
        page:"about"
    },
    {
        label:"Projects",
        page:"projects"
    }
]
const NavBar = () =>
{const {systemTheme,theme,setTheme}=useTheme()
const currentTheme=theme ==="system" ? systemTheme:theme
const [navbar,setNavbar]=useState(false)
return <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow dark:border-b dark:border-stone-600">
    <div className="justify-between md:items-center md:flex">
        <div >
        <div className="md:py-5 md:block">
            <h2 className="text-2xl font-bold">Name H K</h2>
            </div>
            </div>
        <div className="md:flex md:space-x-6">
            {Nav_items.map((item,index) => {
                return <a key={index}>{item.label}</a>})}
            {
                currentTheme === "dark" ? 
                (<button onClick={()=>setTheme("light") } className="bg-slate-100 p-2 rounded-xl" >
                    <RiSunLine size={25} color="black" /></button>) :
                (<button onClick={()=>setTheme("dark")} className="bg-slate-100 p-2 rounded-xl"> 
                <RiMoonFill /> </button>)
            }
            
        </div>
    </div>
</header>
}
export default NavBar;