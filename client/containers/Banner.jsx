import React from 'react';
import s1 from "../../assets/sliders/01.jpg";
import s2 from "../../assets/sliders/02.jpg";
import Image from 'next/image';

const data = [
  {
    image: s1,
    header: 'Top Brands',
    title: 'New Collections',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  // {
  //   image: s2,
  //   header: 'Spring 2018',
  //   title: 'Women Fashion ',
  //   desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit',
  // },
]

const Banner = () => {
  return (
    <div className="m-4">

      {data?.map((item, i) => (
        <div className="relative">
          <div className=""><Image src={item.image} alt="" /></div>
          <div className="absolute top-0">
            <div className="text-4xl">{item?.header}</div>
            <div className="text-3xl font-bold"> {item?.title} </div>
            <div className=""> <span className='text-base'>{item?.desc}</span> </div>
            <div className=""> <a href="index6c11.html?page=single-product" className="uppercase">Shop Now</a> </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Banner