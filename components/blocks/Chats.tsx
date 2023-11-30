export default function RecentChatsBlock () {
    return (
        <div className="w-[691px] h-[546px] flex-col justify-start items-center inline-flex">
    <div className="px-2.5 flex-col justify-center items-center flex">
        <div className="self-stretch h-[46px] px-5 rounded-[10px] justify-center items-center gap-6 inline-flex">
            <div className="w-60 px-2.5 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="bg-slate-100 rounded-tl-[10px] rounded-tr-[10px]" />
                <div className="flex-col justify-center items-center gap-2.5 flex">
                    <div className="p-1 rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                        <div className="w-8 h-[31.53px] px-[5.32px] py-[3.80px] justify-center items-center flex" />
                        <div className="text-black text-base font-medium font-['Inter'] leading-normal">All Chats</div>
                    </div>
                </div>
            </div>
            <div className="w-60 px-2.5 flex-col justify-start items-center gap-2.5 inline-flex">
                <div className="justify-center items-center gap-2.5 inline-flex">
                    <div className="flex-col justify-center items-center gap-2.5 inline-flex">
                        <div className="h-[46px] rounded-[10px]" />
                    </div>
                </div>
                <div className="flex-col justify-center items-center gap-2.5 flex">
                    <div className="p-1 rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                        <div className="w-[30px] h-[30px] relative" />
                        <div className="text-black text-base font-medium font-['Inter'] leading-normal">Starred Models</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="px-5 pt-2.5 pb-5 bg-slate-100 rounded-[15px] flex-col justify-center items-center flex">
        <div className="px-5 pb-5 bg-white rounded-[15px] flex-col justify-start items-start gap-1.5 flex">
            <div className="justify-center items-end gap-[45px] inline-flex">
                <div className="w-[41px] h-[38px] text-slate-500 text-sm font-medium font-['Inter'] leading-normal">Today</div>
            </div>
            <div className="w-[611px] h-[50px] px-2.5 py-1 bg-white border-b border-slate-100 justify-start items-center gap-10 inline-flex">
                <div className="w-[34px] h-[34px] justify-center items-center flex">
                    <div className="pl-[5px] pr-[7px] pt-[5px] pb-[7px] bg-gray-900 rounded-md justify-center items-center inline-flex">
                        <div className="w-[22px] h-[22px] relative flex-col justify-start items-start flex">
                            <div className="w-[16.50px] h-[16.50px] relative">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="justify-center items-center gap-2.5 flex">
                    <div className="justify-start items-center gap-2.5 flex">
                        <div className="w-[123px] text-black text-base font-medium font-['Inter'] leading-normal">Gift Ideas</div>
                    </div>
                    <div className="w-6 h-6 relative" />
                </div>
                <div className="grow shrink basis-0 text-black text-base font-medium font-['Inter'] leading-normal">Mistral - 7b</div>
                <div className="justify-center items-start gap-3 flex">
                    <div className="w-6 h-6 relative" />
                    <div className="w-6 h-6 relative" />
                    <div className="w-6 h-6 relative" />
                </div>
            </div>
            <div className="w-[611px] h-[50px] px-2.5 py-1 bg-white border-b border-slate-100 justify-start items-center gap-10 inline-flex">
                <div className="w-[34px] h-[34px] justify-center items-center flex">
                    <div className="pl-[5px] pr-[7px] pt-[5px] pb-[7px] bg-gray-900 rounded-md justify-center items-center inline-flex">
                        <div className="w-[22px] h-[22px] relative flex-col justify-start items-start flex">
                            <div className="w-[16.50px] h-[16.50px] relative">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="justify-center items-center gap-2.5 flex">
                    <div className="justify-start items-center gap-2.5 flex">
                        <div className="w-[123px] text-black text-base font-medium font-['Inter'] leading-normal">Code Assistant</div>
                    </div>
                    <div className="w-6 h-6 relative" />
                </div>
                <div className="grow shrink basis-0 text-black text-base font-medium font-['Inter'] leading-normal">CodeLlama - V2</div>
                <div className="justify-center items-start gap-3 flex">
                    <div className="w-6 h-6 relative" />
                    <div className="w-6 h-6 relative" />
                    <div className="w-6 h-6 relative" />
                </div>
            </div>
            <div className="h-[60px] justify-center items-end gap-[45px] inline-flex">
                <div className="w-[78px] h-[38px] text-slate-500 text-sm font-medium font-['Inter'] leading-normal">Last 7 Days</div>
            </div>
            <div className="w-[611px] h-[50px] px-2.5 py-1 bg-white border-b border-slate-100 justify-start items-center gap-10 inline-flex">
                <div className="w-[34px] h-[34px] justify-center items-center flex">
                    <div className="pl-[5px] pr-[7px] pt-[5px] pb-[7px] bg-gray-900 rounded-md justify-center items-center inline-flex">
                        <div className="w-[22px] h-[22px] relative flex-col justify-start items-start flex">
                            <div className="w-[16.50px] h-[16.50px] relative">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="justify-center items-center gap-2.5 flex">
                    <div className="justify-start items-center gap-2.5 flex">
                        <div className="w-[123px] text-black text-base font-medium font-['Inter'] leading-normal">Image Creator</div>
                    </div>
                    <div className="w-6 h-6 relative" />
                </div>
                <div className="grow shrink basis-0 text-black text-base font-medium font-['Inter'] leading-normal">DALLE-3</div>
                <div className="justify-center items-start gap-3 flex">
                    <div className="w-6 h-6 relative" />
                    <div className="w-6 h-6 relative" />
                    <div className="w-6 h-6 relative" />
                </div>
            </div>
            <div className="w-[611px] h-[50px] px-2.5 py-1 bg-white border-b border-slate-100 justify-start items-center gap-10 inline-flex">
                <div className="w-[34px] h-[34px] justify-center items-center flex">
                    <div className="pl-[5px] pr-[7px] pt-[5px] pb-[7px] bg-gray-900 rounded-md justify-center items-center inline-flex">
                        <div className="w-[22px] h-[22px] relative flex-col justify-start items-start flex">
                            <div className="w-[16.50px] h-[16.50px] relative">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="justify-center items-center gap-2.5 flex">
                    <div className="justify-start items-center gap-2.5 flex">
                        <div className="w-[123px] text-black text-base font-medium font-['Inter'] leading-normal">Finance Planner</div>
                    </div>
                    <div className="w-6 h-6 relative" />
                </div>
                <div className="grow shrink basis-0 text-black text-base font-medium font-['Inter'] leading-normal">Mistral - 7b</div>
                <div className="justify-center items-start gap-3 flex">
                    <div className="w-6 h-6 relative" />
                    <div className="w-6 h-6 relative" />
                    <div className="w-6 h-6 relative" />
                </div>
            </div>
            <div className="h-[60px] justify-center items-end gap-[45px] inline-flex">
                <div className="w-[88px] h-[38px] text-slate-500 text-sm font-medium font-['Inter'] leading-normal">Last 30 Days</div>
            </div>
            <div className="w-[611px] h-[50px] px-2.5 py-1 bg-white border-b border-slate-100 justify-start items-center gap-10 inline-flex">
                <div className="w-[34px] h-[34px] justify-center items-center flex">
                    <div className="pl-[5px] pr-[7px] pt-[5px] pb-[7px] bg-gray-900 rounded-md justify-center items-center inline-flex">
                        <div className="w-[22px] h-[22px] relative flex-col justify-start items-start flex">
                            <div className="w-[16.50px] h-[16.50px] relative">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="justify-center items-center gap-2.5 flex">
                    <div className="justify-start items-center gap-2.5 flex">
                        <div className="w-[123px] text-black text-base font-medium font-['Inter'] leading-normal">Web Search</div>
                    </div>
                    <div className="w-6 h-6 relative" />
                </div>
                <div className="grow shrink basis-0 text-black text-base font-medium font-['Inter'] leading-normal">Phind - 7b</div>
                <div className="justify-center items-start gap-3 flex">
                    <div className="w-6 h-6 relative" />
                    <div className="w-6 h-6 relative" />
                    <div className="w-6 h-6 relative" />
                </div>
            </div>
        </div>
    </div>
</div>
    );
};