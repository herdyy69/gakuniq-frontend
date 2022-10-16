import React from 'react'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import Image from 'next/image'

const Menu = () => {
    const { logout } = useAuth()
    const { user, guest } = useAuth({ middleware: 'guest' })

    const category = [
        {
            id: 1,
            title: 'PRIA',
            href: '/',
        },
        {
            id: 2,
            title: 'WANITA',
            href: '/',
        },
        {
            id: 3,
            title: 'ANAK-ANAK',
            href: '/',
        },
    ]

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
                            CARI
                        </p>
                    </div>
                </div>
            }
            header={
                <div className="flex flex-col">
                    {user ? (
                        <>
                            <div className="flex flex-row py-2">
                                <div className="flex-shrink-0 pt-1">
                                    <Image
                                        src="/logo.png"
                                        width={70}
                                        height={70}
                                    />
                                </div>
                                <span className="px-1"></span>
                                <div className="flex flex-col">
                                    <span className="uppercase text-2xl font-bold">
                                        {user.name}
                                    </span>
                                    <span className="uppercase text-xs font-extralight">
                                        {user.email}
                                    </span>
                                    <span className="uppercase">
                                        <Link href="">
                                            <a
                                                className="text-[12.5px] font-bold  rounded-lg bg-slate-200 p-[0.20rem]"
                                                onClick={logout}>
                                                LOGOUT
                                            </a>
                                        </Link>
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-row flex-nowrap items-center justify-center border-t-2">
                                <Link href="/">
                                    <a className="text-[12.5px] font-bold">
                                        KEANGOTAAN
                                    </a>
                                </Link>
                                <p className="mx-5">
                                    <hr className="w-px h-6 border-[1px]" />
                                </p>
                                <Link href="/">
                                    <a className="text-[12.5px] font-bold">
                                        TOKO
                                    </a>
                                </Link>
                            </div>
                        </>
                    ) : (
                        <div className="flex flex-row flex-nowrap items-center justify-center border-t-2">
                            <Link href="/login">
                                <a className="text-[12.5px] font-bold">MASUK</a>
                            </Link>
                            <p className="mx-5">
                                <hr className="w-px h-6 border-[1px]" />
                            </p>
                            <Link href="/404">
                                <a className="text-[12.5px] font-bold">TOKO</a>
                            </Link>
                        </div>
                    )}
                    <hr className="w-full h-0 border-[1px]" />

                    <div className="flex flex-col flex-wrap items-start justify-center">
                        {category.map(data => (
                            <Link href={data.href} key={data.id}>
                                <a className="text-[12.5px] font-normal border-b-2 w-full p-2">
                                    {data.title}
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
            }>
            <Head>
                <title>GakUniq - Menu..</title>
            </Head>
        </AppLayout>
    )
}

export default Menu
