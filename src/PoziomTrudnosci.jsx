import { useState, useRef } from "react";
import LogikaGry from "./LogikaGry"
import { Link } from "react-router-dom";

const PoziomTrudnosci = () => {
    const [czyWybranoTrudnosc, ustawTrudnosc] = useState(false);
    const ufoludy = useRef([
        {
            klucz: 'bueiowvuwi', tablicaZufo: ['pier', 'drug', 'trze', 'piąt']
        },
        {
            klucz: 'bueiuwi', tablicaZufo: ['piąt', 'szós', 'siód', 'osmo']
        },
        {
            klucz: 'bueiowvu', tablicaZufo: ['dziew', 'dzies', 'jede', 'siódviaq']
        }]);
    function ustawKosmitow(kosmiciDoWyjebania){
        for(let i = 0; i < kosmiciDoWyjebania; i++){
            ufoludy.current[0].tablicaZufo.length -= 1;
            ufoludy.current[1].tablicaZufo.length -= 1;
            ufoludy.current[2].tablicaZufo.length -= 1;
        }
        console.log(ufoludy.current[0].tablicaZufo);
        setTimeout(() => ustawTrudnosc(true), 1000);
    }
    console.log(ufoludy.current[0].tablicaZufo + ' grugie');
    if(czyWybranoTrudnosc) return <LogikaGry ufoludy={ufoludy}/>
    return (
        <div className="flex justify-center text-center">
            <div className="w-64 bg-slate-700 h-80 rounded-3xl mt-44">
                <div className="grid justify-center text-2xl text-white space-y-7">
                    Wybierz poziom trudności
                    <div className="space-y-8 mt-4">
                        <p className="transition duration-300 ease-in-out delay-150 cursor-pointer hover:text-cyan-100 hover:bg-emerald-500 rounded-2xl" onClick={() => ustawKosmitow(2)}>Łatwy</p> 
                        <p className="transition duration-300 ease-in-out delay-150 cursor-pointer hover:text-cyan-100 hover:bg-emerald-500 rounded-2xl" onClick={() => ustawKosmitow(1)}>Średni</p> 
                        <p className="transition duration-300 ease-in-out delay-150 cursor-pointer hover:text-cyan-100 hover:bg-emerald-500 rounded-2xl" onClick={() => ustawKosmitow(0)}>Trudny</p>
                        <p className="transition duration-300 ease-in-out delay-150 cursor-pointer hover:text-cyan-100 hover:bg-emerald-500 rounded-2xl"><Link to={"/"}>Wróć na stronę główną</Link></p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default PoziomTrudnosci;
