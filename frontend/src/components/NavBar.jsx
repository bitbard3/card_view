import React from 'react'
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <div id='tabs' className="flex items-center md:space-x-8 space-x-4">
                <NavLink to={'/'} className={({ isActive }) =>
                    isActive ? 'text-white md:text-xl border-b-[1px] border-neutral-300' : 'text-neutral-400 md:text-xl'
                }>
                    Users
                </NavLink>
                <NavLink to={'/teams'} className={({ isActive }) =>
                    isActive ? 'text-white md:text-xl border-b-[1px] border-neutral-300' : 'text-neutral-400 md:text-xl'
                }>
                    Teams
                </NavLink>
            </div>
        </>
    )
}
