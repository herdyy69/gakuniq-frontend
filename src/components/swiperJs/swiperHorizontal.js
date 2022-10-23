import React from 'react'
import { CardRow } from '../card/cardRow'
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
    ]

    return (
        <Swiper
            direction={'horizontal'}
            slidesPerView={2}
            spaceBetween={-50}
            mousewheel={{
                forceToAxis: true,
                releaseOnEdges: true,
                sensitivity: 1,
            }}
            className="mySwiper swiper2">
            {dataFlashSales.map(data => (
                <SwiperSlide key={data.id}>
                    <CardRow>
                        <div className="flex flex-row items-center">
                            <div className="flex justify-center">
                                <img
                                    src="/logo.png"
                                    alt="logo"
                                    className="max-w-[150px] max-h-[125px] "
                                />
                            </div>
                            <div className="px-4 py-4">
                                <div className="font-bold text-xl mb-2">
                                    {data.title}
                                </div>
                                <p className="text-gray-700 text-base">
                                    {data.desc}
                                </p>
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
                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-sm mt-3">
                                        ADD TO CART
                                    </button>
                                    <HrefPusher>DETAIL</HrefPusher>
                                </div>
                            </div>
                        </div>
                    </CardRow>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default SwiperHorizontal
