import NavLink from '@/components/NavLink'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Select from 'react-select'

const Checkout = props => {
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
            harga: 10000,
            qty: 1,
            color: 'Goldenrod',
            size: 'M',
            type: 'BFZ',
            image: 'http://dummyimage.com/82x92.png/5fa2dd/ffffff',
        },
    ]

    var onCart = data.length

    const [value, setValue] = useState('GAKUNIQ WALLET')
    const [voucher, setVoucher] = useState('NO VOUCHER')

    const voucherOptions = [
        { value: 'NO VOUCHER', label: 'NO VOUCHER', discount: 0 },
        { value: 'GAKUNIQ10', label: 'GAKUNIQ10', discount: 10 },
        { value: 'GAKUNIQ20', label: 'GAKUNIQ20', discount: 20 },
        { value: 'GAKUNIQ30', label: 'GAKUNIQ30', discount: 30 },
    ]

    const totalQty = data.reduce((acc, item) => {
        return acc + item.qty
    }, 0)
    const totalHarga = data.reduce((acc, item) => {
        return acc + item.harga * item.qty
    }, 0)
    const ppn = (10 / 100) * totalHarga
    const totalHargaPpn = totalHarga - ppn

    const discount =
        (voucherOptions.find(x => x.value === voucher).discount / 100) *
        totalHargaPpn

    const discountX = voucherOptions.find(x => x.value === voucher).discount

    const allPrice = totalHargaPpn - discount

    console.log(value)
    console.log(voucher)

    const [allValue, setAllValue] = useState()

    const allData = {
        value,
        voucher,
        totalQty,
        totalHarga,
        ppn,
        totalHargaPpn,
        discount,
        discountX,
        allPrice,
    }

    const handleCheckout = () => {
        router.push({
            pathname: '/checkout/confirm',
            query: allData,
        })
    }

    return (
        <AppLayout
            title=<h1 className="text-2xl font-bold">PEMBAYARAN</h1>
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
                        <div className="flex flex-col border-2">
                            <div className="md:w-[50vw] bg-transparent m-0 p-2">
                                <div className="flex flex-row">
                                    <div className="flex flex-col py-2 border-y-2 w-full">
                                        <h1 className="text-sm md:text-lg font-bold mb-3">
                                            ALAMAT PENGIRIMAN
                                        </h1>
                                        <span className="text-sm font-thin">
                                            NAMA NULL
                                        </span>
                                        <span className="text-sm font-thin w-[50%]">
                                            sasaassssssssss, aaaaaaa, Lampung,
                                            Kab. Lampung Barat 40376 22222222 /
                                            2222222222222
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-col my-2">
                                    <div className="flex flex-col py-2 border-y-2 w-full">
                                        <h1 className="text-sm md:text-lg font-bold mb-3">
                                            PEMBAYARAN
                                        </h1>
                                        <select
                                            value={value}
                                            onChange={e => {
                                                setValue(e.target.value)
                                            }}>
                                            <option value="GAKUNIQ WALLET">
                                                GAKUNIQ WALLET
                                            </option>
                                            <option value="OTHER E-WALLET">
                                                OTHER E-WALLET
                                            </option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col py-2 border-b-2 w-full">
                                        <h1 className="text-sm md:text-lg font-bold mb-3">
                                            VOUCHER
                                        </h1>
                                        <select
                                            value={voucher}
                                            onChange={e => {
                                                setVoucher(e.target.value)
                                            }}>
                                            {voucherOptions.map(
                                                voucherOption => (
                                                    <option
                                                        discount={
                                                            voucherOption.discount
                                                        }
                                                        value={
                                                            voucherOption.value
                                                        }>
                                                        {voucherOption.label}
                                                    </option>
                                                ),
                                            )}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="md:w-[50vw] bg-transparent m-0 p-2 "
                                key={data.id}>
                                <div className="flex flex-col">
                                    <div className="flex flex-col border-2 p-5 w-full">
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
                                            <span className="text-xs md:text-sm font-extralight text-[#7a7a7a]">
                                                DISCOUNT {discountX}%
                                            </span>
                                            <span className="text-xs md:text-sm font-extralight text-[#7a7a7a]">
                                                Rp {discount}
                                            </span>
                                        </div>
                                        <div className="flex justify-between my-2">
                                            <h1 className="text-lg md:text-lg font-bold">
                                                TOTAL PESANAN
                                            </h1>
                                            <h1 className="text-lg md:text-lg font-bold">
                                                Rp {allPrice}
                                            </h1>
                                        </div>
                                    </div>

                                    <div className="flex flex-col border-y-2 py-3 mt-5">
                                        <button
                                            className="bg-[#ff5a5f] text-white font-bold py-2 px-4 rounded-full"
                                            onClick={() => {
                                                handleCheckout()
                                            }}>
                                            KONFIRMASI
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col"></div>
                    </div>
                </>
            }>
            <Head>
                <title>GakUniq - Keranjang..</title>
            </Head>
        </AppLayout>
    )
}

export default Checkout
