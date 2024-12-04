import React from "react";
import { FaTachometerAlt, FaBell, FaUniversity, FaUsers, FaRegFileAlt, FaCreditCard, FaBook, FaMoneyBill, FaInbox } from "react-icons/fa"
function Header(){
    return(
     <div className="bg-white p-4 border-b">
        <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
                <h2 className="text-xl font-semibold text-emerald-500">💳 Instant Payments</h2>
            </div>
            <div className="flex items-center space-x-4">
                <button className="bg-emerald-500 text-white px-4 py-2 rounded">
                    Test mode
                </button>
                <div className="relative">
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center ">
                        2
                    </span>
                    <span><FaBell/></span>
                </div>
                <button className="w-8 h-8 text-white bg-emerald-500 rounded-full flex items-center justify-center " >
                 HB
                </button> 
            </div>
        </div>
        <div className="mt-4">
            <div className="flex space-x-4">
                <button className="border-b-2 border-emerald-500 pb-2">To pay</button>
                <button className="text-gray-500 ml-4">My requests</button> 

            </div>
        </div>
     </div>   
    );
}

export default Header