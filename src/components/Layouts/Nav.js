import NavLink from '@/components/NavLink'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import {
    HoverCategoryPria,
    HoverCategoryWanita,
    HoverCategoryAnak,
} from '../common/HoverCategory'
import {
    AiOutlineUser,
    AiOutlineShoppingCart,
    AiOutlineMenu,
} from 'react-icons/ai'
import { GiSelfLove } from 'react-icons/gi'

const Nav = () => {
    const router = useRouter()
    const [dataCategory, setDataCategory] = useState(false)

    const openLeave = () => {
        setDataCategory('')
    }

    return (
        <>
            <nav
                className="bg-white p-0 shadow"
                onMouseEnter={() => {
                    openLeave()
                }}>
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap items-center justify-between px-4 h-[auto] py-[1rem]">
                        <div className="flex flex-row items-center">
                            <div
                                className="flex-shrink-0 flex items-center mr-5"
                                onMouseEnter={() => {
                                    openLeave()
                                }}>
                                <NavLink
                                    href={{
                                        pathname: '/beranda',
                                    }}
                                    active={router.pathname === '/beranda'}>
                                    <Image
                                        src="/logo.png"
                                        width={40}
                                        height={40}
                                    />
                                    <Image
                                        className="hidden"
                                        src="/logo.png"
                                        width={35}
                                        height={35}
                                    />
                                </NavLink>
                            </div>
                            <div className="hidden md:flex flex-row flex-wrap items-center justify-center">
                                <NavLink
                                    href={{
                                        pathname: '/sub-category/wanita',
                                    }}
                                    active={
                                        router.pathname ===
                                        '/sub-category/wanita'
                                    }>
                                    <span
                                        onMouseEnter={() => {
                                            setDataCategory(
                                                HoverCategoryWanita(),
                                            )
                                        }}
                                        className="text-[12px] font-extrabold px-1">
                                        WANITA
                                    </span>
                                </NavLink>
                                <NavLink
                                    href={{
                                        pathname: '/sub-category/pria',
                                    }}
                                    active={
                                        router.pathname === '/sub-category/pria'
                                    }>
                                    <span
                                        onMouseEnter={() => {
                                            setDataCategory(HoverCategoryPria())
                                        }}
                                        className="text-[12px] font-extrabold px-1">
                                        PRIA
                                    </span>
                                </NavLink>
                                <NavLink
                                    href={{
                                        pathname: '/nav-item/cari',
                                    }}
                                    active={
                                        router.pathname === '/nav-item/cari'
                                    }>
                                    <span
                                        onMouseEnter={() => {
                                            setDataCategory(HoverCategoryAnak())
                                        }}
                                        className="text-[12px] font-extrabold px-1">
                                        ANAK
                                    </span>
                                </NavLink>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center">
                            {/* <NavLink
                                href={{
                                    pathname: '/nav-item/cari',
                                }}
                                active={router.pathname === '/nav-item/cari'}>
                                Cari
                            </NavLink> */}
                            {/* form search */}
                            <div className="relative mx-2">
                                <input
                                    type="search"
                                    className="bg-transparent rounded-md w-[300px] h-[40px] pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                    placeholder="Cari Produk"
                                />
                                <div className="absolute top-1/2 left-3 transform -translate-y-1/2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-gray-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            {/* end form search */}
                            <NavLink
                                href={{
                                    pathname: '/akun',
                                }}
                                active={
                                    router.pathname === '/akun' ||
                                    router.pathname === '/akun/voucher' ||
                                    router.pathname === '/akun/topup'
                                }>
                                <AiOutlineUser className="text-2xl" />
                            </NavLink>

                            <NavLink
                                href={{
                                    pathname: '/nav-item/wishlist',
                                }}
                                active={
                                    router.pathname === '/nav-item/wishlist'
                                }>
                                <GiSelfLove className="text-2xl" />
                            </NavLink>
                            <NavLink
                                href={{
                                    pathname: '/nav-item/keranjang',
                                }}
                                active={
                                    router.pathname === '/nav-item/keranjang'
                                }>
                                <AiOutlineShoppingCart className="text-2xl" />
                            </NavLink>
                            <NavLink
                                href={{
                                    pathname: '/menu',
                                }}
                                active={router.pathname === '/menu'}>
                                <AiOutlineMenu className="text-2xl" />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
            <header className="bg-[#FFFFFF] shadow my-1">
                <div className="mx-auto py-0 md:py-0 px-4 sm:px-6 lg:px-8 shadow ">
                    <div className="flex md:hidden flex-row flex-wrap items-center justify-center pt-1">
                        <NavLink
                            href={{
                                pathname: '/sub-category/wanita',
                            }}
                            active={router.pathname === '/sub-category/wanita'}>
                            <span
                                onMouseEnter={() => {
                                    setDataCategory(HoverCategoryWanita())
                                }}
                                className="text-[12px] font-extrabold px-1">
                                WANITA
                            </span>
                        </NavLink>
                        <NavLink
                            href={{
                                pathname: '/sub-category/pria',
                            }}
                            active={router.pathname === '/sub-category/pria'}>
                            <span
                                onMouseEnter={() => {
                                    setDataCategory(HoverCategoryPria())
                                }}
                                className="text-[12px] font-extrabold px-1">
                                PRIA
                            </span>
                        </NavLink>
                        <NavLink
                            href={{
                                pathname: '/nav-item/cari',
                            }}
                            active={router.pathname === '/nav-item/cari'}>
                            <span
                                onMouseEnter={() => {
                                    setDataCategory(HoverCategoryAnak())
                                }}
                                className="text-[12px] font-extrabold px-1">
                                ANAK
                            </span>
                        </NavLink>
                    </div>
                </div>
            </header>
            <div
                className=""
                onMouseLeave={() => {
                    setDataCategory('')
                }}>
                {dataCategory}
            </div>
        </>
    )
}

export default Nav
