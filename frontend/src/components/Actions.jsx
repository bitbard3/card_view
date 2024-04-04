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
import { BsQuestionLg } from "react-icons/bs";

export default function Actions({ setDomains, domains, genders, setGenders, available, setAvailable, team, driverObj }) {
    return (
        <div className="flex items-center md:space-x-6 space-x-3 ml-auto">
            <button onClick={() => driverObj.drive()} className="bg-[#788fff] bg-opacity-90 w-7 h-7 md:h-10 md:w-10 rounded-full flex justify-center items-center">
                <BsQuestionLg className='text-white md:h-6 md:w-6' />
            </button>
            <div id='filter' className="md:h-10 md:w-10 w-7 h-7 rounded-full hover:opacity-95 bg-[#788fff] flex items-center justify-center">
                <Popover>
                    <PopoverTrigger>
                        <div className="">
                            <LuListFilter className='text-white md:h-6 md:w-6' />
                        </div>
                    </PopoverTrigger>
                    <PopoverContent>
                        <FilterPopover available={available} setAvailable={setAvailable} genders={genders} setGenders={setGenders} domains={domains} setDomains={setDomains} />
                    </PopoverContent>
                </Popover>
            </div>
            <Dialog>
                <DialogTrigger>
                    <div className="text-white bg-[#788fff] rounded-lg hover:opacity-95 md:px-10 px-5 py-1.5 text-sm md:text-lg">
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
