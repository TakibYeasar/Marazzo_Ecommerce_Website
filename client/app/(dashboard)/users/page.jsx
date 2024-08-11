import { deleteUser } from "@/app/lib/actions";
import { fetchUsers } from "@/app/lib/data";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import Image from "next/image";
import Link from "next/link";

const UsersPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, users } = await fetchUsers(q, page);

  return (
    <div className="bg-bgSoft p-5 rounded-lg mt-5">
      <div className="flex items-center justify-between">
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className="p-2 bg-indigo-600 text-white rounded-md cursor-pointer">
            Add New
          </button>
        </Link>
      </div>
      <table className="w-full mt-5">
        <thead>
          <tr>
            <td className="p-2">Name</td>
            <td className="p-2">Email</td>
            <td className="p-2">Created At</td>
            <td className="p-2">Role</td>
            <td className="p-2">Status</td>
            <td className="p-2">Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="p-2">
                <div className="flex items-center gap-2">
                  <Image
                    src={user.img || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  {user.username}
                </div>
              </td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user.createdAt?.toString().slice(4, 16)}</td>
              <td className="p-2">{user.isAdmin ? "Admin" : "Client"}</td>
              <td className="p-2">{user.isActive ? "active" : "passive"}</td>
              <td className="p-2">
                <div className="flex gap-2">
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className="p-1 px-3 rounded-md bg-teal-600 text-white">
                      View
                    </button>
                  </Link>
                  <form action={deleteUser}>
                    <input type="hidden" name="id" value={user.id} />
                    <button className="p-1 px-3 rounded-md bg-crimson-600 text-white">
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default UsersPage;
