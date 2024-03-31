import { useMutation } from "@tanstack/react-query";
const EkranKoncowy = ({ nazwaGracza, czasGry }) => {
    const { mutate } = useMutation({
        mutationFn: (daneGracza) => 
            fetch('http://localhost:8000/Wyniki', {
                method: 'POST',
                body: JSON.stringify(daneGracza),
                headers: {"Content-type": "application/json; charset=UTF-8"},
            }).then(res => res.json())
        })
    return (  
        <div className="flex justify-center mt-44 h-64 opacity-80 space-x-5">
            <div className="bg-cyan-800 w-64 rounded-3xl space-y-12 text-xl ">
                <p className="transition ease-in-out delay-100 text-cyan-400 text-center rounded-2xl">Koniec, gra ci zajeła:</p>
                <p className="text-center text-white">{czasGry}</p>
                <p onClick={() => mutate({
                    czas: czasGry,
                    nazwa: nazwaGracza
                })} className="transition ease-in-out delay-100 text-cyan-400 text-center hover:text-cyan-100 duration-300 hover:bg-emerald-500 rounded-2xl cursor-pointer">
                    Czy chciałbys zapisać postęp?
                </p>
            </div>
        </div>
    );
}
 
export default EkranKoncowy;
