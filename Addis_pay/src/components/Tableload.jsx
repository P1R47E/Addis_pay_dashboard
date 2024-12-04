import React from "react";
function Tableload(){
    const [status,setStatus] = useState('pending');
    const [sortBy,setsortBy] = useState('Amount');
    const [sortOrder,setSortOrder] = useState('Increasing');

    const tableData = [
        {id:1,user:"mariamawit mambwe", startDate: "Mar 22,2010", service: "Ride",amount:"45,561" , dueDate:"Mar 19,2007"},
        {id:1,user:"Mehdi okoro", startDate: "Apr18,2021", service: "Ride",amount:"68,027" , dueDate:"Sep12,2014"},
        {id:1,user:"Tawana Bankole", startDate: "Jan 22,2023", service: "Ride",amount:"93,959" , dueDate:"Mar 19,2007"},
        {id:1,user:"Tamira mambwe", startDate: "Jul 18,2021", service: "Ride",amount:"17,035" , dueDate:"Mar 19,2007"},
        {id:1,user:"KamauAdimbola", startDate: "Mar 13,2023", service: "Ride",amount:"26,187" , dueDate:"Mar 19,2007"}
    ];
    return(
        <div className="bg-white rounded-lg shadow">
            <div className="p-4 bg-gray-100 flex justify-between items-center">
                <div className="font-sm">Filter</div>
                <div className="flex space-x-4">
                    <div className="flex space-x-2 items-center">
                        <span>Status</span>
                        <select className="border rounded p-1">
                            <option>Pending</option>
                        </select>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span>sort By</span>
                        <select className="border rounded p-1">
                            <option>Amount</option>
                        </select>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span>Sort Order</span>
                        <select className="border rounded p-1">
                            <option>Increasing</option>
                        </select>

                    </div>
                </div>
            </div>
            <table className="w-full">
                <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left">No</th>
                      <th className="px-4 py-2 text-left">User</th>
                      <th className="px-4 py-2 text-left">Start</th>
                      <th className="px-4 py-2 text-left">Service</th>
                      <th className="px-4 py-2 text-left">Amount</th>
                      <th className="px-4 py-2 text-left">Due date</th>
                      <th className="px-4 py-2 text-left">Status</th>  
                    </tr>
                </thead>
            </table>

        </div>
    );
}

export default Tableload
