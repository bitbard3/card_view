import React from 'react'
import { Checkbox } from './ui/checkbox'

export default function Card({ firstName, lastName, gender, email, domain, avatar, available, addToTeam, _id, team }) {
    const handleAddToTeam = () => {
        addToTeam(_id, domain);
    };
    return (
        <div className="flex relative shadow-card flex-col rounded-md border h-[220px] bg-[#e3e3e3]">
            <div className="w-full h-[30%] flex items-end justify-center mt-4">
                <img src={avatar} className='h-14 w-14 border rounded-full border-neutral-900' alt="" />
            </div>
            <div className="w-full h-[70%] flex flex-col items-center mt-5 px-5">
                <p className="text-2xl text-black"><span>{firstName}</span> <span>{lastName}</span></p>
                <p className="text-xs text-neutral-600">{domain}</p>
                <div className="flex space-x-4 mr-auto items-center mt-3">
                    <p className="text-sm text-neutral-500 ">Gender</p>
                    <p className="text-sm text-neutral-950 font">{gender}</p>
                </div>
                <div className="flex space-x-7 mr-auto items-center mt-2">
                    <p className="text-sm text-neutral-500 ">Email</p>
                    <p className="text-sm text-neutral-950 font">{email}</p>
                </div>
            </div>
            {!available &&
                <div className="absolute top-5 right-0">
                    <div className="px-2 py-1.5 rounded-l-md bg-yellow-500 bg-opacity-85 italic">
                        <p className="text-white text-xs">Unavailable</p>
                    </div>
                </div>
            }
            <div className="absolute top-3 left-3">
                <Checkbox disabled={!available} onClick={handleAddToTeam} className='border-neutral-500' />
            </div>
        </div>
    )
}
