import React, { useState, useEffect } from "react";
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
import FormatPrice from "./FormatPrice";
import { useDispatch } from "react-redux";
import {
  deleteItem,
  minusQuantity,
  plusQuantity,
  resetCart,
} from "../redux/shoppersSlice";

const CartPageComponent = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state: any) => state.shopper.productData);
  const [warningMsg, setWarningMsg] = useState(false);

  useEffect(() => {
    setWarningMsg(true);
  }, []);

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
                        <p className="text-sm text-zinc-500 flex items-center gap-1">
                          <span className="bg-blue rounded-full text-white text-xs w-4 flex items-center justify-center">
                            <TbReload className="rotate-180" />
                          </span>
                          Free 30-day returns
                        </p>
                        {/* buttons */}
                        <div className="mt-2 flex items-center gap-6">
                          <button
                            onClick={() => dispatch(deleteItem(item._id))}
                            className="text-sm underline underline-offset-2 decoration-[1px] text-zinc-600 hover:no-underline hover:text-blue duration-300"
                          >
                            Remove
                          </button>
                          <div className="w-28 h-9 border border-zinc-400 rounded-full text-base font-semibold text-black flex items-center justify-between px-3">
                            <button
                              onClick={() =>
                                dispatch(
                                  minusQuantity({
                                    _id: item._id,
                                    title: item.title,
                                    description: item.description,
                                    image: item.image,
                                    price: item.price,
                                    oldPrice: item.oldPrice,
                                    quantity: 1,
                                    brand: item.brand,
                                    category: item.category,
                                  })
                                )
                              }
                              className="text-base w-5 h-5 text-zinc-600 hover:bg-[#74767c] hover:text-white rounded-full flex items-center justify-center cursor-pointer duration-200"
                            >
                              <HiMinusSmall />
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              onClick={() =>
                                dispatch(
                                  plusQuantity({
                                    _id: item._id,
                                    title: item.title,
                                    description: item.description,
                                    image: item.image,
                                    price: item.price,
                                    oldPrice: item.oldPrice,
                                    quantity: 1,
                                    brand: item.brand,
                                    category: item.category,
                                  })
                                )
                              }
                              className="text-base w-5 h-5 text-zinc-600 hover:bg-[#74767c] hover:text-white rounded-full flex items-center justify-center cursor-pointer duration-200"
                            >
                              <MdOutlineAdd />{" "}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/4 text-right flex flex-col items-end gap-1">
                      <p className="font-semibold text-xl text-[#2a8703]">
                        <FormatPrice amount={item.price * item.quantity} />
                      </p>
                      <p className="text-sm line-through text-zinc-500">
                        <FormatPrice amount={item.oldPrice * item.quantity} />
                      </p>
                      <div className="flex items-center text-xs gap-2">
                        <p className="bg-green-200 text-[8px] uppercase px-2 py-[1px]">
                          You save{" "}
                        </p>
                        <p className="text-[#2a8703] font-semibold">
                          <FormatPrice
                            amount={
                              item.oldPrice * item.quantity -
                              item.price * item.quantity
                            }
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => dispatch(resetCart())}
                className="w-44 bg-red-500 text-white h-10 rounded-full text-base font-semibold hover:bg-red-800 duraction-300"
              >
                Reset Cart
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/3 p-4 mt-24 h-[500px] border-[1px] border-zinc-400 rounded-md flex flex-col justify-center gap-4">
          <button className="bg-blue hover:bg-hoverBg w-full text-white h-10 rounded-full font-semibold duration-300">
            Continue to checkout
          </button>
          <p className="text-sm text-center text-red-500 -mt-4 font-semibold">
            Please sing in for checkout
          </p>
          {warningImg && (
            <div className="bg-[#002d58] text-white p-2 rounded-lg flex items-center justify-between gap-4">
              <Image className="w-8" src={warningImg} alt="warningImg" />
              <p className="text-sm">
                Items in your cart have reduced prices. Check out now for extra
                savings!
              </p>
              <IoMdClose />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPageComponent;
