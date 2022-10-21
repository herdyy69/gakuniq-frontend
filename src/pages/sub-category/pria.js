import React from 'react'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const Pria = () => {
    const data = [
        {
            id: 1,
            product_title: 'Costanza Bendelow',
            sub_title: 'Games',
            color: 'Goldenrod',
            size: 'M',
            type: 'BFZ',
            price: 96,
            image: 'http://dummyimage.com/82x92.png/5fa2dd/ffffff',
        },
        {
            id: 2,
            product_title: 'Gaelan Gilardone',
            sub_title: 'Games',
            color: 'Orange',
            size: 'M',
            type: 'WDR',
            price: 35,
            image: 'http://dummyimage.com/90x83.png/dddddd/000000',
        },
        {
            id: 3,
            product_title: 'Rancell Rogan',
            sub_title: 'Health',
            color: 'Violet',
            size: 'M',
            type: 'ATVI',
            price: 59,
            image: 'http://dummyimage.com/93x99.png/5fa2dd/ffffff',
        },
        {
            id: 4,
            product_title: 'Wilek Crallan',
            sub_title: 'Industrial',
            color: 'Goldenrod',
            size: '2XL',
            type: 'AEB',
            price: 41,
            image: 'http://dummyimage.com/85x98.png/5fa2dd/ffffff',
        },
        {
            id: 5,
            product_title: 'Thurstan Eam',
            sub_title: 'Garden',
            color: 'Goldenrod',
            size: '3XL',
            type: 'TGLS',
            price: 17,
            image: 'http://dummyimage.com/100x89.png/ff4444/ffffff',
        },
        {
            id: 6,
            product_title: 'Wallis Pifford',
            sub_title: 'Shoes',
            color: 'Mauv',
            size: '3XL',
            type: 'JAZZ',
            price: 71,
            image: 'http://dummyimage.com/92x94.png/cc0000/ffffff',
        },
        {
            id: 7,
            product_title: 'Stacey Defont',
            sub_title: 'Tools',
            color: 'Maroon',
            size: 'S',
            type: 'PSA^W',
            price: 10,
            image: 'http://dummyimage.com/92x98.png/5fa2dd/ffffff',
        },
        {
            id: 8,
            product_title: 'Emelen Gerraty',
            sub_title: 'Movies',
            color: 'Red',
            size: '3XL',
            type: 'CNCE',
            price: 83,
            image: 'http://dummyimage.com/100x84.png/dddddd/000000',
        },
        {
            id: 9,
            product_title: 'Phil Mazdon',
            sub_title: 'Industrial',
            color: 'Indigo',
            size: 'M',
            type: 'HASI',
            price: 20,
            image: 'http://dummyimage.com/80x86.png/dddddd/000000',
        },
        {
            id: 10,
            product_title: 'Ava Linstead',
            sub_title: 'Electronics',
            color: 'Green',
            size: '2XL',
            type: 'RP',
            price: 45,
            image: 'http://dummyimage.com/86x88.png/5fa2dd/ffffff',
        },
    ]
    var number = data.length

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
                            PRIA
                        </p>
                    </div>
                </div>
            }
            headerX="TRUE"
            header={
                <div className="flex flex-col">
                    <h1 className="text-2xl text-slate-800 font-bold mb-2">
                        MENS
                    </h1>
                    <div className="flex flex-col items-center">
                        <div className="bg-[#f4f4f4] h-80 w-full my-3"></div>
                        <div className="bg-[#f4f4f4] h-48 w-96 my-3"></div>
                    </div>
                </div>
            }>
            <div className="bg-[#FFFFFF] shadow">
                <div className="mx-auto py-6 px-4 sm:px-6 lg:px-8 shadow">
                    <div className="flex flex-col">
                        <div>
                            <h1 className="text-2xl text-slate-800 font-bold mb-2">
                                TOPICS
                            </h1>
                            <div className="flex flex-row items-center">
                                <div className="bg-[#f4f4f4] h-48 w-96 my-3 mx-1"></div>
                                <div className="bg-[#f4f4f4] h-48 w-96 my-3 mx-1"></div>
                                <div className="bg-[#f4f4f4] h-48 w-96 my-3 mx-1"></div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <h1 className="text-2xl text-slate-800 font-bold mb-2">
                                BARU SAJA DILIHAT
                            </h1>
                            <div className="flex flex-row items-center">
                                <div className="bg-[#f4f4f4] h-60 w-48 my-3 mx-1"></div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <h1 className="text-2xl text-slate-800 font-bold mb-2">
                                SEARCH BY CATEGORY
                            </h1>
                            <div className="flex flex-row flex-wrap items-center">
                                <div className="bg-[#f4f4f4] h-48 w-80 my-1 mx-1"></div>
                                <div className="bg-[#f4f4f4] h-48 w-80 my-1 mx-1"></div>
                                <div className="bg-[#f4f4f4] h-48 w-80 my-1 mx-1"></div>
                                <div className="bg-[#f4f4f4] h-48 w-80 my-1 mx-1"></div>
                                <div className="bg-[#f4f4f4] h-48 w-80 my-1 mx-1"></div>
                                <div className="bg-[#f4f4f4] h-48 w-80 my-1 mx-1"></div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <h1 className="text-2xl text-slate-800 font-bold mb-2">
                                NEW ARRIVALS
                            </h1>
                            <div className="flex flex-row flex-wrap md:flex-nowrap items-start">
                                <div className="flex flex-col">
                                    <div className="bg-[#f4f4f4] h-60 w-96 border-2 border-slate-50 mr-5"></div>
                                </div>
                                <div className="flex flex-row flex-wrap items-center">
                                    <div className="bg-[#f4f4f4] h-48 w-80 border-2 border-slate-50"></div>
                                    <div className="bg-[#f4f4f4] h-48 w-80 border-2 border-slate-50"></div>
                                    <div className="bg-[#f4f4f4] h-48 w-80 border-2 border-slate-50"></div>
                                    <div className="bg-[#f4f4f4] h-48 w-80 border-2 border-slate-50"></div>
                                    <div className="bg-[#f4f4f4] h-48 w-80 border-2 border-slate-50"></div>
                                    <div className="bg-[#f4f4f4] h-48 w-80 border-2 border-slate-50"></div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <h1 className="text-2xl text-slate-800 font-bold mb-2">
                                FEATURED NEWS
                            </h1>
                            <div className="flex flex-row flex-nowrap items-start">
                                <div className="flex flex-col flex-wrap mr-2">
                                    <div className="bg-[#f4f4f4] h-40 w-96 border-2 border-slate-50"></div>
                                    <span className="text-sm font-bold">
                                        BLABLABLABLA
                                    </span>
                                    <span className="text-[9px] font-light">
                                        22 OCT 2022
                                    </span>
                                </div>
                                <div className="flex flex-col flex-wrap mr-2">
                                    <div className="bg-[#f4f4f4] h-40 w-40 border-2 border-slate-50"></div>
                                    <span className="text-sm font-bold">
                                        BLABLABLABLA
                                    </span>
                                    <span className="text-[9px] font-light">
                                        22 OCT 2022
                                    </span>
                                </div>
                                <div className="flex flex-col flex-wrap mr-2">
                                    <div className="bg-[#f4f4f4] h-40 w-96 border-2 border-slate-50"></div>
                                    <span className="text-sm font-bold">
                                        BLABLABLABLA
                                    </span>
                                    <span className="text-[9px] font-light">
                                        22 OCT 2022
                                    </span>
                                </div>
                                <div className="flex flex-col flex-wrap mr-2">
                                    <div className="bg-[#f4f4f4] h-40 w-40 border-2 border-slate-50"></div>
                                    <span className="text-sm font-bold">
                                        BLABLABLABLA
                                    </span>
                                    <span className="text-[9px] font-light">
                                        22 OCT 2022
                                    </span>
                                </div>
                            </div>
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
