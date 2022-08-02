import React from 'react'
import { HashLoader } from 'react-spinners'
export default function Loading() {
    return (
        <div className="h-screen flex justify-center items-center">
            <HashLoader
                color="#d946ef" size={60} />
        </div>
    )
}