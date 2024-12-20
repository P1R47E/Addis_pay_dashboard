import React from "react";

function Tableload() {
    // a datA for the table
    const tableData = [
        {
            id: 1,user: "Mariamawit Mambwe",startDate: "Mar 22, 2010",service: "Ride",amount: "45,561",dueDate: "Mar 19, 2007", status: "pending",
        },
        {
            id: 1,user: "Mehdi Okoro",startDate: "Apr 18, 2021",service: "Ride",amount: "68,027",dueDate: "Sep 12, 2014",status: "pending",
        },
        {
            id: 3,user: "Tawana Bankole", startDate: "Jan 22, 2023", service: "Ride",amount: "93,959",dueDate: "Mar 19, 2007",status: "pending",
            
        },
        {
            id: 4,user: "Tamira Mambwe",startDate: "Jul 18, 2021",service: "Ride",amount: "17,035",dueDate: "Mar 19, 2007",status: "pending",
       
        },
        {
            id: 5,user: "Kamau Adimbola",startDate: "Mar 13, 2023",service: "Ride",amount: "26,187",dueDate: "Mar 19, 2007", status: "pending",
         
        },
    ];

    // Style based on an status
    const getStatusStyle = (status) => {
        switch (status) {
        case "pending":
                return "bg-yellow-100 text-yellow-800";
        default:
        return "bg-green-100 text-green-800";
        }
    };

    return (
        <div className="bg-white rounded-lg ">
            {/* Filter sect */}
            <div className="p-4 bg-gray-100 flex rounded-lg justify-between items-center">
                <div className="font-sm">Filter</div>
                <div className="flex space-x-4">
                    <div className="flex space-x-2 items-center">
                        <span>Status</span>
                        <select className=" p-1 border rounded ">
                            <option>Pending</option>
                        </select>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span>Sort By</span>
                        <select className="border rounded p-1">
                            <option>Amount</option>
                        </select>
                    </div>
                    <div>
                        <span>Sort Order</span>
                        <select className="border rounded p-1">
                            <option>Increasing</option>
                            <option>Decreasing</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* main table */}
            <table className="w-full mt-4 border-collapse shadow">
                <thead className="bg-gray-200 border-collapse rounded-lg">
                    <tr className="rounded-lg">
                        <th className="px-4 py-2 border-none ">No</th>
                        <th className="px-4 py-2 text-left border-none">User</th>
                        <th className="text-left px-4 py-2 border-none ">Start Date</th>
                        <th className="px-4 py-2 text-left border-none">Service</th>
                        <th className="px-4 py-2 text-left border-none">Amount</th>
                        <th className="px-4 py-2 text-left border-none">Due Date</th>
                        <th className="px-4 py-2 text-left border-none">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((data, idx) => (
                        <tr key={idx} >
                            <td className="px-4 border-b-0 py-2">{data.id}</td>
                            <td className="px-4 border-none py-2">{data.user}</td>
                            <td className="px-4 border-none py-2">{data.startDate}</td>
                            <td className="px-4 py-2">{data.service}</td>
                            <td className="px-4 py-2">{data.amount}</td>
                            <td className="px-4 py-2">{data.dueDate}</td>
                            <td className="px-4 py-2">
                                <span className={`px-2 py-1 rounded ${getStatusStyle(data.status)}`}>
                                    {data.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Tableload;
