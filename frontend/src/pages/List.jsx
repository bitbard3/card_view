import NavBar from '@/components/NavBar'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios'
import CardList from '@/components/CardList';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import Actions from '@/components/Actions';
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';

const driverObj = driver({
    showProgress: true,
    animate: true,
    steps: [
        {
            element: '#tabs',
            popover: {
                title: 'Tabs',
                description: 'Here you can change tabs'
            }
        },
        {
            element: '#filter',
            popover: {
                title: 'Filter',
                description: 'You can apply multiple filters'
            }
        },
        {
            element: '#check',
            popover: {
                title: 'Select users',
                description: 'You can select users and create your own team!'
            }
        },
        {
            element: '#pagination',
            popover: {
                title: 'Pagination',
                description: 'Navigate through pages from here',
                position: "top"
            }
        },

    ]
});
export default function List() {
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const [currentPage, setCurrentPage] = useState(parseInt(queryParams.get('page')) || 1);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [domains, setDomains] = useState(queryParams.get('domain') ? queryParams.get('domain').split(',') : []);
    const [genders, setGenders] = useState(queryParams.get('gender') ? queryParams.get('gender').split(',') : []);
    const [available, setAvailable] = useState(queryParams.get('available') || '');
    const [nextDisable, setNextDisable] = useState(false)
    const [team, setTeam] = useState([])
    useEffect(() => {
        if (localStorage.getItem('help') == undefined) {
            driverObj.drive();
            localStorage.setItem('help', 'done')
        }
    }, [])
    useEffect(() => {
        setLoading(true);
        const fetchData = async (page) => {
            try {
                const domainQuery = domains.join(',');
                const genderQuery = genders.join(',');
                let url = `https://card-view-backend.vercel.app/api/users?page=${page}&domain=${domainQuery}&gender=${genderQuery}`;
                if (available) {
                    url += `&available=${available}`;
                }
                const res = await axios.get(url);
                if (res.data.pagination.totalUsers < 21) {
                    setNextDisable(true)
                }
                else {
                    setNextDisable(false)
                }
                setUsers(res.data.users);
            } catch (error) {
            } finally {
                setLoading(false);
            }
        };
        fetchData(currentPage);
    }, [currentPage, domains, genders, available]);

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const addToTeam = (_id, domain) => {
        const member = { _id, domain };
        if (team.some(member => member._id === _id)) {
            setTeam(team.filter(member => member._id !== _id));
        } else {
            setTeam([...team, member]);
        }
    }
    return (
        <div className="bg-black min-h-screen w-screen">
            <div className="flex flex-col w-full h-full pb-10">
                <div className="w-full flex  md:px-20 px-5 pb-3 items-end h-28 border-b-2 border-neutral-600">
                    <NavBar />
                    <Actions
                        team={team}
                        domains={domains}
                        setDomains={setDomains}
                        genders={genders}
                        setGenders={setGenders}
                        available={available}
                        setAvailable={setAvailable}
                    />
                </div>
                <div className="w-full py-10 gap-y-10 gap-x-5 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  grid-cols-1 px-10 ">
                    <CardList team={team} addToTeam={addToTeam} setTeam={setTeam} loading={loading} users={users} />
                </div>
                <Pagination>
                    <PaginationContent className='text-background'>
                        <PaginationItem>
                            <PaginationPrevious disabled={currentPage <= 1} onClick={handlePreviousPage} className='hover:bg-secondary-foreground disabled:bg-neutral-500  hover:text-background hover:cursor-pointer' />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext disabled={nextDisable} onClick={handleNextPage} className='hover:bg-secondary-foreground disabled:bg-neutral-500 hover:text-background hover:cursor-pointer' />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    )
}
