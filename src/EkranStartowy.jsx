import { useState } from "react";
import { Link } from "react-router-dom";
export default function EkranStartowy(){
    const [czyPoziomJestZaladowana, zaladujPoziomy] = useState(false);
    const [czyOpcjaJestZaladowana, zaladujOpcje] = useState(false);

    function zaladujOpcjeZamknijPoziomy(){
        zaladujPoziomy(false);
        zaladujOpcje(true);
    }
    function zaladujPoziomyZamknijOpcje(){
        zaladujPoziomy(true);
        zaladujOpcje(false);
    }
    function zamknijOba(){
        zaladujOpcje(false);
        zaladujPoziomy(false);
    }
    function ustawPoziomTrudnosci(arg){
        alert('Ustawiono '+arg+' poziom trudności');
    }
    return (  
        <div className="flex justify-center mt-44 h-40 opacity-80">
            <div className="bg-cyan-800 w-40 rounded-2xl space-y-10">
                <Link to={'/gra'}><div onClick={() => zamknijOba()} className=" transition ease-in-out delay-100 text-cyan-400 text-center hover:text-cyan-100 duration-300 hover:bg-emerald-500 rounded-2xl cursor-pointer" >Start</div></Link>
                <div onClick={() => zaladujOpcjeZamknijPoziomy()} className=" text-cyan-400 text-center cursor-pointer transition ease-in-out  hover:text-cyan-100 duration-300 hover:bg-emerald-500 rounded-2xl">Opcje</div>
                <div className="text-cyan-400 text-center cursor-pointer transition ease-in-out delay-150 hover:text-cyan-100 duration-300 hover:bg-emerald-500 rounded-2xl" onClick={() => zaladujPoziomyZamknijOpcje()}>Poziom Trudności</div>
                {czyOpcjaJestZaladowana && <div className="text-center text-cyan-200 bg-cyan-800 w-40 rounded-2xl h-40 space-y-10">
                    <div className="cursor-pointer transition ease-in-out delay-150 hover:text-cyan-100 duration-300 hover:bg-emerald-500 rounded-2xl">O projekcie</div>
                    <div className="cursor-pointer transition ease-in-out delay-150 hover:text-cyan-100 duration-300 hover:bg-emerald-500 rounded-2xl"><Link to={'/wyniki'}>wyniki graczy</Link></div>
                    <div className="cursor-pointer transition ease-in-out delay-150 hover:text-cyan-100 duration-300 hover:bg-emerald-500 rounded-2xl" onClick={() => zaladujOpcje(false)}>Zamknij okno</div>
                    </div>}
                {czyPoziomJestZaladowana && <div className="text-center text-cyan-200 bg-cyan-800 w-40 rounded-2xl h-40 space-y-5">
                    <div className="cursor-pointer transition ease-in-out delay-150 hover:text-cyan-100 duration-300 hover:bg-emerald-500 rounded-2xl" onClick={() => ustawPoziomTrudnosci('Łatwy')}>Łatwy</div>
                    <div className="cursor-pointer transition ease-in-out delay-150 hover:text-cyan-100 duration-300 hover:bg-emerald-500 rounded-2xl" onClick={() => ustawPoziomTrudnosci('Średni')}>Średni</div>
                    <div className="cursor-pointer transition ease-in-out delay-150 hover:text-cyan-100 duration-300 hover:bg-emerald-500 rounded-2xl" onClick={() => ustawPoziomTrudnosci('Trudny')}>Trudny</div>
                    <div className='cursor-pointer transition ease-in-out delay-150 hover:text-cyan-100 duration-300 hover:bg-emerald-500 rounded-2xl' onClick={() => zaladujPoziomy(false)}>Zamknij okno</div>
                    </div>}
            </div>
        </div>
    );
}