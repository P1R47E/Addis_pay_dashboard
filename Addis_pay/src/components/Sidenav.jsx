import React from "react";
function Sidenav(){
    const menuItems  = [
    { icon: "⬜", label: "Dashboard" },
    { icon: "🏦", label: "Banks" },
    { icon: "👥", label: "Customers" },
    { icon: "📝", label: "Requests" },
    { icon: "💳", label: "Instant Payment", active: true },
    { icon: "📒", label: "Ledgers" },
    { icon: "💰", label: "Settlements" },
    { icon: "📥", label: "Offline Deposit" },
    ];
    return (
        <div className="w-64 bg-emerald-500 text-white min-h-screen">
            <div className="p-4">
                <h1 className="text-2x1 font-bold mb-8">Addispay</h1>
                <nav>
                    {menuItems.map((item,index) =>(
                        <div key = {index} className={`flex items-center p-3 mb-2 rounded ${item.active ? 'bg-white text-emerald-500' : 'hover: bg-emerald-600'}`}>
                            <span className="mr-3">{item.icon}</span>
                            <span>{item.label}</span>
                        </div>
                    ))}
                </nav>
            </div>
        </div>
    )
}
export default Sidenav