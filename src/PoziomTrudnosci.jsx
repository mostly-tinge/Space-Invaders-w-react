import { useState } from "react";
import LogikaGry from "./LogikaGry"

const PoziomTrudnosci = () => {
    const [czyWybranoTrudnosc, ustawTrudnosc] = useState(false);
    const ufoludy = [
        {
            klucz: 'bueiowvuwi', tablicaZufo: ['pier', 'drug', 'trze', 'piąt']
        },
        {
            klucz: 'bueiuwi', tablicaZufo: ['piąt', 'szós', 'siód', 'osmo']
        },
        {
            klucz: 'bueiowvu', tablicaZufo: ['dziew', 'dzies', 'jede', 'siódviaq']
        }];
    function ustawKosmitow(kosmiciDoWyjebania){
        for(let i = 0; i < kosmiciDoWyjebania; i++){
            ufoludy[0].tablicaZufo.pop();
            ufoludy[1].tablicaZufo.pop();
            ufoludy[2].tablicaZufo.pop();
        }
        ustawTrudnosc(true);
    }
    if(czyWybranoTrudnosc) return <LogikaGry kosmici={ufoludy}/>
    return (
        <div className="flex justify-center text-center">
            <div className="w-64 bg-slate-700 h-64 rounded-3xl mt-44">
                <div className="grid justify-center text-2xl text-white space-y-7">
                    <div className={`transition duration-300 ease-in-out delay-150 cursor-pointer`}>Wybierz poziom trudności
                    <div className="space-y-8 mt-4">
                        <p className="transition duration-300 ease-in-out delay-150 cursor-pointer hover:text-cyan-100 hover:bg-emerald-500 rounded-2xl" onClick={() => ustawKosmitow(2)}>Łatwy</p> 
                        <p className="transition duration-300 ease-in-out delay-150 cursor-pointer hover:text-cyan-100 hover:bg-emerald-500 rounded-2xl" onClick={() => ustawKosmitow(1)}>Średni</p> 
                        <p className="transition duration-300 ease-in-out delay-150 cursor-pointer hover:text-cyan-100 hover:bg-emerald-500 rounded-2xl" onClick={() => ustawKosmitow(0)}>Trudny</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default PoziomTrudnosci;