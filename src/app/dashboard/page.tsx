"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';

import Modal from "./modal"


const Dashboard = () => {
  const [activeButton, setActiveButton] = useState("first");
  const [isLogged, setIsLogged] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleButtonClick = (num: string) => {
    setActiveButton(num);
  };

  const handleButtonClick1 = () => {
    switch(isLogged) {
      case true:
        setIsLogged(false)
        break
      case false: 
        setIsLogged(true)
        break
    }
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };



  return (
    <div className='px-16'>
      {isModalVisible === true && <Modal />}
      <div className="flex flex-col gap-2">
        <div className="mx-auto flex flex-row gap-36 py-1">
          <button
            className={`text-2xl px-36 inline-block py-4 text-white ${
              activeButton === 'first' ? 'bg-green-700' : 'bg-gray-800 hover:bg-green-700'
            } rounded-lg`}
            onClick={() => handleButtonClick('first')}
          >
            Belen mongo
          </button>
          <button
            className={`text-2xl px-36 inline-block py-4 text-white ${
              activeButton === 'second' ? 'bg-green-700' : 'bg-gray-800 hover:bg-green-700'
            } rounded-lg`}
            onClick={() => handleButtonClick('second')}
          >
            Temtseen
          </button>
          <button
            className={`text-2xl px-36 inline-block py-4 text-white ${isLogged === true ? "bg-green-500 hover:bg-green-600" : "bg-yellow-500 hover:bg-yellow-600"} hover:scale-110 rounded-lg`}
            onClick={() => handleButtonClick1()}
          >
            {isLogged === true ? "Username" : "Login"}
          </button>
        </div>
        <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-9 flex flex-col gap-1'>
                <div className='flex flex-row gap-5 mx-auto bg-indigo-800 bg-opacity-90 rounded-xl'>
                    <button className='rounded-sm text-xl hover:bg-red-700 bg-gray-700 px-20 py-1'>ALL</button>
                    <button className='rounded-sm text-xl hover:bg-red-700 bg-gray-700 px-20 py-1'>Holdem</button>
                    <button className='rounded-sm text-xl hover:bg-red-700 bg-gray-700 px-20 py-1'>Omaha</button>
                    <button className='rounded-sm text-xl hover:bg-red-700 bg-gray-700 px-20 py-1'>Short deck</button>
                    <button className='rounded-sm text-xl hover:bg-red-700 bg-gray-700 px-20 py-1'>13 Pocker</button>
                </div>
                <div className='flex mx-auto flex-row gap-5 rounded-xl bg-indigo-800 bg-opacity-90'>
                    <button className='rounded-sm text-xl hover:bg-red-700 bg-gray-700 px-28 py-1'>Buh shiree</button>
                    <button className='rounded-sm text-xl hover:bg-red-700 bg-gray-700 px-28 py-1'>Fixed</button>
                    <button className='rounded-sm text-xl hover:bg-red-700 bg-gray-700 px-28 py-1'>Pot limit</button>
                    <button className='rounded-sm text-xl hover:bg-red-700 bg-gray-700 px-28 py-1'>Engiin</button>
                </div>
                <div className="flex flex-col">
                    <div className='flex bg-yellow-600 py-3 text-center text-xl flex-row'>
                        <p className='w-1/6'>Shiree</p>
                        <p className='w-1/6'>Ul</p>
                        <p className='w-1/6'>Dun/Pot</p>
                        <p className='w-1/6'>Hun</p>
                        <p className='w-1/6'>Toglogch</p>
                        <p className='w-1/6'>Torol</p>
                    </div>
                    {[...Array(10)].map((_, index) => (
                        <Link href="/rooms" className="flex text-center flex-row text-lg bg-blue-700 bg-opacity-75 hover:bg-green-700 py-2 border border-gray-700" key={index}>
                        <p className='w-1/6'>Silver🥈</p>
                        <p className='w-1/6'>100/500</p>
                        <p className='w-1/6'>5000MNR</p>
                        <p className='w-1/6'>99</p>
                        <p className='w-1/6'>12/12</p>
                        <p className='w-1/6'>Hold&aphom;em</p>
                        </Link>
                    ))}
                </div>
            </div>

            <div className='col-span-3 flex flex-col gap-4'>
                <div className='flex flex-col'>
                    <div className='bg-indigo-900 px-auto text-center text-2xl text-gray-100 py-1'>SILVER</div>
                    <div className='flex text-center flex-row text-lg bg-indigo-700 py-2'>
                        <p className='w-1/3'>Ner</p>
                        <p className='w-1/3'>Uls</p>
                        <p className='w-1/3'>Dun</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    {[...Array(5)].map((_, index) => (
                        <div className="flex text-center flex-row text-lg bg-indigo-700 py-2" key={index}>
                        <p className="w-1/3">Username</p>
                        <p className="w-1/3">Mongol</p>
                        <p className="w-1/3">100&aphom;000MNT</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='col-span-auto flex flex-row gap-2'>
                <div className='flex flex-row text-center text-xl mx-auto gap-4'>
                    <div className='w-1/5 bg-gray-500 hover:bg-green-700 rounded-md px-20 py-2'>Search</div>
                    <div className='w-1/5 bg-gray-500 hover:bg-green-700 rounded-md px-20 py-2'>Toglogch</div>
                    <div className='w-1/5 bg-gray-500 hover:bg-green-700 rounded-md px-20 py-2'>Hooson</div>
                    <div className='w-1/5 bg-gray-500 hover:bg-green-700 rounded-md px-20 py-2'>Duuren</div>
                    <div className='w-1/5 bg-gray-500 hover:bg-green-700 rounded-md px-20 py-2'>Wallet</div>
                </div>
                <div className='pl-24 flex flex-row gap-2 text-center text-xl text-gray-100'>
                    <button className='bg-gray-700 hover:bg-red-700 px-9 py-2 rounded-sm'>Shiree</button>
                    <button className='bg-gray-700 hover:bg-red-700 px-16 py-2 rounded-sm'>Huleelgiin jagsaalt</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
