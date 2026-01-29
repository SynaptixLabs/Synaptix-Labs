import { useState } from "react";

function TableOfContents({ headingText, setSelectedSection }) {
    const [activeId, setActiveId] = useState(1); 


    return (
        <div className="mt-[20px] mb-[25px] md:mb-0 md:mt-0 flex items-center justify-end text-white md:p-4 sticky top-[100px]">
            <div className="w-full md:max-w-fit overflow-auto conversation-container max-h-[790px]">
                <h2 className="text-sm mb-4">Table of contents</h2>
                <div className="space-y-4">
                    {headingText?.map((item) => (
                        (item?.text && 
                        <div key={item.id} className="border-t border-white/20  pt-2">
                            <button
                                onClick={() => {
                                    setSelectedSection(item.id);
                                    setActiveId(item.id); 
                                }}
                                className={`text-[18px] text-left hover:text-[#2fddbc] cursor-pointer ${
                                    item.id === activeId ? 'text-[#2fddbc] hover:text-[#2fddbc]' : 'hover:text-[#2fddbc] text-white'
                                }`}
                            >
                                {item.text}
                            </button>
                        </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
}
export default TableOfContents;