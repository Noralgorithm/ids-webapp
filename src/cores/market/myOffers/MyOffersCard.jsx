import React from "react";
import MarketCard from "../MarketCard";
import { TbCurrencyDollar } from "react-icons/tb";
import { FiClock } from "react-icons/fi";

function MyOffersCard({ setEditMyOfferModal, setMyOffersBuyModal }) {
  return (
    <MarketCard>
      <section className="w-full h-4/6 flex items-center">
        <div className="h-full w-1/2 flex flex-col justify-around">
          <div className="flex gap-1 items-center">
            <TbCurrencyDollar
              size="1.4rem"
              color="white"
              className="bg-gradient-offside rounded-full p-[1px]"
            />
            <h1 className="text-offside-titles font-bold text-lg">
              100.100.100
            </h1>
          </div>
          <div className="flex gap-1 items-center">
            <FiClock size="1.4rem" />
            <h1 className="text-offside-titles font-bold text-lg">2h 20s</h1>
          </div>
        </div>
        <div className="h-full w-1/2 flex flex-col justify-between items-center">
          <button
            className="bg-gradient-offside text-white px-11 py-1 rounded-full"
            onClick={() => {
              setEditMyOfferModal(true);
            }}
          >
            Editar
          </button>
          <button
            className="bg-gradient-offside text-white px-2 py-1 rounded-full"
            onClick={() => {
              setMyOffersBuyModal(true);
            }}
          >
            Compra directa
          </button>
        </div>
      </section>
    </MarketCard>
  );
}

export default MyOffersCard;
