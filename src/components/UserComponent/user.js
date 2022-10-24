import React, { useState, useEffect } from 'react'
import AppLayout from '../Layouts/AppLayout'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import NavLink from '@/components/NavLink'

const User = ({ children }) => {
    const [headers, setHeader] = useState()

    const dataHeader = () => {
        return (
            <div className="flex flex-row flex-wrap items-start justify-center">
                <div className="flex mx-2">
                    <div className="bg-transparent min-w-[20rem] my-2 min-h-[20rem] rounded-md border-[2px] shadow-lg py-2">
                        <div className="flex flex-row items-center px-4 mt-5">
                            <img
                                src="/logo.png"
                                alt=""
                                className="max-w-[70px] rounded-[100%]"
                            />
                            <div className="flex flex-col ml-2">
                                <span className="text-sm font-bold ml-2">
                                    GAKUNIQ NAME NULL
                                </span>
                                <a className="text-sm font-bold ml-2 glass rounded-lg text-center p-[1px] bg-red-600 hover:bg-red-800 text-white">
                                    Logout
                                </a>
                            </div>
                        </div>
                        <hr className="border-[1px] border-[#f4f4f4] mt-5" />

                        <div className="mt-4">
                            <div className="flex flex-row justify-between px-4 py-1">
                                <span className="text-sm font-bold">POINT</span>
                                <span className="text-sm font-bold">0</span>
                            </div>
                            <div className="flex flex-row justify-between px-4 py-1">
                                <span className="text-xs font-bold">
                                    GAKUNIQ WALLET
                                </span>
                                <span className="text-sm">Rp 0</span>
                            </div>
                            <div className="flex flex-col items-center mx-2 p-2 py-1 border-2 rounded-lg">
                                <span className="text-xs font-bold">
                                    VOUCHER
                                </span>
                                <div className="border-2 rounded-sm p-1 w-full my-1">
                                    <div className="flex flex-col items-center">
                                        <span className="text-sm font-bold">
                                            GKUNQ 10
                                        </span>
                                    </div>
                                </div>
                                <div className="border-2 rounded-sm p-1 w-full my-1">
                                    <div className="flex flex-col items-center">
                                        <span className="text-sm font-bold">
                                            GKUNQ 10
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex mx-2">
                    <div className="bg-transparent min-w-[20rem] my-2 max-h-[auto] rounded-md border-[2px] shadow-lg py-2">
                        <div className="flex flex-col md:flex-row items-center px-4 mt-1">
                            <NavLink
                                href={{
                                    pathname: '/akun',
                                }}
                                active={router.pathname === '/akun'}>
                                <span className="text-[12px] font-extrabold px-1">
                                    PENGATURAN AKUN
                                </span>
                            </NavLink>
                            <NavLink
                                href={{
                                    pathname: '/akun/topup',
                                }}
                                active={router.pathname === '/akun/topup'}>
                                <span className="text-[12px] font-extrabold px-1">
                                    TOP UP
                                </span>
                            </NavLink>
                            <NavLink
                                href={{
                                    pathname: '/akun/voucher',
                                }}
                                active={router.pathname === '/akun/voucher'}>
                                <span className="text-[12px] font-extrabold px-1">
                                    VOUCHER
                                </span>
                            </NavLink>
                            <NavLink
                                href={{
                                    pathname: '/akun/history',
                                }}
                                active={router.pathname === '/akun/history'}>
                                <span className="text-[12px] font-extrabold px-1">
                                    RIWAYAT PEMESANAN
                                </span>
                            </NavLink>
                        </div>
                        <hr className="border-[1px] border-[#f4f4f4] mt-3" />
                        {children}
                    </div>
                </div>

                <div className="flex mx-2">
                    <div className="bg-transparent min-w-[20rem] my-2 min-h-[50vh] rounded-md border-[2px] shadow-lg py-2">
                        <div className="flex flex-col items-center px-4 mt-1">
                            <h1 className="text-lg font-extrabold px-1 mb-1">
                                NOTIFICATION
                            </h1>
                            <span className="p-3 border-2 rounded-md w-full">
                                <span className="text-sm font-extrabold px-1">
                                    Belum ada notifikasi...
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    var login = false

    useEffect(() => {
        if (login) {
            router.push('/login')
        } else {
            setHeader(dataHeader())
        }
    }, [login])

    const router = useRouter()
    return (
        <AppLayout
            subTitle={
                <div className="bg-[#FFFFFF] shadow mt-3">
                    <div className="max-w-7xl mx-auto py-0 px-0 shadow">
                        <p className="text-xs py-4 px-4 font-extrabold">
                            <Link
                                href={{
                                    pathname: '/member/user',
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
            header={<div>{headers}</div>}>
            <Head>
                <title>GakUniq - User..</title>
            </Head>
        </AppLayout>
    )
}

export default User
