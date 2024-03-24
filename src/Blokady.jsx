const Blokady = ({ stanBlokad }) => {
    //<div className="bg-red-800 w-44 h-44"></div>
    console.table(stanBlokad);
    return (
        <div className="flex justify-evenly mt-44">
            <div className="flex flex-row">
                <div className={`bg-zinc-300 w-24 h-44 opacity-${stanBlokad[0]}`}></div>
                <div className={`bg-zinc-900 w-24 h-44 ${stanBlokad[1]}`}></div>
            </div>
            <div className="flex flex-row">
                <div className={`bg-zinc-300 w-24 h-44 ${stanBlokad[2]}`}></div>
                <div className={`bg-zinc-900 w-24 h-44 ${stanBlokad[3]}`}></div>
            </div>
            <div className="flex flex-row">
                <div className={`bg-zinc-900 w-24 h-44 ${stanBlokad[4]}`}></div>
                <div className={`bg-zinc-300 w-24 h-44 ${stanBlokad[5]}`}></div>
            </div>
            <div className="flex flex-row">
                <div className={`bg-zinc-300 w-24 h-44 ${stanBlokad[6]}`}></div>
                <div className={`bg-zinc-900 w-24 h-44 ${stanBlokad[7]}`}></div>
            </div>
        </div>
    );
}
 
export default Blokady;