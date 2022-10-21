import React from 'react'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Link from 'next/link'

const Pria = () => {
    const promo = true
    var i = 1

    const dataProduct = [
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
        {
            id: 3,
        },
        {
            id: 3,
        },
        {
            id: 3,
        },
    ]

    return (
        <AppLayout
            subTitle={
                <div className="bg-[#FFFFFF] shadow mt-3">
                    <div className="max-w-7xl mx-auto py-0 px-0 shadow">
                        <p className="text-xs py-4 px-4 font-extrabold">
                            <Link
                                href={{
                                    pathname: '/beranda',
                                }}>
                                <a className="underline">GAKUNIQ</a>
                            </Link>
                            <span className="text-sm px-[2.5px] text-[#b9b9b9]">
                                /
                            </span>
                            KATALOG PRODUCT
                        </p>
                    </div>
                </div>
            }
            headerX="TRUE"
            header={
                <div className="flex flex-col">
                    <h1 className="text-2xl text-slate-800 font-bold">
                        KATALOG PRODUCT
                    </h1>
                </div>
            }>
            <div className="bg-[#FFFFFF] shadow">
                <div className="mx-auto py-6 px-2 sm:px-6 lg:px-8 shadow">
                    <div className="flex flex-col flex-wrap items-start">
                        <div className="flex flex-row flex-nowrap items-center">
                            <h3 className="text-lg mx-1">SORT BY</h3>
                            <select className="h-full rounded-lg mx-2">
                                <option className="h-full rounded-lg">
                                    CLICK ME..
                                </option>
                            </select>
                        </div>
                        <div className="flex flex-row flex-wrap mt-5">
                            {dataProduct.map(data => (
                                <div className="card w-auto bg-base-100 shadow-sm m-1">
                                    <figure className="mx-0">
                                        <div className="bg-slate-200 h-36 w-36"></div>
                                    </figure>
                                    <div className="card-body text-white">
                                        <h2 className="card-title">
                                            CELANA LOREM
                                        </h2>
                                        <span className="text-lg overflow-visible"></span>
                                        <span className="text-lg font-bold">
                                            Rp 69.000
                                        </span>
                                        {promo === true ? (
                                            <div className="flex flex-row flex-nowrap items-center">
                                                <div className="badge rounded-[5px] p-3 bg-red-500 border-hidden text-white font-bold">
                                                    69%
                                                </div>
                                                <span className="text-xs font-light line-through mx-2">
                                                    Rp 100.000
                                                </span>
                                            </div>
                                        ) : (
                                            ''
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Head>
                <title>GakUniq - Pria..</title>
            </Head>
        </AppLayout>
    )
}

export default Pria
