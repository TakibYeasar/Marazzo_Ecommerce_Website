import { updateProduct } from "@/app/lib/actions";
import { fetchProduct } from "@/app/lib/data";
import Image from "next/image";

const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <div className="flex gap-12 mt-5">
      <div className="flex-1 bg-bgSoft p-5 rounded-lg font-bold text-textSoft">
        <div className="relative w-full h-72 rounded-lg overflow-hidden mb-5">
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {product.title}
      </div>
      <div className="flex-3 bg-bgSoft p-5 rounded-lg">
        <form action={updateProduct} className="flex flex-col">
          <input type="hidden" name="id" value={product.id} />
          <label className="text-xs">Title</label>
          <input
            type="text"
            name="title"
            placeholder={product.title}
            className="p-5 border-2 border-gray-800 rounded-md bg-bg text-text mb-2.5"
          />
          <label className="text-xs">Price</label>
          <input
            type="number"
            name="price"
            placeholder={product.price}
            className="p-5 border-2 border-gray-800 rounded-md bg-bg text-text mb-2.5"
          />
          <label className="text-xs">Stock</label>
          <input
            type="number"
            name="stock"
            placeholder={product.stock}
            className="p-5 border-2 border-gray-800 rounded-md bg-bg text-text mb-2.5"
          />
          <label className="text-xs">Color</label>
          <input
            type="text"
            name="color"
            placeholder={product.color || "color"}
            className="p-5 border-2 border-gray-800 rounded-md bg-bg text-text mb-2.5"
          />
          <label className="text-xs">Size</label>
          <textarea
            name="size"
            placeholder={product.size || "size"}
            className="p-5 border-2 border-gray-800 rounded-md bg-bg text-text mb-2.5"
          />
          <label className="text-xs">Cat</label>
          <select
            name="cat"
            id="cat"
            className="p-5 border-2 border-gray-800 rounded-md bg-bg text-text mb-2.5"
          >
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label className="text-xs">Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder={product.desc}
            className="p-5 border-2 border-gray-800 rounded-md bg-bg text-text mb-5"
          ></textarea>
          <button className="w-full p-5 bg-teal-600 text-white rounded-md cursor-pointer mt-5">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
