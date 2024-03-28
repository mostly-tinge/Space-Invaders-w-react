import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
const WynikiGraczy = () => {
    const feczuj = async () => {
        const res = await fetch('http://localhost:4300/wyniki');
        return res.json();
    };
    const {dane, error, isError} = useQuery({ queryKey: ['wynikiGraczy'], queryFn: feczuj});

    if(isError) return <h1 className="text-center text-white text-3xl">{JSON.stringify(error)}</h1>

    return (
        <div className="flex justify-center mt-44 h-80 opacity-80">
            <div className="bg-cyan-800 w-40 rounded-2xl space-y-10">
                {dane ? dane.map(pytanie => (
                    <div className="text-cyan-400 text-center cursor-pointer transition ease-in-out delay-150 hover:text-cyan-100 duration-300 hover:bg-emerald-500 rounded-2xl" key={pytanie.nazwa}>{pytanie.wynik}- {pytanie.nazwa}</div>
                )):<h1 className="text-center text-white text-3xl">ładuje...</h1>}
                <Link className='text-cyan-400 text-center cursor-pointer transition ease-in-out delay-150 hover:text-cyan-100 duration-300 hover:bg-emerald-500 text-sm' to={'/'}>Wróć do strony głównej</Link>
            </div>
        </div>
    );
}
export default WynikiGraczy;
