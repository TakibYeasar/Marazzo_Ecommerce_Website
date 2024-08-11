"use client";
import { usePathname } from "next/navigation";
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="p-5 rounded-lg bg-gray-100 flex items-center justify-between">
      <div className="text-gray-700 font-bold capitalize">{pathname.split("/").pop()}</div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2 bg-gray-700 p-2 rounded-lg">
          <MdSearch />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none text-gray-900 outline-none"
          />
        </div>
        <div className="flex gap-5">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
