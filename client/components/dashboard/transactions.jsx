import Image from "next/image";

const Transactions = () => {
  return (
    <div className="bg-gray-800 p-5 rounded-lg">
      <h2 className="text-gray-300 text-xl font-light mb-5">Latest Transactions</h2>
      <table className="w-full">
        <thead>
          <tr>
            <td className="p-2 text-gray-400">Name</td>
            <td className="p-2 text-gray-400">Status</td>
            <td className="p-2 text-gray-400">Date</td>
            <td className="p-2 text-gray-400">Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">
              <div className="flex items-center gap-2">
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
                />
                John Doe
              </div>
            </td>
            <td className="p-2">
              <span className="bg-yellow-300 text-white rounded-md px-2 py-1 text-sm">Pending</span>
            </td>
            <td className="p-2">14.02.2024</td>
            <td className="p-2">$3,200</td>
          </tr>
          <tr>
            <td className="p-2">
              <div className="flex items-center gap-2">
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
                />
                John Doe
              </div>
            </td>
            <td className="p-2">
              <span className="bg-blue-300 text-white rounded-md px-2 py-1 text-sm">Done</span>
            </td>
            <td className="p-2">14.02.2024</td>
            <td className="p-2">$3,200</td>
          </tr>
          <tr>
            <td className="p-2">
              <div className="flex items-center gap-2">
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
                />
                John Doe
              </div>
            </td>
            <td className="p-2">
              <span className="bg-red-300 text-white rounded-md px-2 py-1 text-sm">Cancelled</span>
            </td>
            <td className="p-2">14.02.2024</td>
            <td className="p-2">$3,200</td>
          </tr>
          <tr>
            <td className="p-2">
              <div className="flex items-center gap-2">
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
                />
                John Doe
              </div>
            </td>
            <td className="p-2">
              <span className="bg-yellow-300 text-white rounded-md px-2 py-1 text-sm">Pending</span>
            </td>
            <td className="p-2">14.02.2024</td>
            <td className="p-2">$3,200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
