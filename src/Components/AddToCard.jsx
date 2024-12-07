
import { Link } from "react-router-dom";
import ReactStars from 'react-stars'




export function AddToCard({
 
  discount,
  productName,
  delPrice,
  newPrice,
  starRank,
  image,
  className,
  deleticon,
  hearticon,
  eyeicon,
  rating
}) {
  return (
    <>

      <div  className="main  bg-white drop-shadow-lg shadow-black   w-[270px] h-[370px] my-4 rounded mobile:m-auto ">
        <div className="img w-[270px] h-[250px] bg-[#F5F5F5] flex flex-col relative center ">
          <button
            className={` w-[55px] h-[26px] ${className} rounded text-white absolute left-3 right-4 bottom-1 top-3 ;`}
          >
            {discount}
          </button><div className="flex flex-col">
        { hearticon? <div className="absolute top-2 left-[240px] text-base bg-white p-1 rounded-full"> {hearticon}</div>:null}
      { deleticon?   <div className="absolute top-2 left-[240px] text-base bg-white p-1 rounded-full">{deleticon}</div>:null}
        { eyeicon? <div className="absolute top-9 left-[240px] text-base bg-white p-1 rounded-full"> {eyeicon}</div>:null}
          </div>{image?
          <img className=" w-[172px] h-[155px] m-auto hover:scale-125" src={image} alt="" />:<div className=" w-[172px] h-[155px]"></div>}
          <Link  className="bg-white hover:bg-black h text-white w-[100%] flex  items-end justify-center p-2 rounded-b">Add To Card</Link>
        </div>
        <div className="myp w-[201px] h-[84px] ml-2 gap-2 ">
          <h2 className="w-[201]  text-sm font-medium hover:text-myTheme">{productName}</h2>
          <p className="flex gap-4 my-2 w-[100px] h-6  text-base font-medium text-myTheme">
            <ins className="no-underline"> {newPrice}</ins> {"  "}
            <s className="text-slate-400 "> {delPrice}</s>
          </p>
          <div className="star-img flex gap-2">
            <span>{
                        <ReactStars
                        count={5}
                        value={rating?rating:3 }
                        // onChange={ratingChanged}
                        size={24}
                        edit={false}
                        color2={'#ffd700'} />
            }</span><span>{  }</span>
          </div>
        </div>
      </div>

    </>
  );
}