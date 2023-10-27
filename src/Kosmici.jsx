import { useRef, useState} from "react";
const Kosmici = () => {
    const ruchUfoludow = [20, 24, 28, 32, 40, 44, 52, 64];
    const [margines, zmienMargines] = useState(ruchUfoludow[0]);//64, 52, 44, 40, 32, 28, 24, 20
    const liczba = useRef(0);
    const ufoludy = [{klucz: 1}, {klucz: 2}, {klucz: 3},
        {klucz: 4},{klucz: 5}, {klucz: 6}, {klucz: 7}, {klucz: 8}, {klucz: 9}, {klucz: 10},
        {klucz: 11},{klucz: 12}];
    function func(){
        if(liczba.current === 7){
            liczba.current = 0
        }
        liczba.current += 1;
        zmienMargines(ruchUfoludow[liczba.current]);
    }
    return (
        <div>
            <div className={"grid grid-cols-3 gap-10 justify-items-center ml-"+margines}>{
            ufoludy.map(ufolud => (
            <div className='bg-yellow-800 text-center w-32' key={ufolud.klucz}>kosmita</div>
            ))}
            </div>
            <div className="flex justify-between mx-16">
                <div className="w-44 h-44 bg-zinc-300 mt-44" onClick={() => func()}>blokada</div>
                <div className="w-44 h-44 bg-zinc-300 mt-44">blokada</div>
                <div className="w-44 h-44 bg-zinc-300 mt-44">blokada</div>
                <div className="w-44 h-44 bg-zinc-300 mt-44">blokada</div>
            </div>
        </div>
    );
}
export default Kosmici;