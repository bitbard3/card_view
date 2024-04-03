import React from 'react'
import { LuListFilter } from "react-icons/lu";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import FilterPopover from './FilterPopover';
export default function Actions({ setDomains, domains, genders, setGenders, available, setAvailable }) {
    return (
        <div className="flex items-center space-x-10 ml-auto">
            <div className="h-10 w-10 rounded-full hover:opacity-95 bg-[#788fff] flex items-center justify-center">
                <Popover>
                    <PopoverTrigger>
                        <div className="">
                            <LuListFilter className='text-white h-6 w-6' />
                        </div>
                    </PopoverTrigger>
                    <PopoverContent>
                        <FilterPopover available={available} setAvailable={setAvailable} genders={genders} setGenders={setGenders} domains={domains} setDomains={setDomains} />
                    </PopoverContent>
                </Popover>
            </div>
            <div className="text-white bg-[#788fff] rounded-lg hover:opacity-95 px-10 py-1.5 text-lg">
                Add team
            </div>
        </div>
    )
}
