import Link from 'next/link'
import NavLink from '@/components/NavLink'
import { useAuth } from '@/hooks/auth'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import NavSearch from '../common/NavSearch'

const Nav = ({ user }) => {
    const router = useRouter()
    const { logout } = useAuth()

    return (
        <>
            <nav className="bg-white border-b border-gray-100 p-0 shadow">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap items-center justify-around h-[auto] py-[1rem]">
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/beranda">
                                <a>
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
                                </a>
                            </Link>
                        </div>
                        <div className="flex flex-wrap items-center">
                            <NavLink
                                href={{
                                    pathname: '/nav-item/cari',
                                }}
                                active={router.pathname === 'nav-item/cari'}>
                                Cari
                            </NavLink>
                            <NavLink
                                href={{
                                    pathname: '/nav-item/wishlist',
                                }}
                                active={
                                    router.pathname === 'nav-item/wishlist'
                                }>
                                Wishlist
                            </NavLink>
                            <NavLink
                                href={{
                                    pathname: '/nav-item/keranjang',
                                }}
                                active={router.pathname === '/keranjang'}>
                                Keranjang
                            </NavLink>
                            <NavLink
                                href={{
                                    pathname: '/nav-item/menu',
                                }}
                                active={router.pathname === '/menu'}>
                                Menu
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav
