import React from 'react'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const Keranjang = () => {
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
            title="KERANJANG BELANJA"
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
                            KERANJANG
                        </p>
                    </div>
                </div>
            }
            header={
                <>
                    <span className="text-sm font-extrabold">
                        {number} PRODUK
                    </span>
                    <div className="flex flex-wrap flex-col sm:flex-row">
                        {data.map(data => (
                            <div
                                className="flex w-4/5 sm:w-auto bg-slate-300 m-1 p-2"
                                key={data.id}>
                                <div className="flex flex-col sm:flex-row items-center">
                                    <div className="flex-shrink-0 flex">
                                        <Image
                                            src="/logo.png"
                                            width={70}
                                            height={70}
                                        />
                                    </div>
                                    <span className="mx-1 "></span>
                                    <div className="flex flex-col overflow-clip z-10">
                                        <span className="text-[9px] font-extrabold flex ">
                                            {data.product_title}
                                        </span>
                                        <span className="text-[8.5px] font-extralight">
                                            {data.sub_title}
                                        </span>
                                        <span className="text-[8.5px] font-bold">
                                            Warna : {data.color}
                                        </span>
                                        <span className="text-[6.5px] font-bold">
                                            UKURAN : {data.type}
                                        </span>
                                        <span className="text-[6px] font-extralight">
                                            NEW
                                        </span>
                                        <span className="text-[9px] font-extrabold flex ">
                                            Rp. {data.price}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            }>
            <Head>
                <title>GakUniq - Keranjang..</title>
            </Head>
        </AppLayout>
    )
}

export default Keranjang
