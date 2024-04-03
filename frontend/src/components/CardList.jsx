import React from 'react';
import Card from './Card';
import { Skeleton } from './ui/skeleton';

export default function CardList({ users, loading }) {
    return (
        <>
            {
                loading ?
                    Array.from({ length: 20 }, (_, index) => <Skeleton className='h-[220px] text-neutral-600 bg-neutral-700' key={index} />
                    ) :
                    (
                        users.map((user) => (
                            <Card
                                domain={user.domain}
                                email={user.email}
                                firstName={user.first_name}
                                lastName={user.last_name}
                                gender={user.gender}
                                avatar={user.avatar}
                                key={user._id}
                                available={user.available}
                            />
                        ))
                    )
            }
        </>
    )
}
