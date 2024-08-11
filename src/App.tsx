// import React from 'react';
// import logo from './logo.svg';
import { BackgroundHeading } from "./components/BackgroundHeading";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { TodoList } from "./components/TodoList";



function App() {

  return (
    <div>
      <BackgroundHeading />
      <div className="font-sans bg-[#f1d4b3] h-screen flex flex-col justify-center items-center">

        <main className="w-3/4 relative z-1 h-[600px] mt-12 bg-white rounded-[8px] 
          shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden"
        >
          <Header />
          <TodoList />
          <Sidebar />
        </main>
        <Footer />
      </div>
    </div>

  );
}

export default App;
