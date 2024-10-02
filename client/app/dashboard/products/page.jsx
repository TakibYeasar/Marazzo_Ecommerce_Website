import Image from "next/image";
import Link from "next/link";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchProducts } from "@/app/lib/data";
import { deleteProduct } from "@/app/lib/actions";

const ProductsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, products } = await fetchProducts(q, page);

  return (
    <div className="bg-bgSoft p-5 rounded-lg mt-5">
      <div className="flex items-center justify-between">
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button className="p-2 bg-indigo-600 text-white rounded-md cursor-pointer">
            Add New
          </button>
        </Link>
      </div>
      <table className="w-full mt-5">
        <thead>
          <tr>
            <td className="p-2">Title</td>
            <td className="p-2">Description</td>
            <td className="p-2">Price</td>
            <td className="p-2">Created At</td>
            <td className="p-2">Stock</td>
            <td className="p-2">Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="p-2">
                <div className="flex items-center gap-2">
                  <Image
                    src={product.img || "/noproduct.jpg"}
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  {product.title}
                </div>
              </td>
              <td className="p-2">{product.desc}</td>
              <td className="p-2">${product.price}</td>
              <td className="p-2">{product.createdAt?.toString().slice(4, 16)}</td>
              <td className="p-2">{product.stock}</td>
              <td className="p-2">
                <div className="flex gap-2">
                  <Link href={`/dashboard/products/${product.id}`}>
                    <button className="p-1 px-3 rounded-md bg-teal-600 text-white">
                      View
                    </button>
                  </Link>
                  <form action={deleteProduct}>
                    <input type="hidden" name="id" value={product.id} />
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

export default ProductsPage;
