import React from 'react'
import { LuListFilter } from "react-icons/lu";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import FilterPopover from './FilterPopover';
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import AddTeam from './AddTeam';

export default function Actions({ setDomains, domains, genders, setGenders, available, setAvailable, team }) {
    return (
        <div className="flex items-center md:space-x-10 space-x-5 ml-auto">
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
            <Dialog>
                <DialogTrigger>
                    <div className="text-white bg-[#788fff] rounded-lg hover:opacity-95 md:px-10 px-5 py-1.5 md:text-lg">
                        Add team
                    </div>
                </DialogTrigger>
                <DialogContent>
                    <AddTeam team={team} />
                </DialogContent>
            </Dialog>
        </div>
    )
}
