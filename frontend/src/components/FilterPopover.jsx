import React, { useEffect, useState } from 'react'
import { Checkbox } from './ui/checkbox'

export default function FilterPopover({ domains, setDomains, genders, setGenders, available, setAvailable }) {
    const [selectedDomains, setSelectedDomains] = useState([]);
    const [selectedGenders, setSelectedGenders] = useState([]);

    useEffect(() => {
        setSelectedDomains(domains);
    }, [domains]);

    useEffect(() => {
        setSelectedGenders(genders);
    }, [genders]);

    const handleDomainClick = (domain) => {
        setDomains(prevDomains => {
            if (prevDomains.includes(domain)) {
                return prevDomains.filter(d => d !== domain);
            }
            return [...prevDomains, domain];
        });
    };

    const handleGenderClick = (gender) => {
        setGenders(prevGenders => {
            if (prevGenders.includes(gender)) {
                return prevGenders.filter(g => g !== gender);
            }
            return [...prevGenders, gender];
        });
    };
    const handleAvailableToggle = () => {
        setAvailable(prevState => !prevState);
    }
    return (
        <div className="flex flex-col justify-between">
            <p className="text-black font-medium text-lg mb-3">Filter</p>
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
                <div className="flex items-center space-x-4">
                    <p className="text-stone-950">Gender</p>
                    <div className="flex gap-x-2 items-center flex-wrap gap-y-3">
                        <button onClick={() => handleGenderClick('Agender')} className={`text-black rounded-lg text-xs px-3 py-0.5 border border-neutral-500 ${selectedGenders.includes('Agender') ? 'bg-[#788fff] text-white' : 'text-black'}`}>
                            Agender
                        </button>
                        <button onClick={() => handleGenderClick('Polygender')} className={`text-black rounded-lg text-xs px-3 py-0.5 border border-neutral-500 ${selectedGenders.includes('Polygender') ? 'bg-[#788fff] text-white' : 'text-black'}`}>
                            Polygender
                        </button>
                        <button onClick={() => handleGenderClick('Genderfluid')} className={`text-black rounded-lg text-xs px-3 py-0.5 border border-neutral-500 ${selectedGenders.includes('Genderfluid') ? 'bg-[#788fff] text-white' : 'text-black'}`}>
                            Genderfluid
                        </button>
                        <button onClick={() => handleGenderClick('Male')} className={`text-black rounded-lg text-xs px-3 py-0.5 border border-neutral-500 ${selectedGenders.includes('Male') ? 'bg-[#788fff] text-white' : 'text-black'}`}>
                            Male
                        </button>
                        <button onClick={() => handleGenderClick('Non-binary')} className={`text-black rounded-lg text-xs px-3 py-0.5 border border-neutral-500 ${selectedGenders.includes('Non-binary') ? 'bg-[#788fff] text-white' : 'text-black'}`}>
                            Non-binary
                        </button>
                        <button onClick={() => handleGenderClick('Female')} className={`text-black rounded-lg text-xs px-3 py-0.5 border border-neutral-500 ${selectedGenders.includes('Female') ? 'bg-[#788fff] text-white' : 'text-black'}`}>
                            Female
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex items-center mt-7 border-b-2 border-neutral-200 pb-5 justify-between">
                <div className="flex items-center space-x-2"></div>
                <Checkbox onClick={handleAvailableToggle} />
                <p className="text-stone-950">Only available people?</p>
                <div className="w-10"></div>
            </div>
        </div>
    )
}
