import React from 'react'
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <NavLink to={'/'} className={({ isActive }) =>
                isActive ? 'text-white text-xl border-b-[1px] border-neutral-300' : 'text-neutral-400 text-xl'
            }>
                Users
            </NavLink>
            <NavLink to={'/teams'} className={({ isActive }) =>
                isActive ? 'text-white text-xl' : 'text-neutral-400 text-xl'
            }>
                Teams
            </NavLink></>
    )
}
