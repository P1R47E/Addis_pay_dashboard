import { useState } from "react";
import Sidenav from "./components/Sidenav";
import Header from "./components/Header";
import Table from "./components/Table";
function App (){
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidenav/>
      <div className="flex-1">
        <Header/>
        <main className="p-6">
          <Table/>
        </main>

      </div>
    </div>
  );
}

export default App;