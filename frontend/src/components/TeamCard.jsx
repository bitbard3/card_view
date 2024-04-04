import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import UserDialog from './UserDialog'

export default function TeamCard({ name, users }) {
    return (
        <div className="flex relative shadow-card flex-col justify-around rounded-md border h-[220px] bg-[#e3e3e3]">
            <div className="flex justify-center items-center">
                <p className="text-light font-medium text-xl border-b-[1px] border-black">{name}</p>
            </div>
            <div id='avatar' className="flex w-full px-10">
                {users.map((user, index) => (
                    <div key={index} className="flex items-center">
                        <Dialog>
                            <DialogTrigger>
                                <div className="w-16 h-16 flex justify-center items-center rounded-full border-2 border-black -ml-5 bg-white">
                                    <img src={user.avatar} className="h-12 w-12  rounded-full mr-2" />
                                </div>
                            </DialogTrigger>
                            <DialogContent>
                                <UserDialog
                                    available={user.available}
                                    avatar={user.avatar}
                                    domain={user.domain}
                                    email={user.email}
                                    firstName={user.first_name}
                                    gender={user.gender}
                                    lastName={user.last_name}
                                    id={user._id}
                                />
                            </DialogContent>
                        </Dialog>
                    </div>
                ))}
            </div>
        </div>
    )
}
