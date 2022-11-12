import React from "react";
import CalcBox from './CalcBox/CalcBox'

export default function App() {
  return (
    <div className="bg-[url('images/bg.jpg')] bg-cover">
      <div className="container mx-auto py-52">
        <h2 className='text-6xl font-medium text-[#404258] text-center'>Cool Calculator</h2>
        <CalcBox/>
      </div>
    </div>
  );
}
