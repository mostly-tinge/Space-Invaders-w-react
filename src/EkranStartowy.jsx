import { useState, useRef } from "react";
import { Link } from "react-router-dom";
export default function EkranStartowy(){
    const [napis, zmienNapis] = useState([]);
    const [czyOProjekcieJestZaladowane, zaladujOProjekcie] = useState(false);
    const [czyOpcjaJestZaladowana, zaladujOpcje] = useState(false);
    const [czySterowanieJestZaladowane, zaladujSterowanie] = useState(false);
    const ktoryNapis = useRef(-1);
    function animacjaNapisu(){
        let czyMaIscOdKonca = false;
        setInterval(() => {
            console.log('lal');
            const litery = ['S', 'p', 'a', 'c', 'e', ' ', 'i', 'n', 'v', 'i', 'd', 'e', 'r', 's', ' ', 'w', ' ', 'r', 'e', 'a', 'c', 't', 'i', 'e'];
            let napisBuforowa = [];
            ktoryNapis.current += 1;
            if(ktoryNapis.current === 25){
                czyMaIscOdKonca = true;
            } 
            if(czyMaIscOdKonca){
                ktoryNapis.current -= 2;
            }
            if(ktoryNapis.current === 1){
                czyMaIscOdKonca = false;
            }
            for(let i = 0; i < ktoryNapis.current; i++){
                napisBuforowa.push(litery[i]);
            }
            zmienNapis(napisBuforowa.join(''));
        }, 800)
    }
    function zaladujOpcjeZamknijSterowanie(){
        zaladujOpcje(true);
        zaladujSterowanie(false);
    }
    function zaladujSterowanieZamknijOpcje(){
        zaladujOpcje(false);
        zaladujSterowanie(true);
        zaladujOProjekcie(false);
    }
    function zamknijOba(){
        zaladujOpcje(false);
        zaladujOProjekcie(false);
    }
    window.addEventListener('load', animacjaNapisu);
    return (
        <>
        <div className="text-white text-center mt-16 text-3xl">{(napis.length > 0) ? napis : <div className="opacity-0">P</div>}</div>
        <div className="flex justify-center h-56 space-y-12 mt-44 opacity-80 ">
            <div className="text-center w-56 space-y-16 text-xl bg-cyan-800 rounded-3xl">
                <Link to={`/gra`}><div onClick={() => zaladujOpcje(false)} className="inline text-center transition duration-300 ease-in-out delay-100 cursor-pointer  text-cyan-400 hover:text-cyan-100 hover:bg-emerald-500 rounded-2xl" >Start</div></Link><br></br><br></br><br></br>
                <div onClick={zaladujSterowanieZamknijOpcje} className="inline text-center transition duration-300 ease-in-out cursor-pointer text-cyan-400 hover:text-cyan-100 hover:bg-emerald-500 rounded-2xl">Sterowanie</div><br></br><br></br><br></br>
                <div onClick={zaladujOpcjeZamknijSterowanie} className="inline text-center transition duration-300 ease-in-out cursor-pointer  text-cyan-400 hover:text-cyan-100 hover:bg-emerald-500 rounded-2xl">Opcje</div>
            </div>
            {czySterowanieJestZaladowane && <div className="w-56 h-56 pt-8 space-y-16 text-center text-cyan-200 bg-cyan-800 rounded-3xl">
            <p>Ruch w lewo &larr; Ruch w prawo &rarr;</p>Strzał- LPM
            <p onClick={() => zaladujSterowanie(false)} className="transition duration-300 ease-in-out delay-150 cursor-pointer hover:text-cyan-100 hover:bg-emerald-500 rounded-2xl">Zamknij okno</p>
            </div>}
            {czyOpcjaJestZaladowana && <div className="w-56 h-56 space-y-16 text-center text-cyan-200 bg-cyan-800 rounded-3xl">
                <div onClick={() => zaladujOProjekcie(true)} className="transition duration-300 ease-in-out delay-150 cursor-pointer hover:text-cyan-100 hover:bg-emerald-500 rounded-2xl">O projekcie</div>
                <div className="transition duration-300 ease-in-out delay-150 cursor-pointer hover:text-cyan-100 hover:bg-emerald-500 rounded-2xl"><Link to={'/wyniki'}>wyniki graczy</Link></div>
                <div className="transition duration-300 ease-in-out delay-150 cursor-pointer hover:text-cyan-100 hover:bg-emerald-500 rounded-2xl" onClick={() => zaladujOpcje(false)}>Zamknij okno</div>
            </div>}
            {czyOProjekcieJestZaladowane && <div className="text-center text-cyan-200 bg-cyan-800 w-80 rounded-3xl h-72 space-y-9">Jest to mój pierwszy projekt w react'ie.<br></br><br></br>
                Chciałem zrobić coś unikatowego a nie kolejną apke od to-do czy pogody.<br></br>
                Robienie gier to tylko "symulowane problemy", które sobie dałem, a<br></br><br></br>
                teraz chcę rozwiązać wiekszy problem- Jak propagować filozofię ze stylem
                <div className='transition duration-300 ease-in-out delay-150 cursor-pointer hover:text-cyan-100 hover:bg-emerald-500 rounded-2xl' onClick={zamknijOba}>Zamknij okno</div>
            </div>}
        </div>
        </>
    );
}
