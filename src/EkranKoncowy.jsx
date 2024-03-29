import { useQuery } from "@tanstack/react-query";
const EkranKoncowy = ({ wynikGracza, czasGry }) => {
    czasGry = '11:09:87';
    function zapiszPostep(){
        const nazwaGracza = prompt('Wygrana, jakim imieniem chcesz się zapisać w tabeli wyników?');
        const feczuj = async () => {
            try{
                const res = await fetch('http://localhost:4300/wyniki', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nazwa: nazwaGracza,
                    wynik: wynikGracza
                })
            });
            return res.json();
            } catch(err) {
                return <h1>Wystąpił błąd- {err}</h1>
            }
        };
        const {} = useQuery({ queryKey: ['wynikiGraczy'], queryFn: feczuj});
    }
    return (  
        <div className="flex justify-center mt-44 h-72 opacity-80 space-x-5">
            <div className="bg-cyan-800 w-64 rounded-3xl space-y-12 text-xl ">
                <p className="transition ease-in-out delay-100 text-cyan-400 text-center hover:text-cyan-100 duration-300 hover:bg-emerald-500 rounded-2xl cursor-pointer">Koniec, gra ci zajeła:</p>
                <p className="text-center text-white">{czasGry}</p>
                <p onClick={() => zapiszPostep()} className="transition ease-in-out delay-100 text-cyan-400 text-center hover:text-cyan-100 duration-300 hover:bg-emerald-500 rounded-2xl cursor-pointer">
                    Czy chciałbys zapisać postęp?
                </p>
            </div>
        </div>
    );
}
 
export default EkranKoncowy;
