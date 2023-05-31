"use client"
import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';


const Rooms = () => {
    const [activeButton, setActiveButton] = useState(null as any)
    const open = () => {
        console.log("Buton invoked!")
    }
    return (
        <div className="relative h-screen">
        <div
            style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/006/325/236/original/poker-table-green-cloth-on-dark-background-illustration-free-vector.jpg')" }}
            className="absolute inset-0 bg-cover bg-center"
        />
        <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute top-16 left-12 z-999">
            <Link href="/dashboard" className='rounded-xl z-999 text-2xl text-gray-100 bg-red-600 bg-opacity-80 py-3 px-7'>Garah</Link>
        </div>
            <button onClick={() => setActiveButton(1)} className={`${activeButton === 1 ? "bg-green-700" : "bg-gray-600"} bg-opacity-50 border-2 border-gray-800 rounded-full px-10 text-2xl hover:bg-green-700 hover:bg-opacity-70 py-5 absolute transform -translate-x-1/3 -ml-96 translate-y-1/2 top-32`}>{activeButton === 1 ? "Username" : "Suuh"}</button>
            <button onClick={() => setActiveButton(2)} className={`${activeButton === 2 ? "bg-green-700" : "bg-gray-600"}  bg-opacity-50 border-2 border-gray-800 rounded-full px-10 text-2xl hover:bg-green-700 hover:bg-opacity-70 py-5 absolute transform translate-x-1/2 -mr-72 translate-y-1/2 top-32`}>{activeButton === 2 ? "Username" : "Suuh"}</button>
            <button onClick={() => setActiveButton(3)} className={`${activeButton === 3 ? "bg-green-700" : "bg-gray-600"} bg-opacity-50 border-2 border-gray-800 rounded-full px-10 text-2xl hover:bg-green-700 hover:bg-opacity-70 py-5 absolute transform -translate-x-1/2 mb-64 mr-80 translate-y-1/2 bottom-0`}>{activeButton === 3 ? "Username" : "Suuh"}</button>
            <button onClick={() => setActiveButton(4)} className={`${activeButton === 4 ? "bg-green-700" : "bg-gray-600"}  bg-opacity-50 border-2 border-gray-800 rounded-full px-10 text-2xl hover:bg-green-700 hover:bg-opacity-70 py-5 absolute transform translate-x-1/2 mb-64 -mr-72 translate-y-1/2 bottom-0`}>{activeButton === 4 ? "Username" : "Suuh"}</button>
            <button onClick={() => setActiveButton(5)} className={`${activeButton === 5 ? "bg-green-700" : "bg-gray-600"}  bg-opacity-50 border-2 border-gray-800 rounded-full px-10 text-2xl hover:bg-green-700 hover:bg-opacity-70 py-5 absolute transform -translate-x-1/2 translate-y-1/2 -mt-72 ml-80 left-0`}>{activeButton === 5 ? "Username" : "Suuh"}</button>
            <button onClick={() => setActiveButton(6)} className={`${activeButton === 6 ? "bg-green-700" : "bg-gray-600"}  bg-opacity-50 border-2 border-gray-800 rounded-full px-10 text-2xl hover:bg-green-700 hover:bg-opacity-70 py-5 absolute transform translate-x-1/2 -translate-y-1/2 mt-64 ml-48 left-0`}>{activeButton === 6 ? "Username" : "Suuh"}</button>
            <button onClick={() => setActiveButton(7)} className={`${activeButton === 7 ? "bg-green-700" : "bg-gray-600"}  bg-opacity-50 border-2 border-gray-800 rounded-full px-10 text-2xl hover:bg-green-700 hover:bg-opacity-70 py-5 absolute transform -translate-x-1/2 translate-y-1/2 mr-56 mb-80 right-0`}>{activeButton === 7 ? "Username" : "Suuh"}</button>
            <button onClick={() => setActiveButton(8)} className={`${activeButton === 8 ? "bg-green-700" : "bg-gray-600"}  bg-opacity-50 border-2 border-gray-800 rounded-full px-10 text-2xl hover:bg-green-700 hover:bg-opacity-70 py-5 absolute transform translate-x-1/2 translate-y-1/2 mt-24 mr-96 right-0`}>{activeButton === 8 ? "Username" : "Suuh"}</button>
        </div>
        </div>
    );
}

export default Rooms;
