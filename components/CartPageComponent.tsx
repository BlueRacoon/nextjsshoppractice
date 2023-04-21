import React from "react";
import { useSelector } from "react-redux";
import {
  ship1Img,
  ship2Img,
  ship3Img,
  emptyCart,
  phoneImg,
  warningImg,
} from "../public/assets/images";
import { TbReload } from "react-icons/tb";
import { HiMinusSmall } from "react-icons/hi2";
import { MdOutlineAdd } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import { StoreProduct } from "../type";

const CartPageComponent = () => {
  const productData = useSelector((state: any) => state.shopper.productData);

  return (
    <div className="w-full py-10">
      <div className="w-full flex gap-10">
        <div className="w-2/3 flex flex-col gap-5 px-5">
          <h1 className="text-2xl font-bold text-black">
            Cart{" "}
            <span className="text-lightText font-normal">
              ({productData.length} items)
            </span>
          </h1>
          {/* pickup details */}
          <div>
            <div className="text-xl font-bold flex items-center gap-2 mb-2">
              <Image className="w-10" src={phoneImg} alt="phoneImg" />
              <p>Pickup and delivery options</p>
            </div>
            <div className="w-full grid grid-cols-3 gap-4 text-xs">
              <div className="w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center p-2">
                <Image className="w-10" src={ship1Img} alt="shippingImg" />
                <p>Shipping</p>
                <p>Tomorrow</p>
                <p>Free</p>
              </div>
              <div className="w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center p-2">
                <Image className="w-10" src={ship2Img} alt="shippingImg" />
                <p>Pickup</p>
                <p>Tomorrow</p>
                <p>Free</p>
              </div>
              <div className="w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center p-2">
                <Image className="w-10" src={ship3Img} alt="shippingImg" />
                <p>Delivery</p>
                <p>Tomorrow</p>
              </div>
            </div>
            {/* Cart Product */}
            <div className="w-full p-5 border-[1px] border-zinc-400 rounded-md flex flex-col gap-4">
              <p className="font-semibold text-sm text-zinc-500">
                Sold and shipped by{" "}
                <span className="text-black font-semibold">Shoppers.com</span>{" "}
              </p>
              <div className="flex gap-2">
                <button className="px-2 py-[1px] text-[#004f94] text-sm border-[1px] border-[#004f9a] rounded-sm">
                  Best seller
                </button>
                <button className="px-2 py-[1px] text-red-600 text-sm border-[1px] border-red-600 rounded-sm">
                  Rollback
                </button>
              </div>
              {/* Items */}
              <div>
                {productData.map((item: StoreProduct) => (
                  <div
                    key={item._id}
                    className="flex items-center justify-between gap-4 border-b-[1px] border-b-zinc-200 pb-4"
                  >
                    <div className="w-3/4 flex items-center gap-2">
                      <Image
                        width={500}
                        height={500}
                        className="w-32"
                        src={item.image}
                        alt="productImg"
                      />
                      <div>
                        <h2 className="text-base text-zinc-900">
                          {item.title}
                        </h2>
                        <p className="text-sm text-zinc-500">
                          {item.description.substring(0, 120)}...
                        </p>
                        <p className="text-sm text-zinc-500">
                          price: ${item.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 p-4 mt-24 h-[500px] border-[1px] border-zinc-400 rounded-md flex flex-col justify-center gap-4"></div>
      </div>
    </div>
  );
};

export default CartPageComponent;
