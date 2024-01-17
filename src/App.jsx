import { useState } from "react"

import retroPicture from "/images/image-retro-pcs.jpg"
import topPicture from "/images/image-top-laptops.jpg"
import gamingPicture from "/images/image-gaming-growth.jpg"
import iconMenu from "/images/icon-menu.svg"
import iconClose from "/images/icon-menu-close.svg"
import deskTop from "/images/image-web-3-desktop.jpg"
import moblie from "/images/image-web-3-mobile.jpg"


export default function App() {

  const [isOpen, setIsOpen] = useState(false)


  return (
    <main className="bg-Off-white p-8">
      {/* Navbar */}
      <nav className="md:flex flex-row justify-between items-center bg-white mb-4">
        <span className="font-semibold text-4xl">W.</span>


        {isOpen ?
          <img src={iconClose} alt="" className="relative float-end md:hidden" onClick={() => setIsOpen(!open)} />

          : <img src={iconMenu} alt="" onClick={() => setIsOpen(!isOpen)} className="relative float-end md:hidden" />}

        <ul className={`md:flex absolute md:static text-center  transition-all duration-500 ease-in bg-Off-white w-full md:w-auto ${isOpen ? 'top-20' : "top-[-500px]"}`}>
          <li className="mx-4 my-4 md:my-0">Home</li>
          <li className="mx-4 my-4 md:my-0">New</li>
          <li className="mx-4 my-4 md:my-0">Popular</li>
          <li className="mx-4 my-4 md:my-0">Trending</li>
          <li className="mx-4 my-4 md:my-0">Categories</li>
        </ul>




      </nav>
      {/* main content */}
      <section className="flex flex-col md:flex-row gap-4">
        <div>
          <img src={deskTop} alt="" className="w-auto hidden md:block object-cover" />
          <img src={moblie} alt="" className="w-full md:hidden" />
          <div className="md:flex md:justify-between">
            <h1 className="font-semibold text-4xl p-4 mr-10">The Bright Future of Web 3.0?</h1>
            <p className="p-4 text-gray-500">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
              But is it really fulfilling its promise?
              <br />
              <button className="mt-4 font-semibold text-white bg-Soft-red px-6 py-2 cursor-pointer hover:bg-Soft-orange">Read more</button>

            </p>

          </div>
        </div>
        <div className="bg-Very-dark-blue text-white p-4">
          <h1 className="font-semibold text-4xl text-Soft-orange my-4">New</h1>
          <span className="font-bold cursor-pointer hover:text-Soft-orange">Hydrogen VS Electric Cars</span>
          <p className="text-gray-500">Will hydrogen-fueled cars ever catch up to EVs?</p>
          <hr className="mt-4 mb-2" />
          <span className="font-bold cursor-pointer hover:text-Soft-orange">The Downsides of AI Artistry</span>
          <p className="text-gray-500">What are the possible adverse effects of on-demand AI image generation?</p>
          <hr className="mt-4 mb-2" />
          <span className="font-bold cursor-pointer hover:text-Soft-orange"> Is VC Funding Drying Up?</span>
          <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>

        </div>
      </section>

      <section className="md:flex mt-6 justify-between">
        <div className="flex flex-row gap-4 mb-4">
          <img src={retroPicture} alt="" className="max-h-36" />
          <div>
            <h1 className="text-gray-500 text-2xl"> 01</h1>
            <span className="font-semibold cursor-pointer hover:text-Soft-orange">Reviving Retro PCs</span>
            <p className="text-gray-500">What happens when old PCs are given modern upgrades?</p>
          </div>
        </div>
        <div className="flex flex-row gap-4 mb-4">
          <img src={topPicture} alt="" className="max-h-36" />
          <div>
            <h1 className="text-gray-500 text-2xl">02</h1>
            <span className="font-semibold cursor-pointer hover:text-Soft-orange">Top 10 Laptops of 2022</span>
            <p className="text-gray-500">Our best picks for various needs and budgets.</p>
          </div>
        </div>
        <div className="flex flex-row gap-4 mb-4">
          <img src={gamingPicture} alt="" className="max-h-36" />
          <div>
            <h1 className="text-gray-500 text-2xl">03</h1>
            <span className="font-semibold cursor-pointer hover:text-Soft-orange">The Growth of Gaming</span>
            <p className="text-gray-500">How the pandemic has sparked fresh opportunities.</p>
          </div>
        </div>
      </section>

    </main>
  )
}