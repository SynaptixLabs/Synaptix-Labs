import React, { useState } from "react";
import { Menu, Expand } from "lucide-react";

export default function FirstReply() {
    const [isEditing, setIsEditing] = useState(false);
    const [documentText, setDocumentText] = useState({
        introduction: "1. Introduction",
        purpose: "1.1 Purpose",
        content: "The Real Estate Trading SaaS platform aims to streamline buying, selling, and renting properties online. It will provide real estate agents, buyers, and sellers with a seamless and efficient digital trading environment."
    });

    const handleCopy = () => {
        const textToCopy = `${documentText.introduction}\n${documentText.purpose}\n${documentText.content}`;
        navigator.clipboard.writeText(textToCopy).then(() => {
        });
    };

    return (
        <div className="my-[20px]">
            <div className="w-fit bg-gradient-to-r from-[#36C1B1] to-[#3CDD61] p-[1px] rounded-[20px]">
                <div className="bg-[#233943] text-white p-[30px] w-full max-w-5xl rounded-[20px]">
                    <div className="flex items-start justify-between gap-3 mb-6">
                        <div className="flex items-start gap-2">
                            <img src="./assets/ai-chat/Menulist.svg" alt="" />
                            <h3 className="text-2xl/[28px] font-bold text-white">
                                Requirement Document for Real estate trading SaaS platform
                            </h3>
                        </div>
                        <img src="./assets/ai-chat/Expand.svg" alt="" />
                    </div>

                    {!isEditing && (
                        <>
                            <p className="text-xl font-medium pb-2">{documentText.introduction}</p>
                            <p className="text-xl font-medium pb-2">{documentText.purpose}</p>
                            <p className="text-base/[24px] text-white font-normal">
                                {documentText.content}
                            </p>
                        </>
                    )}

                    {isEditing && (
                        <>
                            <input className="text-xl w-full font-medium mb-2" defaultValue={documentText.introduction} onChange={(e) => setDocumentText({ ...documentText, introduction: e.target.value })}></input>
                            <input className="text-xl w-full font-medium mb-2" defaultValue={documentText.purpose} onChange={(e) => setDocumentText({ ...documentText, purpose: e.target.value })}></input>
                            <textarea className="w-full text-base/[24px] text-white font-normal h-fit" defaultValue={documentText.content} onChange={(e) => setDocumentText({ ...documentText, content: e.target.value })}></textarea>
                        </>
                    )}
                </div>
            </div>

            <div className="flex gap-[10px] mt-[20px]">
                <button className="px-[12px] py-[7px] rounded-[5px] flex items-center justify-center gap-[5px] bg-[#233943]">
                    <img src="./assets/ai-chat/PDF.svg" alt="" /> <span>PDF</span>
                </button>
                <button className="px-[12px] py-[7px] rounded-[5px] flex items-center justify-center gap-[5px] bg-[#233943]" onClick={handleCopy}>
                    <img src="./assets/ai-chat/CopyReply.svg" alt="" /> <span>Copy</span>
                </button>
                <button className="px-[12px] py-[7px] rounded-[5px] flex items-center justify-center gap-[5px] bg-[#233943]" onClick={() => setIsEditing(!isEditing)}>
                    <img src="./assets/ai-chat/EditReply.svg" alt="" /> <span>{isEditing ? 'Save' : 'Edit'}</span>

                </button>
            </div>
        </div>
    );
}
