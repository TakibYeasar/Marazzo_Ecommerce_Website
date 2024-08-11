import React from 'react';
import Image from 'next/image';
import blog_big_01 from "../../assets/blog-post/blog_big_01.jpg";
import blog_big_02 from "../../assets/blog-post/blog_big_02.jpg";
import blog_big_03 from "../../assets/blog-post/blog_big_03.jpg";

const data = [
  {
    image: blog_big_01,
    name: "Voluptatem accusantium doloremque laudantium",
    info: "By Jone Doe | 21 March 2016 ",
    text: "Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
  {
    image: blog_big_02,
    name: "Dolorem eum fugiat quo voluptas nulla pariatur",
    info: "By Saraha Smith | 21 March 2016 ",
    text: "Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
  {
    image: blog_big_03,
    name: "Voluptatem accusantium doloremque laudantium",
    info: "By Jone Doe | 21 March 2016 ",
    text: "Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
  // {
  //   image: blog_big_01,
  //   name: "Dolorem eum fugiat quo voluptas nulla pariatur",
  //   info: "By Saraha Smith | 21 March 2016 ",
  //   text: "Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  // },
  // {
  //   image: blog_big_02,
  //   name: "Voluptatem accusantium doloremque laudantium",
  //   info: "By Jone Doe | 21 March 2016 ",
  //   text: "Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  // },
  // {
  //   image: blog_big_03,
  //   name: "Dolorem eum fugiat quo voluptas nulla pariatur",
  //   info: "By Saraha Smith | 21 March 2016 ",
  //   text: "Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  // },
]

const Blogs = () => {
  return (
    <div className="bg-card-bg p-8 m-12">
      <section className="">
        <h3 className="main-title">Latest form Blog</h3>
        <div className="flex">

          {data?.map((item, i) => (
            <div className="bg-bg-color p-4 rounded-md ml-2 mr-2">
              <div className="">
                <div className=""> <a href="blog.html"><Image src={item?.image} alt='' height={200} width={500} /></a> </div>
              </div>

              <div className="text-left">
                <h3 className=""><a className='no-underline text-base text-font-color' href="#">{item?.name}</a></h3>
                <span className="text-base font-medium">{item?.info}</span>
                <p className="text-base font-medium">{item?.text}</p>
              </div>
            </div>
          ))}

        </div>
      </section>
    </div>
  )
}

export default Blogs