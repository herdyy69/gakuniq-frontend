import React, { useEffect, useState } from 'react'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/bundle'
import SwiperCore, { Mousewheel, Pagination } from 'swiper'
SwiperCore.use([Mousewheel, Pagination])

const Beranda = props => {
    const [swiper, setSwiper] = useState()
    const [swiper2, setSwiper2] = useState()

    const dataCarousel = [
        {
            id: 1,
            title: 'NEW SEASON NEW STYLE',
            desc: 'JANGAN LEWATKAN KOLEKSI SEASON MUSIM DINGIN KAMI!',
            background: '#737373',
            href: '#',
        },
        {
            id: 2,
            title: 'NEW YEAR NEW OUTFIT',
            desc: 'blablablablabla',
            background: '#525252',
            href: '#',
        },
    ]

    const dataFlashSales = [
        {
            id: 1,
            title: 'NEW SEASON NEW STYLE',
            desc: 'JANGAN LEWATKAN KOLEKSI SEASON MUSIM DINGIN KAMI!',
            harga: 20000,
            discount: 10,
            hargaDiscount: 5000,
            image: '#737373',
            href: '#',
        },
        {
            id: 2,
            title: 'NEW SEASON NEW STYLE',
            desc: 'JANGAN LEWATKAN KOLEKSI SEASON MUSIM DINGIN KAMI!',
            harga: 20000,
            discount: 10,
            hargaDiscount: 5000,
            image: '#737373',
            href: '#',
        },
        {
            id: 3,
            title: 'NEW SEASON NEW STYLE',
            desc: 'JANGAN LEWATKAN KOLEKSI SEASON MUSIM DINGIN KAMI!',
            harga: 20000,
            discount: 10,
            hargaDiscount: 5000,
            image: '#737373',
            href: '#',
        },
    ]

    useEffect(() => {
        const swiperVertical = () => {
            return (
                <Swiper
                    direction={'vertical'}
                    slidesPerView={1}
                    spaceBetween={30}
                    mousewheel={{
                        forceToAxis: true,
                        releaseOnEdges: true,
                        sensitivity: 1,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    className="mySwiper">
                    {dataCarousel.map(data => (
                        <SwiperSlide key={data.id}>
                            <div
                                style={{ background: data.background }}
                                className={
                                    'h-full w-full flex items-center px-5'
                                }>
                                <div className="flex flex-col flex-nowrap items-start">
                                    <h1 className="text-lg md:text-2xl text-slate-200 font-extrabold">
                                        {data.title}
                                    </h1>
                                    <span className="text-[10.5px] md:text-lg text-slate-200 py-3">
                                        {data.desc}
                                    </span>
                                    <button className="text-xs md:text-sm p-3 bg-slate-200 rounded-lg">
                                        Selengkapnya..
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )
        }
        setSwiper(swiperVertical())
    }, [])

    useEffect(() => {
        const onFlashsaleSwiper = () => {
            return (
                <Swiper
                    direction={'horizontal'}
                    slidesPerView={2}
                    spaceBetween={10}
                    mousewheel={{
                        forceToAxis: true,
                        releaseOnEdges: true,
                        sensitivity: 1,
                    }}
                    className="mySwiper swiper2">
                    {dataFlashSales.map(data => (
                        <SwiperSlide key={data.id}>
                            <div className="card card-side w-full h-full bg-[#404040] border-slate-800 shadow-xl">
                                <figure>
                                    <div className="bg-slate-800 w-64 h-80 items-center justify-center"></div>
                                </figure>
                                <div className="card-body text-white">
                                    <h2 className="card-title">{data.title}</h2>
                                    <span className="text-lg overflow-visible">
                                        {data.desc}{' '}
                                    </span>
                                    <span className="text-lg font-bold">
                                        Rp {data.harga}
                                    </span>
                                    <div className="flex flex-row flex-nowrap items-center">
                                        <div className="badge rounded-[5px] p-3 bg-red-500 border-hidden text-white font-bold">
                                            {data.discount}%
                                        </div>
                                        <span className="text-xs font-light line-through mx-2">
                                            Rp {data.hargaDiscount}{' '}
                                        </span>
                                    </div>
                                    <p></p>
                                    <div className="card-actions justify-start">
                                        <button className="btn bg-red-700 border-none text-white">
                                            BUY NOW!
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )
        }
        setSwiper2(onFlashsaleSwiper())
    }, [])

    return (
        <AppLayout header={''}>
            <Head>
                <title>GakUniq - Beranda</title>
            </Head>

            <div className="flex flex-col shadow">
                <div>{swiper}</div>
                <div className="flex flex-col my-6">
                    <div className="my-3 mx-5">
                        <h1 className="text-2xl text-slate-800">
                            ON FLASH SALE!
                        </h1>
                        <span className="font-mono text-lg">20 oct 2022</span>
                    </div>
                    <div className="px-5 flex items-center">{swiper2}</div>
                </div>
                <div className="flex flex-col my-6">
                    <div className="my-0 mx-5">
                        <h1 className="text-2xl text-slate-800">
                            Berdasarkan referensimu!
                        </h1>
                    </div>
                    <div className="px-5 flex items-center">
                        <Swiper
                            direction={'horizontal'}
                            slidesPerView={2}
                            spaceBetween={5}
                            mousewheel={{
                                forceToAxis: true,
                                releaseOnEdges: true,
                                sensitivity: 1,
                            }}
                            className="mySwiper swiper3">
                            <SwiperSlide>
                                <div className="card w-full bg-base-100 shadow-sm">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src="https://placeimg.com/400/225/arch"
                                            alt="Shoes"
                                            className="rounded-xl"
                                        />
                                    </figure>
                                    <div className="card-body items-start text-start text-white">
                                        <h2 className="card-title">Shoes!</h2>
                                        <p>
                                            If a dog chews shoes whose shoes
                                            does he choose?
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card w-full bg-base-100 shadow-sm">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src="https://placeimg.com/400/225/arch"
                                            alt="Shoes"
                                            className="rounded-xl"
                                        />
                                    </figure>
                                    <div className="card-body items-start text-start text-white">
                                        <h2 className="card-title">Shoes!</h2>
                                        <p>
                                            If a dog chews shoes whose shoes
                                            does he choose?
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card w-full bg-base-100 shadow-sm">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src="https://placeimg.com/400/225/arch"
                                            alt="Shoes"
                                            className="rounded-xl"
                                        />
                                    </figure>
                                    <div className="card-body items-start text-start text-white">
                                        <h2 className="card-title">Shoes!</h2>
                                        <p>
                                            If a dog chews shoes whose shoes
                                            does he choose?
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
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
