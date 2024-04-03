import NavBar from '@/components/NavBar'
import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios'
import CardList from '@/components/CardList';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

export default function List() {
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const [currentPage, setCurrentPage] = useState(parseInt(queryParams.get('page')) || 1);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setLoading(true);
        const fetchData = async (page) => {
            try {
                const res = await axios.get(`https://card-view-backend.vercel.app/api/users?page=${page}`);
                setUsers(res.data.users);
            } catch (error) {

            } finally {
                setLoading(false);
            }
        };
        fetchData(currentPage);
    }, [currentPage]);

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    return (
        <div className="bg-black min-h-screen w-screen">
            <div className="flex flex-col w-full h-full pb-10">
                <div className="w-full flex justify-center pb-3 space-x-16 items-end h-28 border-b-2 border-neutral-600">
                    <NavBar />
                </div>
                <div className="w-full py-10 gap-y-10 gap-x-5 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  grid-cols-1 px-10 ">
                    <CardList loading={loading} users={users} />
                </div>
                <Pagination>
                    <PaginationContent className='text-background'>
                        <PaginationItem>
                            <PaginationPrevious disabled={currentPage <= 1} onClick={handlePreviousPage} className='hover:bg-secondary-foreground disabled:bg-neutral-500  hover:text-background hover:cursor-pointer' />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext onClick={handleNextPage} className='hover:bg-secondary-foreground  hover:text-background hover:cursor-pointer' />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    )
}
