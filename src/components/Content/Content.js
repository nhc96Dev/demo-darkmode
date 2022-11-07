import React from "react";
import { useSpring, animated } from "react-spring";
import checkIconMoble from "../../assets/mobile/checkpoint.svg";
import { FaUser } from "react-icons/fa";
import { BsFillCreditCardFill } from "react-icons/bs";
const Content = () => {
  const custmer = useSpring({ custmers: 10245, from: { custmers: 0 } });
  const card = useSpring({ cards: 12045, from: { cards: 0 } });
  return (
    <section className="md:flex md:flex-row">
      <div className="ml-[70px] font-bold flex items-center flex-col bg-gradient-to-b from-white/40 to-transparent shadow-custom rounded-3xl md:w-[30%]">
        <div className="mt-16 flex items-start gap-8">
          <FaUser size={"22px"} className="mt-3" />
          <div className="text-26">
            <animated.div>
              {custmer.custmers.to((val) => Math.floor(val))}
            </animated.div>
            <p className="text-13 font-semibold mb-9 md:text-16">Custmers</p>
          </div>
        </div>
        <div className="mt-16 flex items-start gap-8">
          <BsFillCreditCardFill size={"22px"} className="mt-3" />
          <div className="text-26">
            <animated.div>
              {card.cards.to((val) => Math.floor(val))}
            </animated.div>
            <p className="text-13 font-semibold mb-9 md:text-16">
              Cards Issued
            </p>
          </div>
        </div>
      </div>
      <div className="text-13 flex flex-col w-full mt-[90px] font-semibold md:mt-0 md:w-[40%] md:text-16 md:ml-[15%]">
        <div className="check-content">
          <img src={checkIconMoble} alt="" />
          <p>Card reports sent to your phone every weeks</p>
        </div>
        <div className="check-content">
          <img src={checkIconMoble} alt="" />
          <p>No external fees</p>
        </div>
        <div className="check-content">
          <img src={checkIconMoble} alt="" />
          <p>Set spending limits and restrictions</p>
        </div>
      </div>
    </section>
  );
};

export default Content;
