import { useState, useRef } from "react";
import { Link } from "react-router-dom";
export default function EkranStartowy(){
    console.log('hhh')
    const [napis, zmienNapis] = useState([]);
    const [czyOProjekcieJestZaladowane, zaladujOProjekcie] = useState(false);
    const [czyOpcjaJestZaladowana, zaladujOpcje] = useState(false);
    const [czySterowanieJestZaladowane, zaladujSterowanie] = useState(false);
    const ktoryNapis = useRef(-1);
    function animacjaNapisu(){
        const litery = ['S', 'p', 'a', 'c', 'e', ' ', 'i', 'n', 'v', 'i', 'd', 'e', 'r', 's', ' ', 'w', ' ', 'r', 'e', 'a', 'c', 't', 'i', 'e'];
        let czyMaIscOdKonca = false;
        setInterval(() => {
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
    if(ktoryNapis.current === -1){
        animacjaNapisu();
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
    return (
        <>
        <div className="text-white text-center mt-16 text-3xl">{(napis.length > 0) ? napis : <div className="opacity-0 absolute">P</div>}</div>
        <div className="flex justify-center h-64 space-y-12 mt-44 opacity-80 ">
            <div className="text-center w-64 space-y-16 text-xl bg-cyan-800 rounded-3xl">
                <Link to={`/gra`}><div onClick={() => zaladujOpcje(false)} className="text-center text-2xl transition duration-300 ease-in-out delay-100 cursor-pointer  text-white hover:text-cyan-800 hover:bg-emerald-500 rounded-2xl" >Start</div></Link>
                <div onClick={zaladujSterowanieZamknijOpcje} className="text-center text-2xl transition duration-300 ease-in-out cursor-pointer text-white hover:text-cyan-800 hover:bg-emerald-500 rounded-2xl">Sterowanie</div>
                <div onClick={zaladujOpcjeZamknijSterowanie} className="text-center text-2xl transition duration-300 ease-in-out cursor-pointer  text-white hover:text-cyan-800 hover:bg-emerald-500 rounded-2xl">Opcje</div>
            </div>
            {czySterowanieJestZaladowane && <div className="relative bottom-12 text-xl left-5 w-56 h-64 space-y-10 text-center text-white bg-cyan-800 rounded-3xl">
            <p>Ruch w lewo &larr;</p>
            <p>Ruch w prawo &rarr;</p>
            <p>Strzał- LPM</p>
            <p onClick={() => zaladujSterowanie(false)} className="transition duration-300 ease-in-out delay-150 cursor-pointer hover:text-cyan-800 hover:bg-emerald-500 rounded-2xl">Zamknij okno</p>
            </div>}
            {czyOpcjaJestZaladowana && <div className="relative bottom-12 text-2xl left-5 w-56 h-64 space-y-16 text-center text-white bg-cyan-800 rounded-3xl">
                <div onClick={() => zaladujOProjekcie(true)} className="transition duration-300 ease-in-out delay-150 cursor-pointer hover:text-cyan-800 hover:bg-emerald-500 rounded-2xl">O projekcie</div>
                <div className="transition duration-300 ease-in-out delay-150 cursor-pointer hover:text-cyan-800 hover:bg-emerald-500 rounded-2xl"><Link to={'/wyniki'}>wyniki graczy</Link></div>
                <div className="transition duration-300 ease-in-out delay-150 cursor-pointer hover:text-cyan-800 hover:bg-emerald-500 rounded-2xl" onClick={() => {zaladujOpcje(false); zaladujOProjekcie(false)}}>Zamknij okno</div>
            </div>}
            {czyOProjekcieJestZaladowane && <div className="relative bottom-12 left-10 text-center text-xl text-white bg-cyan-800 w-64 rounded-3xl h-72 space-y-9">Jest to mój pierwszy projekt w react'ie.<br></br><br></br>
                Podstawowym założeniem było zrobić coś unikatowego a nie kolejną apke od to-do czy pogody.<br></br>
                <div className='transition duration-300 ease-in-out delay-150 cursor-pointer hover:text-cyan-800 hover:bg-emerald-500 rounded-2xl' onClick={zamknijOba}>Zamknij okno</div>
            </div>}
        </div>
        </>
    );
}
