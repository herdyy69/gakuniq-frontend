import React, { useEffect, useState } from 'react'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import SwiperVertical from '@/components/swiperJs/swiperVertical'
import SwiperHorizontal from '@/components/swiperJs/swiperHorizontal'
import { References } from '@/components/SectionRefereces/References'
import { CardRow } from '@/components/card/cardRow'

const Beranda = () => {
    return (
        <AppLayout header={''}>
            <Head>
                <title>GakUniq - Beranda</title>
            </Head>

            <div className="flex flex-col shadow overflow-hidden">
                <div>
                    <SwiperVertical />
                </div>
                <div className="flex flex-col mt-4 items-center">
                    <div className="my-0 mx-5">
                        <h1 className="text-2xl text-slate-800">
                            ON FLASH SALE!
                        </h1>
                        <span className="font-mono text-lg">20 oct 2022</span>
                    </div>
                    <div className="px-5 flex items-center mt-[-40px]">
                        <SwiperHorizontal />
                    </div>
                </div>
                <div className="my-6 mx-4 py-4 border-2">
                    <h1 className="text-2xl text-black font-bold mb-3 p-3 rounded-lg glass flex justify-center uppercase mx-2">
                        Berdasarkan referensimu!
                    </h1>
                    <div className="flex flex-row flex-wrap justify-start items-start overflow-hidden">
                        <References />
                        <CardRow />
                    </div>
                </div>
            </div>
            <div className="flex flex-col bg-[#f4f4f4] w-full h-full items-start md:items-center shadow-lg z-10 border-2">
                <div className="px-5 md:px-0 py-4">
                    <h1 className="text-2xl text-slate-800 mx-2 mb-3">
                        INFORMASI
                    </h1>
                    <div className="flex flex-col md:flex-row flex-wrap items-start my-1">
                        <span className="text-sm font-bold mx-2">
                            Kebijakan pengembalian
                        </span>
                        <span className="text-sm font-bold mx-2">
                            Pencari Lokasi Toko
                        </span>
                        <span className="text-sm font-bold mx-2">
                            Pembelian melalui Saluran Resmi
                        </span>
                        <span className="text-sm font-bold mx-2">
                            Sustainability
                        </span>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Beranda
