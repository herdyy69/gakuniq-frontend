import React from 'react'
import User from '@/components/UserComponent/user'
import Input from '@/components/Input'

const Voucher = () => {
    const [voucher, setVoucher] = React.useState('')

    const dataVoucher = [
        {
            id: 1,
            voucher: 'GAKUNIQ10',
            nominal: 10000,
            expired: '2021-12-31',
        },
        {
            id: 2,
            voucher: 'GAKUNIQ20',
            nominal: 20000,
            expired: '2021-12-31',
        },
    ]

    return (
        <User>
            <div>
                <div className="p-2 m-0 max-w-[full] overflow-hidden">
                    <div className="flex flex-col items-start px-0 mt-1">
                        <h1 className="text-lg font-extrabold px-1 mb-1">
                            VOUCHER SAYA
                        </h1>
                        {dataVoucher.map(item => (
                            <span className="p-3 border-2 rounded-md w-full my-1">
                                <div className="flex flex-row items-center justify-between">
                                    <div className="flex flex-col items-start">
                                        <span className="text-xs font-bold">
                                            {item.voucher}
                                        </span>
                                        <span className="text-xs font-bold">
                                            Rp {item.nominal}
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className="text-xs font-bold">
                                            {item.expired}
                                        </span>
                                        <span className="text-xs font-bold">
                                            Expired
                                        </span>
                                    </div>
                                </div>
                            </span>
                        ))}
                    </div>
                    <hr className="border-[1px] border-[#f4f4f4] my-3" />
                    <div className="flex flex-col items-start px-0 mt-1">
                        <h1 className="text-lg font-extrabold px-1 mb-1">
                            FREE VOUCHER
                        </h1>
                        {dataVoucher.map(item => (
                            <span className="p-3 border-2 rounded-md w-full my-1">
                                <div className="flex flex-row items-center justify-between">
                                    <div className="flex flex-col items-start">
                                        <span className="text-xs font-bold">
                                            {item.voucher}
                                        </span>
                                        <span className="text-xs font-bold">
                                            Rp {item.nominal}
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className="text-xs font-bold">
                                            {item.expired}
                                        </span>
                                        <span className="text-xs font-bold">
                                            Expired
                                        </span>
                                    </div>
                                </div>
                            </span>
                        ))}
                    </div>
                    <hr className="border-[1px] border-[#f4f4f4] my-3" />
                    <div className="flex flex-col items-start px-0 mt-1">
                        <h1 className="text-lg font-extrabold px-1 mb-1">
                            BUY VOUCHER
                        </h1>
                        {dataVoucher.map(item => (
                            <span className="p-3 border-2 rounded-md w-full my-1">
                                <div className="flex flex-row items-center justify-between">
                                    <div className="flex flex-col items-start">
                                        <span className="text-xs font-bold">
                                            {item.voucher}
                                        </span>
                                        <span className="text-xs font-bold">
                                            Rp {item.nominal}
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className="text-xs font-bold">
                                            Rp 5.000
                                        </span>
                                        <span className="text-xs font-bold">
                                            <button className="bg-[#f4f4f4] text-[#000] rounded-md px-2 py-1 text-xs font-bold">
                                                Buy
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </User>
    )
}

export default Voucher
