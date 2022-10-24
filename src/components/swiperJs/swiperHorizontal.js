import React from 'react'
import { CardCol } from '../card/cardCol'
import { Swiper, SwiperSlide } from 'swiper/react'
import { HrefPusher } from '../hrefPusher'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/bundle'
import SwiperCore, { Mousewheel, Pagination } from 'swiper'

const SwiperHorizontal = () => {
    SwiperCore.use([Mousewheel, Pagination])

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

    return (
        <Swiper
            direction={'horizontal'}
            slidesPerView={5}
            spaceBetween={1}
            mousewheel={{
                forceToAxis: true,
                releaseOnEdges: true,
                sensitivity: 1,
            }}
            className="mySwiper swiper2">
            {dataFlashSales.map(data => (
                <SwiperSlide key={data.id}>
                    <CardCol>
                        <div className="inline-flex flex-col items-start justify-start p-3">
                            <div className="">
                                <img
                                    src="/logo.png"
                                    alt="logo"
                                    className="w-[100px] "
                                />
                            </div>
                            <div className="font-bold text-base mt-1 text-slate-800">
                                {data.title}
                            </div>
                            <p className="text-gray-700 text-sm">{data.desc}</p>
                            <span className="text-lg font-bold">
                                Rp {data.harga}
                            </span>
                            <div className="flex flex-row flex-nowrap items-center">
                                <div className="badge rounded-[5px] p-3 bg-red-500 border-hidden text-white font-bold">
                                    {data.discount}%
                                </div>
                                <span className="text-xs font-light line-through mx-2">
                                    Rp {data.hargaDiscount}
                                </span>
                            </div>
                            <div className="flex flex-row">
                                <button className="bg-red-500 hover:bg-red-700 text-white text-sm font-bold px-2 rounded-sm mt-3">
                                    ADD TO CART
                                </button>
                                <HrefPusher>DETAIL</HrefPusher>
                            </div>
                        </div>
                    </CardCol>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default SwiperHorizontal
