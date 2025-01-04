
const Loading = () => {
    return(
        <div class="p-4 flex-1">
        <div class="animate-pulse flex space-x-6 items-center">
            <div class="rounded-full bg-slate-400 h-10 w-10"></div>
            <div class="flex-1 space-y-3 py-1">
            <div class="h-3 bg-slate-400 "></div>
            <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4">
                <div class="h-3 bg-slate-400 col-span-2"></div>
                <div class="h-3 bg-slate-400 col-span-1"></div>
                </div>
                <div class="h-3 bg-slate-400"></div>
            </div>
            </div>
        </div>
        </div>
    )
};

export default Loading;