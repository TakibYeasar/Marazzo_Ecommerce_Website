import { addProduct } from "@/app/lib/actions";

const AddProductPage = () => {
  return (
    <div className="bg-bgSoft p-5 rounded-lg mt-5">
      <form action={addProduct} className="flex flex-wrap justify-between">
        <input
          type="text"
          placeholder="title"
          name="title"
          required
          className="w-[45%] p-7 bg-bg text-text border-2 border-gray-800 rounded-md mb-7"
        />
        <select
          name="cat"
          id="cat"
          className="w-[45%] p-7 bg-bg text-text border-2 border-gray-800 rounded-md mb-7"
        >
          <option value="general">Choose a Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input
          type="number"
          placeholder="price"
          name="price"
          required
          className="w-[45%] p-7 bg-bg text-text border-2 border-gray-800 rounded-md mb-7"
        />
        <input
          type="number"
          placeholder="stock"
          name="stock"
          required
          className="w-[45%] p-7 bg-bg text-text border-2 border-gray-800 rounded-md mb-7"
        />
        <input
          type="text"
          placeholder="color"
          name="color"
          className="w-[45%] p-7 bg-bg text-text border-2 border-gray-800 rounded-md mb-7"
        />
        <input
          type="text"
          placeholder="size"
          name="size"
          className="w-[45%] p-7 bg-bg text-text border-2 border-gray-800 rounded-md mb-7"
        />
        <textarea
          required
          name="desc"
          id="desc"
          rows="16"
          placeholder="Description"
          className="w-full p-7 bg-bg text-text border-2 border-gray-800 rounded-md mb-7"
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

export default AddProductPage;
