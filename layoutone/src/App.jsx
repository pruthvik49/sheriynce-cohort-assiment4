import React from 'react'
import first from './assets/firstP.jpg'
import bit from './assets/bit.webp'
import br from './assets/barcode.gif'
import flower from './assets/Flower-3.png'


const App = () => {
  return (
    <>
      <main
        className="grid gap-4 grid-cols-[1fr_1fr_1fr_1fr] grid-rows-[1fr_1fr_1fr_1fr_1fr_1fr] w-full h-screen p-4 [grid-template-areas:'profile_flower_category_order'_'profile_flower_category_pic2'_'bitcoinarea_location_category_pic2'_'bitcoinarea_location_category_pic2'_'bitcoinarea_price_reting_reting'_'bitcoinarea_qr_reting_reting']"
      >

        <div className="mx-6  flex justify-center items-center  w-[80%] bg-gray-700 rounded-3xl  [grid-area:profile]">
          <img className=' h-[90%]  rounded-2xl' src={first} alt="" />
        </div>
        <div id="flower" className="bg-gray-800  w-60  h-60  [grid-area:flower] ">




        <div className='rounded-[80%] border w-full h-full justify-center items-center flex  border-amber-200'>
          <img className='w-[85%]' src={flower} alt="" />
        </div>












        </div>
        <div id="category" className="bg-indigo-500 [grid-area:category]"></div>
        <div id="order" className="bg-purple-500 [grid-area:order]"></div>
        <div id="bitcoinArea" className=" [grid-area:bitcoinarea]  border border-amber-200 rounded-2xl">
          <div className='flex flex-col items-center justify-between h-full '>
        <h1 className='text-white text-5xl p-5 '>butusic </h1>
        <div className='flex flex-col justify-start w-full p-2'>
        <h1 className='text-fuchsia-900 text-xl '>ILLUSTRATIONS </h1>
        <h1 className='text-fuchsia-900 text-xl '>EXHIBITION </h1>
        </div>
        <hr className='w-[85%] border border-white'/>
        <div className='flex w-full p-3  justify-between'>
          <img className='w-12  rounded-xl ' src={bit} alt="" />
          <h1 className='text-white'>we accpet just <br />more than bitcoine </h1>
        </div>
        <img className='p-3 ' src={br} alt="" />
          </div>
        </div>
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