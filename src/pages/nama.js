import React, { useEffect, useState } from 'react'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import axios from '@/lib/axios'
import { useAuth } from '@/hooks/auth'

const nama = () => {
    const { user } = useAuth({ middleware: 'auth' })

    const [data, setData] = useState([])

    const fetchName = async () => {
        const { data } = await axios.get('http://localhost:8000/api/nama')
        setData(data.data)
    }

    useEffect(() => {
        fetchName()
    }, [])

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    NAME IS ...
                </h2>
            }>
            <Head>
                <title>Laravel - NAME</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <h1>NAME IS ...</h1>
                            {data.map((item, index) => (
                                <p key={index}>
                                    {item.nama_awal}
                                    {item.nama_akhir}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default nama
