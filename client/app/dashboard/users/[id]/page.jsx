import { updateUser } from "@/app/lib/actions";
import { fetchUser } from "@/app/lib/data";
import Image from "next/image";

const SingleUserPage = async ({ params }) => {

  const { id } = params;
  const user = await fetchUser(id);

  return (
    <div className="flex gap-12 mt-5">
      <div className="flex-1 bg-bgSoft p-5 rounded-lg font-bold text-textSoft h-max">
        <div className="w-full h-[300px] relative rounded-lg overflow-hidden mb-5">
          <Image src={user.img || "/noavatar.png"} alt="" fill />
        </div>
        {user.username}
      </div>
      <div className="flex-3 bg-bgSoft p-5 rounded-lg">
        <form action={updateUser} className="flex flex-col">
          <input type="hidden" name="id" value={user.id} />
          <label className="text-xs">Username</label>
          <input
            type="text"
            name="username"
            placeholder={user.username}
            className="p-5 border-2 border-gray-800 rounded-md bg-bg text-text mb-2.5"
          />
          <label className="text-xs">Email</label>
          <input
            type="email"
            name="email"
            placeholder={user.email}
            className="p-5 border-2 border-gray-800 rounded-md bg-bg text-text mb-2.5"
          />
          <label className="text-xs">Password</label>
          <input
            type="password"
            name="password"
            className="p-5 border-2 border-gray-800 rounded-md bg-bg text-text mb-2.5"
          />
          <label className="text-xs">Phone</label>
          <input
            type="text"
            name="phone"
            placeholder={user.phone}
            className="p-5 border-2 border-gray-800 rounded-md bg-bg text-text mb-2.5"
          />
          <label className="text-xs">Address</label>
          <textarea
            type="text"
            name="address"
            placeholder={user.address}
            className="p-5 border-2 border-gray-800 rounded-md bg-bg text-text mb-2.5"
          />
          <label className="text-xs">Is Admin?</label>
          <select
            name="isAdmin"
            id="isAdmin"
            className="p-5 border-2 border-gray-800 rounded-md bg-bg text-text mb-2.5"
          >
            <option value={true} selected={user.isAdmin}>
              Yes
            </option>
            <option value={false} selected={!user.isAdmin}>
              No
            </option>
          </select>
          <label className="text-xs">Is Active?</label>
          <select
            name="isActive"
            id="isActive"
            className="p-5 border-2 border-gray-800 rounded-md bg-bg text-text mb-2.5"
          >
            <option value={true} selected={user.isActive}>
              Yes
            </option>
            <option value={false} selected={!user.isActive}>
              No
            </option>
          </select>
          <button className="w-full p-5 bg-teal-600 text-white rounded-md cursor-pointer mt-5">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
