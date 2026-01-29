import React from "react";

const SynaptixLabs = ({synaptixLabsToday}) => {

  const labs = synaptixLabsToday?.data?.LabsList || [];

  const cards = labs?.reduce((acc, lab, index) => {
    acc?.push({
      title: lab.title || "",
      description: lab.content || ""
    });
  
    const isPairEnd = (index + 1) % 2 === 0;
    const isNotLastGroup = index + 1 < labs.length;
  
    if (isPairEnd && isNotLastGroup) {
      acc?.push({ title: "", description: "" }, { title: "", description: "" });
    }
  
    return acc;
  }, []);

  return (
    <section className="text-white my-[50px] md:my-[150px] px-4 md:px-0">
      <div className="text-center mb-[25px] md:mb-16 ">
        <span className="font-['Helvetica Now Display'] font-bold text-[32px] md:text-[42px] leading-[46px] tracking-[-0%] bg-clip-text text-transparent bg-[linear-gradient(90deg,#FFFFFF_39.34%,#BEFDF2_100%)] mb-5">
         {synaptixLabsToday?.data?.mainTitle}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-[15px] md:gap-8 max-w-[1094px] mx-auto">
        {cards.map((card, index) => (
          (
            card?.title ?  <div key={index} className="p-6 rounded-2xl col-span-1 md:col-span-2 bg-no-repeat bg-[cover] bg-[url('/assets/about/cardLabs.png')]">
            <h3 className="text-base md:text-lg font-semibold leading-snug mb-3">
              {card.title}
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {card?.description}
            </p>
          </div> : <div key={index} className="hidden md:block p-6 rounded-2xl shadow-lg col-span-1"></div>
          )
        ))}
        
      </div>
    </section>
  );
};

export default SynaptixLabs;
