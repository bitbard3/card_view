import React from 'react'
import { Skeleton } from './ui/skeleton';
import TeamCard from './TeamCard';

export default function TeamCardList({ teams, loading }) {
    return (
        <>
            {
                loading ?
                    Array.from({ length: 20 }, (_, index) => <Skeleton className='h-[220px] text-neutral-600 bg-neutral-700' key={index} />
                    ) :
                    (
                        teams.map((team) => (
                            <TeamCard
                                name={team.name}
                                users={team.users}
                            />
                        ))
                    )
            }
        </>
    )
}
