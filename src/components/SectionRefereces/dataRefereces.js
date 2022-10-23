import React from 'react'
import { CardCol } from '@/components/card/cardCol'

export const DataRefereces = Props => {
    const [data, setData] = React.useState()
    const dataHover = () => {
        return (
            <div className="pt-3">
                <div className="px-0 py-0">
                    <p className="text-gray-700 text-base">{Props.desc}</p>
                </div>
                <div className="px-0 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #lorem
                    </span>
                </div>
            </div>
        )
    }

    function handleMouseEnter() {
        setData(dataHover())
    }
    function handleMouseOut() {
        setData('')
    }
    return (
        <div className="flex flex-col mx-0 my-2">
            <CardCol>
                <div onMouseEnter={handleMouseEnter} onClick={handleMouseOut}>
                    <div className="flex justify-center">
                        <img
                            src="/logo.png"
                            alt="logo"
                            className="w-[150px] "
                        />
                    </div>
                    <div className="px-4 py-4">
                        <div className="font-bold text-xl mb-2">
                            {Props.title}
                        </div>
                    </div>
                </div>
            </CardCol>
            <div
                id={Props.id}
                className="rounded-lg border-b-2 px-0  max-w-[13rem]"
                onMouseLeave={handleMouseOut}>
                {data}
            </div>
        </div>
    )
}
;``
