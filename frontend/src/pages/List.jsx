import NavBar from '@/components/NavBar'
import React from 'react'

export default function List() {
    return (
        <div className="bg-black h-screen w-screen">
            <div className="flex flex-col w-full h-full">
                <div className="w-full flex justify-center pb-3 space-x-16 items-end h-[15%] border-b-2 border-neutral-600">
                    <NavBar />
                </div>
                <div className="w-full h-[85%] flex justify-center items-center">
                    <h1 className="text-white text-center text-2xl font font-medium">Work in progress... <br /> Backend is ready <br />Please allow some time 🙏</h1>
                </div>
            </div>
        </div>
    )
}
