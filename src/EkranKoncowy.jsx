import { useQuery } from "@tanstack/react-query";
const EkranKoncowy = ({ wynikGracza }) => {
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
        <div>
            Koniec zdobyłeś
            <div onClick={() => zapiszPostep()}>
                Czy chciałbys zapisać postęp?
            </div>
        </div>
    );
}
 
export default EkranKoncowy;
