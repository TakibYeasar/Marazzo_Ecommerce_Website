import { Banner, Blogs, Cards, Categories, Electroniccards, Electronics, Featuredproduct, Hotdeals, Newproducts, Newslatter, Producttags, Specialdeals, Specialoffer, Testimonials } from '@/containers'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">

      <div className="grid grid-cols-12">
        <div className="lg:col-span-4">
          <Categories />
          <Hotdeals />
          <Producttags />
          <Specialoffer />
          <Specialdeals />
          <Newslatter />
          <Testimonials />
        </div>
        <div className="lg:col-span-8">
          <Banner />
          <Newproducts />
          <Cards />
          <Electronics />
          <Blogs />
          <Electroniccards />
          <Featuredproduct />
        </div>
      </div>

    </div>
  )
}
