import { addUser } from "@/app/lib/actions";

const AddUserPage = () => {
  return (
    <div className="bg-bgSoft p-5 rounded-lg mt-5">
      <form action={addUser} className="flex flex-wrap justify-between">
        <input
          type="text"
          placeholder="username"
          name="username"
          required
          className="p-7 bg-bg text-text border-2 border-gray-800 rounded-md mb-7 w-[45%]"
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          required
          className="p-7 bg-bg text-text border-2 border-gray-800 rounded-md mb-7 w-[45%]"
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
          className="p-7 bg-bg text-text border-2 border-gray-800 rounded-md mb-7 w-[45%]"
        />
        <input
          type="phone"
          placeholder="phone"
          name="phone"
          className="p-7 bg-bg text-text border-2 border-gray-800 rounded-md mb-7 w-[45%]"
        />
        <select
          name="isAdmin"
          id="isAdmin"
          className="p-7 bg-bg text-text border-2 border-gray-800 rounded-md mb-7 w-[45%]"
        >
          <option value={false}>Is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select
          name="isActive"
          id="isActive"
          className="p-7 bg-bg text-text border-2 border-gray-800 rounded-md mb-7 w-[45%]"
        >
          <option value={true}>Is Active?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea
          name="address"
          id="address"
          rows="16"
          placeholder="Address"
          className="p-7 bg-bg text-text border-2 border-gray-800 rounded-md mb-7 w-full"
        ></textarea>
        <button
          type="submit"
          className="w-full p-7 bg-teal-600 text-white rounded-md cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUserPage;
