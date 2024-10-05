import React from 'react';

const DealDetails = ({ product, location, date, pieces, amount, status }) => {
  return (
    <div className="w-full h-auto bg-[#273142] p-8 rounded-2xl shadow-lg">
      <div className="text-xl font-bold mb-6 text-white ">Deal Details</div>
      <table className="table-auto w-full text-left text-white border-separate border-spacing-y-3">
        <thead className="bg-[#323D4E] rounded-lg">
          <tr className="text-xs md:text-sm text-center">
            <th className="py-5 px-5 rounded-lg">Product Name</th>
            <th className="py-3 px-5">Location</th>
            <th className="py-3 px-5">Date - Time</th>
            <th className="py-3 px-5">Pieces</th>
            <th className="py-3 px-5">Amount</th>
            <th className="py-3 px-5 rounded-tr-lg">Status</th>
          </tr>
        </thead>
        <tbody className="border-b-4">
          {[1, 2].map((_, index) => (
            <tr key={index} className="text-sm md:text-base text-center">
              <td className="py-4 px-6 border-b border-[#4A5568] rounded-l-lg">{product}</td>
              <td className="py-4 px-6 border-b border-[#4A5568]">{location}</td>
              <td className="py-4 px-6 border-b border-[#4A5568]">{date}</td>
              <td className="py-4 px-6 border-b border-[#4A5568]">{pieces}</td>
              <td className="py-4 px-6 border-b border-[#4A5568]">{amount}</td>
              <td className="py-4 px-6 border-b border-[#4A5568] rounded-r-lg">
               <span>
               <button className='py-1.5 px-4 rounded-full bg-green-500 text-xs md:text-sm'>Delivered</button>
               </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DealDetails;
