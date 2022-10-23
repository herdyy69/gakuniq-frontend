import React from 'react'
import { useRouter } from 'next/router'

export const HrefPusher = ({ children, Props }) => {
    const router = useRouter()
    const { pathname } = router

    const handlePush = e => {
        e.preventDefault()
        router.push(e.target.href)
    }

    return (
        <a
            href={pathname}
            onClick={handlePush}
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-sm shadow mt-3 ml-3">
            {children}
        </a>
    )
}
