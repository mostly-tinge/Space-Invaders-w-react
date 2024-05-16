import { useEffect, useRef, useState } from "react";
import PociskiStatku from "./PociskiStatku";
import Statek from "./Statek";
import Kosmici from "./Kosmici";
import PociskiKosmitów from "./PociskiKosmitów";
import Blokady from "./Blokady";
import EkranKoncowy from "./EkranKoncowy";
export default function CalaLogika({ ufoludy }) {
    const ruchStatku = ['flex flex-row', 'grid justify-center', 'flex flex-row-reverse'];

    const ktoryPoziomPrzezroczystosci = useRef([0, 0, 0, 0, 0, 0, 0, 0]);
    const stanBlokad = useRef(['opacity-100', 'opacity-100', 'opacity-100', 'opacity-100', 'opacity-100', 'opacity-100', 'opacity-100', 'opacity-100']);
    const kierunekKosmitow = useRef(1);
    const ktoryRuchStatku = useRef(0);
    const stanGry = useRef({ czyDobieglaKonca: false, nazwaGracza: null });
    const ktoryPociskMaBycWystrzelony = useRef(0);
    const czyJestJuzTimeout = useRef(false);
    const czyStatekMozeStrzelic = useRef(true);
    const hpStatku = useRef(5);

    const [marginesStatku, zmienMarginesStatku] = useState('0');
    const [polozenieKosmitow, zmienPolozenieKosmitow] = useState('justify-items-center');
    const [polozeniePocisku, zmienPolozeniePocisku] = useState(Array(22).fill(' mt-64 invisible '));
    const [pociskiKosmitow, zmienPociskiKosmitow] = useState(Array(22).fill(' mb-56 bottom-24 mt-64 invisible '));
    const ruszanieSieKosmitow = (czyAnulowac) => {
        if(czyAnulowac) return;
        const ufoludy1Rzedu = ufoludy.current[0].tablicaZufo;
        const ufoludy2Rzedu = ufoludy.current[1].tablicaZufo;
        const ufoludy3Rzedu = ufoludy.current[2].tablicaZufo;
        const ruchKosmitow = ['justify-items-start', 'justify-items-center', 'justify-items-end', 'justify-items-center'];
        const Ichruch = setInterval(() => {
            kierunekKosmitow.current += 1;
            if(kierunekKosmitow.current === 4) {
                kierunekKosmitow.current = 0;
            }
            zmienPolozenieKosmitow(ruchKosmitow[kierunekKosmitow.current]);
            if((ufoludy1Rzedu.length === 0 && ufoludy2Rzedu.length === 0 && ufoludy3Rzedu.length === 0)) {
                clearInterval(Ichruch);
            }
        }, 4000)
    }
    function ustawPrzezroczystoscBlokady(pociski){
        const czyPociskPrzeszedl = tablicaZPociskami => {
            const dlugoscTablicyZPociskami = tablicaZPociskami.length;
            if(dlugoscTablicyZPociskami === 0) return;
            const zmienPolozeniePociskuKosmitow = doZmiany => {
                zmienPociskiKosmitow(pociskiKosmitow.map((arg, index) => {
                    if(tablicaZPociskami[0] !== undefined && tablicaZPociskami[0] === index) return arg = doZmiany;
                    if(tablicaZPociskami[1] !== undefined && tablicaZPociskami[1] === index) return arg = doZmiany;
                    if(tablicaZPociskami[2] !== undefined && tablicaZPociskami[2] === index) return arg = doZmiany;
                    return arg
                }));
            }
            for(let i = 0; i < dlugoscTablicyZPociskami; i++){
                if(ktoryPociskMaBycWystrzelony.current === tablicaZPociskami[i]){
                    hpStatku.current -= 1;
                }
            }
            if(hpStatku.current === 0) {
                stanGry.current.czyDobieglaKonca = true;
                alert('przegrałeś, ');
                window.removeEventListener('keydown', ruszanieSieStatku);
            }
            zmienPolozeniePociskuKosmitow(' bottom-4 visible');
            setTimeout(() => zmienPolozeniePociskuKosmitow(' invisible '), 500);
        }
        const tablicaZPociskami = [];
        const poziomyPrzezroczystosci = ['opacity-75', 'opacity-50', 'opacity-25', 'opacity-0'];
        const ktoraBlokada = [null, null, null, 0, 0, 1, 1, null, null, 2, 3, null, null, 4, 5, null, 6, 7, 7, null, null, null];
        for(let i = 0; i < 3; i++){
            if(ufoludy.current[i].tablicaZufo.length === 0) continue;
            const numerBlokady = ktoraBlokada[pociski[i]];
            if(ktoryPoziomPrzezroczystosci.current[numerBlokady] === 4 || ktoraBlokada[pociski[i]] === null){
                tablicaZPociskami.push(pociski[i]);
                continue;
            }
            stanBlokad.current[numerBlokady] = poziomyPrzezroczystosci[ktoryPoziomPrzezroczystosci.current[numerBlokady]];
            ktoryPoziomPrzezroczystosci.current[numerBlokady]++;
        }
        czyPociskPrzeszedl(tablicaZPociskami);
    }
    function ruszanieSieStatku({ key }) {
        if(czyJestJuzTimeout.current) return;
        const ruchWLewo = ['mr-96 ', 'mr-72 ', 'mr-52 ', 'mr-40', 'mr-24 ', 'mr-8 ', 'mr-0'];
        const ruchWPrawo = ['', 'ml-12', 'ml-24', 'ml-40', 'ml-52', 'ml-64', 'ml-72', 'ml-80', 'ml-96', 'mr-96', 'mr-52', 'mr-0', 'ml-32', 'ml-64', 'ml-96'];
        let zCzegoMaSkorzystacZebySieRuszyc;
        if(key === 'ArrowRight') {
            if(ktoryPociskMaBycWystrzelony.current === 21) return;
            ktoryPociskMaBycWystrzelony.current += 1;
            zCzegoMaSkorzystacZebySieRuszyc = ruchWPrawo[ktoryPociskMaBycWystrzelony.current];
            switch (ktoryRuchStatku.current) {
                case 0:
                    if(ktoryPociskMaBycWystrzelony.current === 9) {
                        ktoryRuchStatku.current = 1;
                    }
                    zCzegoMaSkorzystacZebySieRuszyc = ruchWPrawo[ktoryPociskMaBycWystrzelony.current];
                    break
                case 1:
                    if(ktoryPociskMaBycWystrzelony.current === 15) {
                        ktoryRuchStatku.current = 2;
                        zCzegoMaSkorzystacZebySieRuszyc = ruchWLewo[ktoryPociskMaBycWystrzelony.current - 15];
                    }
                    break
                case 2:
                    zCzegoMaSkorzystacZebySieRuszyc = ruchWLewo[ktoryPociskMaBycWystrzelony.current - 15];
                    break
            }
        }
        else if(key === 'ArrowLeft') {
            if(ktoryPociskMaBycWystrzelony.current === 0) return;
            ktoryPociskMaBycWystrzelony.current -= 1;
            switch(ktoryRuchStatku.current) {
                case 0:
                    zCzegoMaSkorzystacZebySieRuszyc = ruchWPrawo[ktoryPociskMaBycWystrzelony.current];
                    break;
                case 1:
                    if(ktoryPociskMaBycWystrzelony.current === 8) {
                        ktoryRuchStatku.current = 0;
                    }
                    zCzegoMaSkorzystacZebySieRuszyc = ruchWPrawo[ktoryPociskMaBycWystrzelony.current];
                    break
                case 2:
                    zCzegoMaSkorzystacZebySieRuszyc = ruchWLewo[ktoryPociskMaBycWystrzelony.current - 15];
                    if(ktoryPociskMaBycWystrzelony.current === 14) {
                        ktoryRuchStatku.current = 1;
                        zCzegoMaSkorzystacZebySieRuszyc = ruchWPrawo[ktoryPociskMaBycWystrzelony.current];
                    }
                    break
            }
        } else return;
        zmienMarginesStatku(zCzegoMaSkorzystacZebySieRuszyc);
        czyJestJuzTimeout.current = true;
        setTimeout(() => czyJestJuzTimeout.current = false, 600);
    }
    useEffect(() => {
        /*const ufoludy1Rzedu = ufoludy.current[0].tablicaZufo;
        const ufoludy2Rzedu = ufoludy.current[1].tablicaZufo;
        const ufoludy3Rzedu = ufoludy.current[2].tablicaZufo;*/
        let kopiaKierunkuKosmitow = kierunekKosmitow.current;
        if (kopiaKierunkuKosmitow === 3) {
            kopiaKierunkuKosmitow = 1;
        }
        const pociskiDoLosowania = [[[0, 1, 2], [8, 9], [14, 15]], [[3, 4, 5], [11, 12], [17, 18]], [[7, 8], [13, 14], [19, 20, 21]]];
        const pociski1Rzedu = pociskiDoLosowania[kopiaKierunkuKosmitow][0];
        const pociski2Rzedu = pociskiDoLosowania[kopiaKierunkuKosmitow][1];
        const pociski3Rzedu = pociskiDoLosowania[kopiaKierunkuKosmitow][2];

        const los1rzedu = Math.floor(Math.random() * pociskiDoLosowania[kopiaKierunkuKosmitow][0].length);
        const los2rzedu = Math.floor(Math.random() * pociskiDoLosowania[kopiaKierunkuKosmitow][1].length);
        const los3rzedu = Math.floor(Math.random() * pociskiDoLosowania[kopiaKierunkuKosmitow][2].length);
        const zmienPolozenieWszystkichPociskowKosmitow = doZmiany => {
            zmienPociskiKosmitow(pociskiKosmitow.map((arg, index) => {
                if(pociski1Rzedu[los1rzedu] === index && !!ufoludy.current[0] && ufoludy.current[0].tablicaZufo.length !== 0) return arg = doZmiany;
                if(pociski2Rzedu[los2rzedu] === index && !!ufoludy.current[1] && ufoludy.current[1].tablicaZufo.length !== 0) return arg = doZmiany;
                if(pociski3Rzedu[los3rzedu] === index && !!ufoludy.current[2] && ufoludy.current[2].tablicaZufo.length !== 0) return arg = doZmiany;
                return arg;
            }));
        }
        function drugiTimeout() {
            setTimeout(() => ustawPrzezroczystoscBlokady([pociski1Rzedu[los1rzedu], pociski2Rzedu[los2rzedu], pociski3Rzedu[los3rzedu]]), 600);
        }
        function pierwszyTimeout() {
            setTimeout(() => zmienPolozenieWszystkichPociskowKosmitow('mb-56 bottom-24 visible'), 600);
            setTimeout(() => {
                zmienPolozenieWszystkichPociskowKosmitow('mb-56 bottom-12 visible');
                drugiTimeout();
            }, 1200);
        }
        pierwszyTimeout();
    }, [kierunekKosmitow.current])

    useEffect(() => {
        ruszanieSieKosmitow();
        function kiedySieKliknie() {
            if(!czyStatekMozeStrzelic.current) return
            let ktoryRzadMaBycOstrzelany;
            const wlasciwyPocisk = JSON.parse(JSON.stringify(ktoryPociskMaBycWystrzelony.current));
            const wlasciwyKierunek = JSON.parse(JSON.stringify(kierunekKosmitow.current));

            const zmianaStanuPocisku = doZmiany => {
                zmienPolozeniePocisku(polozeniePocisku.map((arg, index) => {
                    if(wlasciwyPocisk !== index) return arg;
                    return arg = doZmiany;//72 iteracje, pewnie da się to lepiej zrobić
                }))
            };
            function drugiTimeout() {
                setTimeout(() => {
                    zmianaStanuPocisku(' mt-64 invisible ');
                    czyStatekMozeStrzelic.current = true;
                }, 650)
                ufoludy.current[ktoryRzadMaBycOstrzelany].tablicaZufo.pop();
                if(ufoludy.current[0].tablicaZufo.length === 0 && ufoludy.current[1].tablicaZufo.length === 0 && ufoludy.current[2].tablicaZufo.length === 0) {
                    stanGry.current.czyDobieglaKonca = true;
                    stanGry.current.nazwaGracza = prompt('wygrałeś, podaj swoją nazwę: ');
                }
            }
            function pierwszyTimeout() {
                setTimeout(() => {
                    ustawPrzezroczystoscBlokady(ktoryPociskMaBycWystrzelony.current);
                    zmianaStanuPocisku(' visible ');
                    drugiTimeout();
                }, 650)
            }
            function wystrzelPocisk(Rzad, wlasciwyKierunek) {
                if(wlasciwyKierunek !== kierunekKosmitow.current || ufoludy.current[Rzad].tablicaZufo.length === 0) return;
                czyStatekMozeStrzelic.current = false;
                zmianaStanuPocisku(' mt-64 visible ');
                ktoryRzadMaBycOstrzelany = Rzad;
                pierwszyTimeout();
            }
            if(kierunekKosmitow.current === 0) {
                switch (ktoryPociskMaBycWystrzelony.current) {
                    case 0:
                    case 1:
                    case 2:
                        wystrzelPocisk('0', wlasciwyKierunek);
                        break;
                    case 9:
                    case 10:
                        wystrzelPocisk('1', wlasciwyKierunek);
                        break;
                    case 15:
                    case 16:
                        wystrzelPocisk('2', wlasciwyKierunek);
                        break;
                }
            }
            else if (kierunekKosmitow.current === 1 || kierunekKosmitow.current == 3) {
                switch (ktoryPociskMaBycWystrzelony.current) {
                    case 3:
                    case 4:
                    case 5:
                        wystrzelPocisk('0', wlasciwyKierunek);
                        break;
                    case 11:
                        wystrzelPocisk('1', wlasciwyKierunek);
                        break;
                    case 17:
                    case 18:
                        wystrzelPocisk('2', wlasciwyKierunek);
                        break;
                }
            } else {
                switch (ktoryPociskMaBycWystrzelony.current) {
                    case 7:
                    case 8:
                        wystrzelPocisk('0', wlasciwyKierunek);
                        break;
                    case 13:
                    case 14:
                        wystrzelPocisk('1', wlasciwyKierunek);
                        break;
                    case 19:
                    case 20:
                    case 21:
                        wystrzelPocisk('2', wlasciwyKierunek);
                        break;
                }
            }
        }
        window.addEventListener('click', kiedySieKliknie);
        return () => { window.removeEventListener('click', kiedySieKliknie); setTimeout(ruszanieSieKosmitow(true), 1000) }
    }, [])

    window.addEventListener('keydown', ruszanieSieStatku);
    if (!!stanGry.current.czyDobieglaKonca) return <EkranKoncowy nazwaGracza={stanGry.current.nazwaGracza} czasGry={"00:23:05"} />;
    return (
        <>
            <div className={`grid gap-10 grid-cols-3 h-72 ${polozenieKosmitow}`}>
                <Kosmici tablicaZKosmitami={ufoludy.current} />
            </div>
            <PociskiStatku polozeniePocisku={polozeniePocisku} />
            <PociskiKosmitów pociskiKosmitow={pociskiKosmitow} />
            <Blokady stanBlokad={stanBlokad.current} />
            <Statek marginesStatku={marginesStatku} ruchStatku={ruchStatku[ktoryRuchStatku.current]} hpStatku={hpStatku.current} />
        </>
    );
}
