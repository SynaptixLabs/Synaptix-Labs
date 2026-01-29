import Image from "next/image";
import ImageWithSkeleton from "../ImageWithSkeleton";

const Banner = ({trendsChilds}) => {
    const handleBackClick = () => {
        window.history.back();
    };

 
    

    return (
        <div className="trends-section mx-auto text-white relative">
            <div className="relative">
                <button
                    className="absolute cursor-pointer left-[35px] top-[35px] text-[18px] font-[500] leading-[28.01px]  z-30  tracking-0 align-middle flex items-center gap-3"
                    onClick={handleBackClick}
                >
                    <img src="/assets/blog/backarrow.svg" alt="" /> Back
                </button>
                { trendsChilds[0]?.previewImage?.url &&
                
               
                  
                  <ImageWithSkeleton  alt={`Trend`}
                                 imageClasname={`hidden md:block w-full object-cover rounded-[20px] ${trendsChilds[0]?.previewImage?.url ? 'max-h-[675px] min-h-[675px]' : 'min-h-[675px]' }`} 
                                 src={`${trendsChilds[0]?.previewImage?.url}`}/>
                  
                  }




                <div className=" relative md:absolute  md:flex items-end rounded-2xl inset-0" style={{ background: 'linear-gradient(360deg, rgba(0, 0, 0, 0.44) 32.37%, rgba(0, 0, 0, 0.2332) 47.77%, rgba(0, 0, 0, 0.00456038) 100%)' }}>
                    <div className=' px-[15px] pb-[30px] pt-0  md:p-[25px]'>

                        <div className='relative mb-[20px] md:mb-0'>
                         { trendsChilds[0]?.category?.name &&   <span className='absolute left-[12px] bottom-0 md:left-0 md:bottom-0 md:relative mb-[17px] flex inline-flex px-[20px] py-[6px] font-normal text-[16px] leading-[16px] tracking-0 border rounded-full border-white text-white'>{ trendsChilds[0]?.category?.name}</span>} 
                            { trendsChilds[0]?.previewImage?.url && 
                               <ImageWithSkeleton  alt={`Trend`}
                                 imageClasname={'mb-[20px] w-full object-cover  mx-auto md:mx-0'} 
                                 className=' block md:hidden w-full h-auto rounded-2xl' 
                                 src={`${trendsChilds[0]?.previewImage?.url}`}/>
                            
                            }
                        </div>

                        <h2 className="font-bold text-[22px] leading-[26px] tracking-0 mb-[8px] max-w-[569px]">
                           {trendsChilds[0]?.title}
                        </h2>
                        <p className="font-normal text-[16px] leading-[20px] text-white/85 tracking-0 mb-[15px] max-w-[625px]">
                        {trendsChilds[0]?.description}</p>
                        <div className="flex items-center rounded-lg w-fit text-white">
                          { trendsChilds[0]?.author?.authImage?.url &&   <img
                                 src={`${trendsChilds[0]?.author?.authImage?.url}`}
                                alt="Profile"
                                className="w-[60px] h-[60px] rounded-full object-cover me-[15px]"
                            />}
                            <div>
                                <h2 className="text-[18px] text-white font-semibold">{trendsChilds[0]?.author?.authName}</h2>
                                <p className="text-[#36C1B1] text-[16px]">{trendsChilds[0]?.uploaded}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;
