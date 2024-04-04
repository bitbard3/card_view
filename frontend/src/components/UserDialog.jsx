import React from 'react'
import Card from './Card'

export default function UserDialog({ id, available, email, avatar, domain, firstName, lastName, gender }) {
    return (
        <div className="py-10">
            <Card _id={id} available={available} email={email} avatar={avatar} domain={domain} firstName={firstName} lastName={lastName} gender={gender} />
        </div>
    )
}
