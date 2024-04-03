import React, { useEffect, useState } from 'react'
import { Checkbox } from './ui/checkbox'

export default function FilterPopover({ domains, setDomains }) {
    const [selectedDomains, setSelectedDomains] = useState([]);

    useEffect(() => {
        setSelectedDomains(domains);
    }, [domains]);

    const handleDomainClick = (domain) => {
        setDomains(prevDomains => {
            if (prevDomains.includes(domain)) {
                return prevDomains.filter(d => d !== domain);
            }
            return [...prevDomains, domain];
        });
    };
    return (
        <div className="flex flex-col justify-between">
            <div className="flex justify-between items-center mb-3">
                <p className="text-black font-medium text-lg">Filter</p>
                <button className="px-4 py-1.5 bg-red-500 rounded-lg text-neutral-100">Clear</button>
            </div>
            <div className="flex items-center mt-7 border-b-2 border-neutral-200 pb-5 justify-between">
                <div className="flex items-center space-x-4">
                    <p className="text-stone-950">Domain</p>
                    <div className="flex gap-x-2 items-center flex-wrap gap-y-3">
                        <button onClick={() => handleDomainClick('IT')} className={` rounded-lg text-xs px-3 py-0.5 border border-neutral-500 ${selectedDomains.includes('IT') ? 'bg-[#788fff] text-white' : 'text-black'}`}>
                            IT
                        </button>
                        <button onClick={() => handleDomainClick('Marketing')} className={`text-black rounded-lg text-xs px-3 py-0.5 border border-neutral-500 ${selectedDomains.includes('Marketing') ? 'bg-[#788fff] text-white' : 'text-black'}`}>
                            Marketing
                        </button>
                        <button onClick={() => handleDomainClick('Finance')} className={`text-black rounded-lg text-xs px-3 py-0.5 border border-neutral-500 ${selectedDomains.includes('Finance') ? 'bg-[#788fff] text-white' : 'text-black'}`}>
                            Finance
                        </button>
                        <button onClick={() => handleDomainClick('Sales')} className={`text-black rounded-lg text-xs px-3 py-0.5 border border-neutral-500 ${selectedDomains.includes('Sales') ? 'bg-[#788fff] text-white' : 'text-black'}`}>
                            Sales
                        </button>
                        <button onClick={() => handleDomainClick('Business Development')} className={`text-black rounded-lg text-xs px-3 py-0.5 border border-neutral-500 ${selectedDomains.includes('Business Development') ? 'bg-[#788fff] text-white' : 'text-black'}`}>
                            Business Development
                        </button>
                        <button onClick={() => handleDomainClick('UI Designing')} className={`text-black rounded-lg text-xs px-3 py-0.5 border border-neutral-500 ${selectedDomains.includes('UI Designing') ? 'bg-[#788fff] text-white' : 'text-black'}`}>
                            UI Designing
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex items-center mt-7 border-b-2 border-neutral-200 pb-5 justify-between">
                <p className="text-stone-950">Name</p>
                <div className="w-2/3 rounded-md flex items-center border border-black">
                    <input type="text"
                        className="pl-2 w-[80%] focus:outline-none py-1.5 placeholder:text-neutral-500 placeholder:text-sm text-sm  rounded-md"
                        placeholder="Anet" />
                </div>
            </div>
            <div className="flex items-center mt-7 border-b-2 border-neutral-200 pb-5 justify-between">
                <div className="flex items-center space-x-4">
                    <p className="text-stone-950">Gender</p>
                    <div className="flex gap-x-2 items-center flex-wrap gap-y-3">
                        <button className="text-black rounded-lg text-xs px-3 py-0.5 border border-neutral-500">
                            Agender
                        </button>
                        <button className="text-black rounded-lg text-xs px-3 py-0.5 border border-neutral-500">
                            Polygender
                        </button>
                        <button className="text-black rounded-lg text-xs px-3 py-0.5 border border-neutral-500">
                            Genderfluid
                        </button>
                        <button className="text-black rounded-lg text-xs px-3 py-0.5 border border-neutral-500">
                            Male
                        </button>
                        <button className="text-black rounded-lg text-xs px-3 py-0.5 border border-neutral-500">
                            Non-binary
                        </button>
                        <button className="text-black rounded-lg text-xs px-3 py-0.5 border border-neutral-500">
                            Female
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex items-center mt-7 border-b-2 border-neutral-200 pb-5 justify-between">
                <div className="flex items-center space-x-2"></div>
                <Checkbox />
                <p className="text-stone-950">Only available people?</p>
                <div className="w-10"></div>
            </div>
        </div>
    )
}
