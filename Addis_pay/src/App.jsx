import { useState } from "react";
import Sidenav from "./components/Sidenav";
import Header from "./components/Header";
import Tableload from "./components/Tableload";

function App (){
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidenav/>
      <div className="flex-1">
        <Header/>
        <main className="p-6">
          <Tableload/>
        </main>

      </div>
    </div>
  );
}

export default App;