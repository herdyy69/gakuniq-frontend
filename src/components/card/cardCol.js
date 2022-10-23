import React from 'react'
const css = { maxWidth: '100%', height: 'auto' }

export const CardCol = ({ children }) => {
    return (
        <div className="max-w-[15rem] rounded overflow-hidden shadow-lg flex flex-col border-[1px] glass p-1 m-1">
            {children}
        </div>
    )
}
