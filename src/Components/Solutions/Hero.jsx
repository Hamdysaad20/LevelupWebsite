
function Hero(props) {
  return (
    <section className=" rounded-b-3xl " >
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <a href="#" className="inline-flex justify-between cursor-not-allowed items-center py-1 px-1 pr-4 mb-7 text-sm  bg-[#02c2ab] rounded-full hover:bg-[#02c2ab]/40 duration-500 " role="alert">
              <span className="text-xs bg-[#02c2ab]/20 rounded-full  px-4 py-1.5 mr-3">New</span> <span className="text-sm font-medium">Flowbite is out! See what&apos;s new</span>
              <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
            </a>
            <div className='w-full flex justify-center'>
              <h1 className="mb-4 text-4xl max-w-[1200px] font-extrabold tracking-tight leading-none text-[#002E70] md:text-5xl lg:text-6xl ">
                {props.title}
              </h1>
            </div>
            <p className="mb-8 text-lg font-normal text-[#002E70]/80 lg:text-xl  sm:px-4">{props.discription}</p>
          </div>
        </section>
  )
}



export default Hero

