import hero from '../assets/images/hero.png';
import apple from '../assets/images/apple.png';
import dot from '../assets/images/dot.png';
import { FaArrowRight } from "react-icons/fa6";



let heroLink = [
  { name: "Woman's Fashion" },
  { name: "Men's Fashion" },
  { name: "Electronics" },
  { name: "Home & StyleLife" },
  { name: "Medicine" },
  { name: "Sports & Outdoor" },
  { name: "Baby's & Toys" },
  { name: "Groceries & Pets" },
  { name: "Health & Beauty" },
];

export default function Hero() {
  return (
    <><div className='flex justify-center items-center'>
      <div id="heroMain" className=" w-[100%] h-[500px] 2xl:flex-row xl:flex-row lg:flex-col md:flex-col sm:flex-col mobile:flex-col flex mb-7 md:h-auto sm:h-auto mobile:h-auto  sm:mb-7 ">
        <div className=" 2xl:w-[30%] md:hidden sm:hidden mobile:hidden lg:flex 2xl:felx xl:flex   xl:w-[30%] lg:w-[100%] md:w-[100%]   sm:w-[100%] mobile:w-[100%] center 2xl:pl-12 xl:pl-12 border-r ">
          <div className=" w-[270px] h-[344px] flex flex-col gap-4 2xl:w-[270px] 2xl:h-[344px] xl:w-[270px] xl:h-[344px] xl:items-start 2xl:items-start lg:items-center lg:w-[100%]  md:items-center md:w-[100%] sm:items-center sm:w-[100%]   mobile:items-center mobile:w-[100%] ">
            {heroLink.map((value, index) => {
              return (
                <li key={index} className=" hover:cursor-pointer hover:text-myTheme  list-none hover:underline font-normal text-base text-black 2xl:text-[20px] xl:text-[18px] lg:text-[16px] md:text-[18px] sm:text-[15px] mobile:text-[15px]" id={index}>
                  {value.name}
                </li>
              );
            })}
          </div>
        </div>
        <div className="  2xl:w-[70%] xl:w-[70%] lg:w-[100%] md:w-[100%] sm:w-[100%] 2xl:h-[500px] xl:h-[500px] lg:h-[100px] center">
          <div className=" bg-black w-[892px] py-6   gap-4 2xl:w-[892px] 2xl:h-[344px] xl:w-[892px] xl:h-[344px] lg:w-[892px]  md:w-[100%] sm:w-[100%] mobile:w-[100%] ">
            {/* inner first div */}
             <div className="flex justify-center it  "> 
                 {/* mera textarea  */}
              <div className='flex flex-col justify-center gap-1   '>
                <div id='firstline' className='flex  items-center gap-[24px]'>
                  <div><img className=' 2xl:w-10 xl:w-10 lg:w-10 sm:w-6 md:w-6 mobile:w-6 2xl:h-12 xl:h-12 lg:h-12 md:h-7 sm:h-7 mobile:h-7' src={apple} alt="" /></div>
                  <h5 className='font-normal 2xl:text-base  xl:text-base lg:text-base sm:text-xs md:text-xs mobile:text-xs text-white'>iPhone 14 Series</h5>
                </div>
                <div>
                  <h1 className=' 2xl:font-semibold  xl:font-semibold  lg:font-semibold  md:font-normal sm:font-normal mobile:font-normal   text-white leading-[60px] 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-4xl mobile:text-xl'><span className='flex flex-col gap-3'><span >Up to 10% </span> <span>off Voucher</span> </span>  </h1>
                </div>
                <div className='flex font-semibold - text-base gap-2  text-white  hover:cursor-pointer hover:text-myTheme'> Shop Now <span className='text-sm pt-1'><FaArrowRight /></span></div>
              </div>
                  {/* apple phone side */}
              <div id='apple phone side' className='-mb-20'> 
                <img  className='2xl:w-[496px] xl:w-[496px] 2xl:h-[320px] xl:h-[320px] lg:w-[250px] md:w-[200px]  sm:w-[200px] mobile:w-[180px]  ' src={hero} alt="" />
                </div>
            </div>
            {/* <div className='flex justify-center 2xl:mt-12 xl:mt-12  '><img className= 'mobile:w-16 sm:w-16  md:w-16 lg:w-20 xl:w-20 2xl:w-20 p-1 ' src={dot} alt="" /></div> */}
          </div>
        </div>
      </div>
      </div>
    </>
  );
}