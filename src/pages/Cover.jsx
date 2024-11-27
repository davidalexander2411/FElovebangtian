function Cover() {
    return (
        <>
        <div className="h-screen w-screen">
        <div className="w-full h-full relative">
                <img src="../../public/img/background.png" className="w-full h-full object-cover absolute"/>
                <img src="../../public/img/bantu.png" className="bantu-image"/>
                <img src="../../public/img/mager fix.png" className="mager-fix"/>
                {/* <img src="../../public/img/bantu pls.png" className="bantu-fix"/> */}
            </div>
            <div className="flex justify-evenly absolute bottom-0 w-screen pb-5">
                <div className="flex w-1/3 justify-center space-x-40">
                    <a href="/login"><img src="../../public/img/white.png" className="w-60 h-32 hover:scale-125 active:scale-110 transition-all cursor-pointer" /></a>
                    <a href="/register"><img src="../../public/img/black.png" className="w-60 h-32 hover:scale-125 active:scale-110 transition-all cursor-pointer" /></a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Cover;