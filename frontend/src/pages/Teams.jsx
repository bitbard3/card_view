import React, { useEffect, useState } from 'react'
import NavBar from '@/components/NavBar'
import axios from 'axios'
import TeamCardList from '@/components/TeamCardList';


export default function Teams() {
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const res = await axios.get('https://card-view-backend.vercel.app/api/team')
                setTeams(res.data.teams);
            } catch (error) {
            }
            finally {
                setLoading(false)
            }
        }
        fetchData();
    }, [])
    return (
        <div className='bg-black min-h-screen w-screen'>
            <div className="flex flex-col w-full h-full pb-10">
                <div className="w-full flex  md:px-20 px-5 pb-3 items-end h-28 border-b-2 border-neutral-600">
                    <NavBar />
                </div>
                <div className="w-full py-10 gap-y-10 gap-x-5 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  grid-cols-1 px-10">
                    <TeamCardList loading={loading} teams={teams} />
                </div>
            </div>
        </div >
    )
}
