import { useQuery, useMutation } from "@tanstack/react-query";
const bylekto = [
    {wynik: 14, tekst: 'h89883'}, 
    {wynik: 55, tekst: 'dfdfd'}
];
const WynikiGraczy = () => {
    console.log(bylekto)
    const zapytanie = useQuery({
        queryKey: ["post"],
        queryFn: () => {
            wait(1000).then(() => 
                [...bylekto]
                )},
    })

    if(zapytanie.isLoading) return <h1>łąduje...</h1>
    if(zapytanie.isError) return <sub>nie udało się</sub>
    //zapytanie.data.map(pytanie => (
        //    <div key={pytanie.wynik}>{pytanie.tekst}</div>
       // ))

    return ( 
        <></>
    );
}
 
export default WynikiGraczy;