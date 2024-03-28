const Kosmici = ({tablicaZKosmitami}) => {
    return (
        <>
        {tablicaZKosmitami.map(arg => 
            <div className="flex flex-col gap-y-3" key={arg.klucz}>
                {arg.tablicaZufo.map(subarg => 
                    <div key={subarg.klucz} className={`my-6 text-center bg-yellow-800 w-36`}>Kosmita nr {subarg.ufo}</div>
                )}
            </div>
        )}
        </>
     );
}
 
export default Kosmici;
