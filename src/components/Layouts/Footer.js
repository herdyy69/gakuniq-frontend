import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-[#f1f1f1] p-0 shadow">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col flex-wrap items-start md:items-center px-5 h-[auto] py-[1rem]">
                    <div className="flex flex-col md:flex-row flex-nowrap items-start">
                        <div className="flex flex-col mx-3">
                            <h1 className="text-sm md:text-lg font-extrabold mb-2">
                                TENTANG GAKUNIQ
                            </h1>
                            <div className="hidden md:flex flex-col">
                                <span className="text-sm py-1">Informasi</span>
                                <span className="text-sm py-1">
                                    Pencari Lokasi Toko
                                </span>
                                <span className="text-sm py-1">
                                    Pembelian Jumlah Besar
                                </span>
                                <span className="text-sm py-1">
                                    Layanan Alterasi
                                </span>
                                <span className="text-sm py-1">
                                    Layanan Kirim Kado
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col mx-3">
                            <h1 className="text-sm md:text-lg font-extrabold mb-2">
                                BANTUAN
                            </h1>
                            <div className="hidden md:flex flex-col">
                                <span className="text-sm py-1">FAQ</span>
                                <span className="text-sm py-1">
                                    Kebijakan Pengembalian
                                </span>
                                <span className="text-sm py-1">
                                    Kebijakan Privasi
                                </span>
                                <span className="text-sm py-1">
                                    Aksebilitas
                                </span>
                                <span className="text-sm py-1">
                                    Hubungi Kami
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col mx-3">
                            <h1 className="text-sm md:text-lg font-extrabold mb-2">
                                AKUN
                            </h1>
                            <div className="hidden md:flex flex-col">
                                <span className="text-sm py-1">Membership</span>
                                <span className="text-sm py-1">Profil</span>
                                <span className="text-sm py-1">
                                    Kebijakan Privasi
                                </span>
                                <span className="text-sm py-1">Voucher</span>
                            </div>
                        </div>
                        <div className="flex flex-col mx-3">
                            <h1 className="text-sm md:text-lg font-extrabold mb-2">
                                HUBUNGI KAMI
                            </h1>
                            <div className="hidden md:flex flex-col">
                                <span className="text-sm py-1">
                                    Untuk Layanan Pengaduan
                                </span>
                                <span className="text-sm py-1">
                                    Konsumen UNIQLO Indonesia
                                </span>
                                <span className="text-sm py-1 w-48">
                                    (001) 80332160290 dan
                                    customersupport@uniqlo.co.id
                                </span>
                                <span className="text-sm py-1">
                                    <hr className="w-full border-slate-400 my-2" />
                                </span>
                                <span className="text-sm py-1">
                                    Layanan Pengaduan Konsumen,
                                </span>
                                <span className="text-sm py-1 w-48">
                                    Direktorat Jenderal Perlindungan Konsumen
                                    dan Tertib Niaga,
                                </span>
                                <span className="text-sm py-1 w-48">
                                    Kementerian Perdagangan Republik Indonesia,
                                </span>
                                <span className="text-sm py-1">
                                    0853-1111-1010 (WhatsApp)
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col mx-3">
                            <h1 className="text-sm md:text-lg font-extrabold mb-2">
                                AKUN SOSIAL GAKUNIQ
                            </h1>
                            <div className="flex flex-row">
                                <span className="text-xs md:text-sm py-1 mr-1">
                                    FACEBOOK
                                </span>
                                <span className="text-xs md:text-sm py-1 mr-1">
                                    TWITTER
                                </span>
                                <span className="text-xs md:text-sm py-1 mr-1">
                                    INSTAGRAM
                                </span>
                                <span className="text-xs md:text-sm py-1 mr-1">
                                    YOUTUBER
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col flex-wrap items-center justify-center w-full">
                        <hr className="w-full border-slate-400" />
                        <span className="text-xs text-slate-600 font-light mt-2">
                            Hak Cipta ?? UNIQLO Co., Ltd. Semua hak dilindungi
                            undang-undang.
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
