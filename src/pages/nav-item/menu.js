import React from 'react'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'

const Cari = user => {
    const { logout } = useAuth()

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
                        <div className="flex flex-row flex-nowrap items-center justify-center">
                            <a onClick={logout}>LOGOUT</a>
                        </div>
                    ) : (
                        <div className="flex flex-row flex-nowrap items-center justify-center">
                            <Link href="/login">
                                <a>LOGIN</a>
                            </Link>
                            <p className="mx-2"></p>
                            <Link href="/register">
                                <a>REGISTER</a>
                            </Link>
                        </div>
                    )}
                </div>
            }>
            <Head>
                <title>GakUniq - Menu..</title>
            </Head>
        </AppLayout>
    )
}

export default Cari
