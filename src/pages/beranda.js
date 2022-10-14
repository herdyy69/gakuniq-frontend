import React from 'react'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'

const Beranda = () => {
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    NAME IS ...
                </h2>
            }>
            <Head>
                <title>GakUniq - Beranda</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <h1>NAME IS ...</h1>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Beranda
