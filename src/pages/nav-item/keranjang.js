import NavLink from '@/components/NavLink'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Select from 'react-select'

const Keranjang = () => {
    const router = useRouter()

    const data = [
        {
            id: 1,
            product_title: 'Costanza Bendelow',
            harga: 10000,
            qty: 1,
            color: 'Goldenrod',
            size: 'M',
            type: 'BFZ',
            image: 'http://dummyimage.com/82x92.png/5fa2dd/ffffff',
        },
        {
            id: 2,
            product_title: 'Costanza Bendelow',
            harga: 20000,
            qty: 3,
            color: 'Goldenrod',
            size: 'M',
            type: 'BFZ',
            image: 'http://dummyimage.com/82x92.png/5fa2dd/ffffff',
        },
    ]

    const totalQty = data.reduce((acc, item) => {
        return acc + item.qty
    }, 0)
    const totalHarga = data.reduce((acc, item) => {
        return acc + item.harga * item.qty
    }, 0)
    const ppn = totalHarga * 0.1
    const totalHargaPpn = totalHarga - ppn

    var onCart = data.length
    return (
        <AppLayout
            title=<h1 className="text-2xl font-bold">KERANJANG BELANJA</h1>
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
            headerX="TRUE"
            header={
                <>
                    <span className="text-sm font-extrabold">
                        {onCart} PRODUK
                    </span>
                    <div className="flex flex-row flex-wrap md:flex-nowrap sm:flex-row">
                        <div className="flex flex-col">
                            {data.map(data => (
                                <div
                                    className="md:w-[50vw] bg-transparent m-1 p-2"
                                    key={data.id}>
                                    <div className="flex flex-row flex-wrap">
                                        <div className="flex bg-black w-[20rem] h-[15rem]"></div>
                                        <div className="flex flex-col mx-5">
                                            <h1 className="text-lg md:text-2xl font-bold">
                                                {data.product_title}
                                                <NavLink
                                                    href={{
                                                        pathname: '/transaksi',
                                                    }}
                                                    active={
                                                        router.pathname ===
                                                        '/transaksi'
                                                    }>
                                                    <span className="text-2xl text-red-600 font-bold">
                                                        X
                                                    </span>
                                                </NavLink>
                                            </h1>
                                            <span className="text-xs md:text-sm font-extralight text-[#7a7a7a]">
                                                KODE 12312321212
                                            </span>
                                            <span className="text-xs md:text-sm font-extralight">
                                                WARNA {data.color}
                                            </span>
                                            <span className="text-xs md:text-sm font-extralight">
                                                UKURAN {data.size}
                                            </span>
                                            <span className="text-xs md:text-sm font-extralight text-[#7a7a7a]">
                                                New, Limited Store
                                            </span>
                                            <h2 className="text-lg font-bold mt-3">
                                                Rp {data.harga}
                                            </h2>
                                            <div className="flex items-center justify-between">
                                                <h1 className="text-sm md:text-lg font-bold">
                                                    JUMLAH
                                                </h1>
                                                <h1 className="text-sm md:text-lg font-bold border-2 px-2">
                                                    {data.qty}
                                                </h1>
                                            </div>
                                            <h2 className="text-lg font-bold mt-3">
                                                SUBTOTAL Rp
                                                {data.harga * data.qty}
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col">
                            <div
                                className="w-[full] bg-transparent m-1 p-2"
                                key={data.id}>
                                <div className="flex flex-col">
                                    <div className="flex flex-col border-2 rounded-lg p-5">
                                        <h1 className="text-lg md:text-lg font-bold">
                                            RINGKASAN PESANAN {totalQty} PRODUCT
                                        </h1>
                                        <div className="flex justify-between my-2">
                                            <span className="text-xs md:text-sm font-extralight text-[#7a7a7a]">
                                                SUBTOTAL PRODUCT
                                            </span>
                                            <span className="text-xs md:text-sm font-extralight text-[#7a7a7a]">
                                                Rp {totalHarga}
                                            </span>
                                        </div>
                                        <div className="flex justify-between my-2">
                                            <h1 className="text-lg md:text-lg font-bold">
                                                SUBTOTAL
                                            </h1>
                                            <h1 className="text-lg md:text-lg font-bold">
                                                Rp {totalHarga}
                                            </h1>
                                        </div>
                                        <div className="flex justify-between my-2">
                                            <span className="text-xs md:text-sm font-extralight text-[#7a7a7a]">
                                                TERMASUK PPN
                                            </span>
                                            <span className="text-xs md:text-sm font-extralight text-[#7a7a7a]">
                                                Rp {ppn}
                                            </span>
                                        </div>
                                        <div className="flex justify-between my-2">
                                            <h1 className="text-lg md:text-lg font-bold">
                                                TOTAL PESANAN
                                            </h1>
                                            <h1 className="text-lg md:text-lg font-bold">
                                                Rp {totalHargaPpn}
                                            </h1>
                                        </div>
                                    </div>

                                    <div className="flex flex-col border-y-2 py-3 mt-5">
                                        <NavLink
                                            href={{
                                                pathname: '/checkout',
                                            }}
                                            active={
                                                router.pathname === '/checkout'
                                            }>
                                            <button className="btn w-full">
                                                LANJUT KE PEMBAYARAN
                                            </button>
                                        </NavLink>
                                        <NavLink
                                            href={{
                                                pathname: '/katalog',
                                            }}
                                            active={
                                                router.pathname === '/katalog'
                                            }>
                                            <button className="btn w-full">
                                                LANJUT BELANJA
                                            </button>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
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
