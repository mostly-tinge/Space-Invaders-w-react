const Statek = ({ruchStatku, marginesStatku, hpStatku}) => {
    return (
        <>
        <div className="absolute w-4 h-14 left-2/4 ml-6 bottom-40 mb-3 bg-red-800"></div>
        <div className="absolute w-14 h-4 left-2/4 ml-1 bottom-48 bg-red-800"></div>
        <div className={`absolute right-2/4 mr-3 bottom-44 text-red-800 text-6xl`}>{hpStatku}</div>
        <div className={ruchStatku}>
            <img src="Statek.png" id="statek" className={`w-12 h-20 mt-4 text-red-500 bg-stone-600 ${marginesStatku}`}></img>
        </div>
        </>
    );
}
export default Statek;
