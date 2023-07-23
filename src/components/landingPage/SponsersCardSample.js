import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const SponsersCardSample = () => {
  const [sponsersCards, setSponsersCards] = useState([]);
  const soldItems = async () => {
    try {
      const SoldItems = await axios.get(
        "http://localhost:5000/api/IngredientSold"
      );
      setSponsersCards(SoldItems.data);
    } catch {}
  };

  useEffect(() => {
    soldItems();
  }, []);

  return (
    <>
      {sponsersCards.length !== 0 ? (
        <>
          <div className="p-20">
            <div className="text-center mb-16">
              <h3 className="text-3xl sm:text-4xl uppercase leading-normal font-extrabold tracking-tight text-gray-900">
                special ingredients
              </h3>
            </div>
            <div className="flex flex-wrap items-center justify-center">
              {sponsersCards?.map((e) => {
                return (
                  <>
                    <div
                      key={e._id}
                      // onClick={() => handelIngredient(e._id,e.ingredientName,e.ingredientType)}
                      className={` flex-shrink-0 m-1 relative overflow-hidden ${
                        e.ingredientType == "vegetables"
                          ? "bg-[#219D80]"
                          :e.ingredientType == "fruits" ? "bg-[#E8AA42]"
                          : "bg-[#847d73]" 
                      }  rounded-lg max-w-xs shadow-lg w-48 h-60 hover:scale-110 hover:cursor-pointer`}
                    >
                      <svg
                        className="absolute bottom-0 left-0 mb-8"
                        viewBox="0 0 375 283"
                        fill="none"
                        style={{ transform: "scale(1.5)", opacity: "0.1" }}
                      >
                        <rect
                          x="159.52"
                          y={175}
                          width={152}
                          height={152}
                          rx={8}
                          transform="rotate(-45 159.52 175)"
                          fill="white"
                        />
                        <rect
                          y="107.48"
                          width={152}
                          height={152}
                          rx={8}
                          transform="rotate(-45 0 107.48)"
                          fill="white"
                        />
                      </svg>
                      <div className="relative pt-10 px-10 flex items-center justify-center">
                        <div
                          className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                          style={{
                            background:
                              "radial-gradient(black, transparent 60%)",
                            transform:
                              "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                            opacity: "0.2",
                          }}
                        />
                        <img
                          className="relative w-40 h-32"
                          src={`http://localhost:5000/${e.img}`}
                          alt=""
                        />
                      </div>
                      <div className=" text-white px-6 pb-6 mt-6">
                        <span className="block opacity-75 -mb-1">
                          {e.ingredientType}
                        </span>
                        <div className="flex justify-between">
                          <span className="block font-semibold ">
                            {e.ingredientName}
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default SponsersCardSample;
