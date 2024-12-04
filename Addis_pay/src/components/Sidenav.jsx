import React from "react";

function Sidenav() {
    // there is a way of fetching zis dynamically  but let's write it this way
    const menuItemss = [
        { icon: "⬜", label: "Dashboard" },
        { icon: "🏦", label: "Banks" },
        { icon: "👥", label: "Customers" },
        { icon: "📝", label: "Requests" },
        { icon: "💳", label: "Instant Payment", isActive: true }, //this is the active one
        { icon: "📒", label: "Ledgers" },
    { icon: "💰", label: "Settlements" },
        { icon: "📥", label: "Offline Deposit" },
    ];

    return (
            <div className=" bg-emerald-500 text-white min-h-screen w-64">
            {/*the company goess here */}
        <div className="p-4">
                <h1 className="mb-8 text-2xl font-bold ">Addispay</h1>
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
        </div>
        </div>
    );
}

export default Sidenav;
