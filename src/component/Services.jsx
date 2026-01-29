import React from "react";

export default function Services() {
    return (
        <>

            <div className='flex'>
                <span className=' text-[24px] md:text-[32px] font-bold  bg-clip-text text-transparent bg-gradient-to-r from-white via-[#FFFFFF] to-[#BEFDF2] pb-[25px] md:pb-[35px] '>Services Breakdown</span>
            </div>
            <div className={"text-base font-normal text-white/[82%] grid grid-cols-1 md:grid-cols-3 gap-8"}>
                {/* Column1 */}
                <div className="relative  pt-[19.5px] pb-[25px] px-[20px] md:py-[34px] md:px-[30px] rounded-2xl shadow-xl overflow-hidden border border-[#A6AFB4]/30
                before:absolute before:left-1/2  before:-translate-x-1/2 before:bottom-0 before:z-10 before:h-[1px] before:w-[135px] 
                 before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent before:content-['']">

                    <div className="bg-gradient-to-br from-[#25C1A5] via-[#21B5D9BA]/[73%] to-[#070D1F] opacity-20 absolute left-0 top-0 h-full w-full"></div>
                    <img src="./assets/icon/CoreServices.svg" alt="CoreServices" />
                    <h3 className="text-[22px] font-bold text-white py-4">Core Services</h3>
                    <p className="pb-4">
                        <span className={'text-base font-bold text-white'}>Agentic Framework Integration</span> transform your existing products with intelligent, autonomous AI
                        capabilities tailored to your specific business needs.
                    </p>
                    <p className="pb-4">
                        <span className={'text-base font-bold text-white'}>Product Management as a Service (PMaaS)</span> end-to-end product lifecycle expertise that combines strategic vision
                        with agile execution for faster market delivery.
                    </p>
                    <p>
                        <span className={'text-base font-bold text-white'}>AI Strategy Consulting</span> expert guidance on identifying and implementing AI opportunities that
                        create competitive advantage for your business.
                    </p>
                </div>

                {/* Column2 */}
                <div className="relative  pt-[19.5px] pb-[25px] px-[20px] md:py-[34px] md:px-[30px] rounded-2xl shadow-xl overflow-hidden border border-[#A6AFB4]/30  
                 before:absolute before:left-1/2  before:-translate-x-1/2 before:top-0 before:z-10 before:h-[1px] before:w-[135px] 
                 before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent before:content-['']">
                    <div className="bg-gradient-to-br from-[#25C1A5] via-[#21B5D9BA]/[73%] to-[#070D1F] opacity-20 opacity-12 absolute left-0 top-0 h-full w-full"></div>
                    <img src="./assets/icon/SatelliteServices.svg" alt="SatelliteServices" />
                    <h3 className="text-[22px] font-bold text-white py-4">Satellite Services</h3>

                    <p className="mb-4">
                        <span className={'text-base font-bold text-white'}>Development Services</span> custom AI development and integration services that seamlessly connect
                        your existing systems with advanced AI capabilities.
                    </p>

                    <p className="pb-4">
                        <span className={'text-base font-bold text-white'}>AI Consultation Services</span> strategic guidance on AI implementation, helping you navigate
                        technology selection and integration challenges.
                    </p>

                    <p>
                        <span className={'text-base font-bold text-white'}>AI Education & Training</span> Practical workshops and knowledge transfer that prepare your team to
                        successfully work with and leverage AI technologies.
                    </p>
                </div>

                {/* Column3 */}
                <div className="relative  pt-[19.5px] pb-[25px] px-[20px] md:py-[34px] md:px-[30px] rounded-2xl shadow-xl overflow-hidden border border-[#A6AFB4]/30
                  before:absolute before:left-1/2  before:-translate-x-1/2 before:bottom-0 before:z-10 before:h-[1px] before:w-[135px] 
                   before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent before:content-['']">
                    <div className="bg-gradient-to-br from-[#25C1A5] via-[#21B5D9BA]/[73%] to-[#070D1F] opacity-20 opacity-12 absolute left-0 top-0 h-full w-full"></div>
                    <img src="./assets/icon/Industries.svg" alt="SatelliteServices" />
                    <h3 className="text-[22px] font-bold text-white py-4">Industries</h3>
                    <ul className="space-y-2 text-base font-normal text-white/[82%]">
                        <li>SaaS Platforms</li>
                        <li>IoT & Connected Devices</li>
                        <li>Space & Defense</li>
                        <li>Fintech Solutions</li>
                        <li>Real Estate Technology</li>
                        <li>Agritech Systems</li>
                        <li>Legal Technology</li>
                        <li>Healthcare Solutions</li>
                    </ul>
                </div>
            </div>
            
        </>
    );
}
