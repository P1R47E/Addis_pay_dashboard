import React from "react";
//for the icons
import { FaTachometerAlt, FaUsers,FaCogs,FaWrench, FaRegFileAlt, FaUniversity,FaCreditCard, FaMoneyBill, FaBook, FaInbox, } from "react-icons/fa"; 

function Sidenav() {
    // there is a way of fetching zis dynamically  but let's write it this way
    const menuItemss = [
        { icon: <FaTachometerAlt />, label: "Dashboard" },{ icon: <FaUniversity />, label: "Banks" },
        { icon: <FaUsers />, label: "Customers" },{ icon: <FaRegFileAlt />, label: "Requests" },
        { icon: <FaCreditCard />, label: "Instant Payment", isActive: true }, //this is the active one
         { icon: <FaBook />, label: "Ledgers" },{ icon: <FaMoneyBill />, label: "Settlements" },
         { icon: <FaInbox/>, label: "Offline Deposit" },  
    ];
    const menuItemss2 = [
        { icon: <FaCogs />, label: "Settings" },{ icon: <FaUniversity />, label: "Banks" },
        { icon: <FaWrench />, label: "developer tools" }
    ];
    return (
            <div className=" bg-emerald-500 text-white min-h-screen w-64">
            {/*the company goess here */}
        <div className="p-4">
                <h1 className="mb-8 text-2xl font-bold ">Addispay</h1>
                <div className="text-sm text-gray-200 mb-4">YOUR COMPANY</div>
                <nav>
                    {menuItemss.map((item, idx) => {
                    let itemStyle = "rounded p-3 flex items-center  mb-2 "; // for both

                        // if the mode is active
                    if (item.isActive) {
                            itemStyle += " bg-white text-emerald-500";//addign if it's active
                        } else {
                            itemStyle += " hover:bg-emerald-600";
                    }

                        return (
                            <div key={idx} className={itemStyle}>
                        {/* */}
                         <span className="mr-3">{item.icon}</span>
                        {/* the labels of navigationa */}
                                <span>{item.label}</span>
                            </div>
                        );
                    })
            }
         </nav>
         <div>
            <h2 className="text-sm text-gray-200 mb-2">Tools</h2>
            {menuItemss2.map((item,index) => (
                <div key = {index} className="items-center flex p-3 mb-2 rounded hover:bg-emerald-600">
                    <span className="mr-3">{item.icon}</span>
                    <span>{item.label}</span>
            
            </div>
            ))}
         </div>
         <hr className="border-emerald-400 my-4" />
        </div>
        </div>
    );
}

export default Sidenav;
