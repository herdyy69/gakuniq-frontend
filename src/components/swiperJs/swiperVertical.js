import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/bundle'
import SwiperCore, { Mousewheel, Pagination } from 'swiper'

const swiperVertical = () => {
    SwiperCore.use([Mousewheel, Pagination])

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
                        className={'h-full w-full flex items-center px-5'}>
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

export default swiperVertical
