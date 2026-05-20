import React from 'react'
import first from './assets/firstP.jpg'


const App = () => {
  return (
    <>
      <main
        className="grid gap-4 grid-cols-[1fr_1fr_1fr_1fr] grid-rows-[1fr_1fr_1fr_1fr_1fr_1fr] w-full h-screen p-4 [grid-template-areas:'profile_flower_category_order'_'profile_flower_category_pic2'_'bitcoinarea_location_category_pic2'_'bitcoinarea_location_category_pic2'_'bitcoinarea_price_reting_reting'_'bitcoinarea_qr_reting_reting']"
      >

        <div className="p-3 flex justify-center items-center  [grid-area:profile]">
          <img className='w-60 h-60  object-cover  rounded-2xl' src={first} alt="" />
        </div>
        <div id="flower" className="bg-yellow-500 [grid-area:flower]"></div>
        <div id="category" className="bg-indigo-500 [grid-area:category]"></div>
        <div id="order" className="bg-purple-500 [grid-area:order]"></div>
        <div id="bitcoinArea" className="bg-orange-500 [grid-area:bitcoinarea]"></div>
        <div id="location" className="bg-green-500 [grid-area:location]"></div>
        <div id="pricetag" className="bg-teal-500 [grid-area:price]"></div>
        <div id="qr" className="bg-blue-500"></div>
        <div id="pic2" className="bg-pink-500 [grid-area:pic2]"></div>
        <div id="reting" className="bg-rose-500 [grid-area:reting]"></div>

      </main>

    </>
  )
}

export default App