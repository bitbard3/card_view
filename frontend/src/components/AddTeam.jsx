import React, { useState } from 'react'
import axios from 'axios';

export default function AddTeam({ team }) {
    const [name, setName] = useState('')
    const areDomainsUnique = () => {
        const domains = team.map(member => member.domain);
        const uniqueDomains = new Set(domains);
        return domains.length === uniqueDomains.size;
    };
    const onSubmitHandler = async () => {
        if (team.length < 1) {
            console.log('Need atleast two members')
            return
        }
        if (!name) {
            console.log('name cant be empty')
            return
        }
        if (!areDomainsUnique()) {
            console.log('same feild')
            return
        }
        const payload = {
            name: name,
            users: team.map(member => member._id)
        };
        try {
            const res = await axios.post('https://card-view-backend.vercel.app/api/team', payload)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="flex flex-col">
            <p className="text-black">Enter team name</p>
            <div className="flex items-center  mt-5">
                <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Avengers' className='pl-2 w-[70%] focus:outline-none py-1.5 placeholder:text-neutral-500 placeholder:text-sm text-sm  rounded-md border' />
                <button onClick={onSubmitHandler} className="px-4 py-1.5 ml-5 bg-neutral-900 rounded-lg text-white">Add</button>
            </div>
        </div>
    )
}
