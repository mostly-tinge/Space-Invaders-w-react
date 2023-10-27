const EkranKoncowy = () => {
    function zapiszPostep(){
        fetch('https://localhost:5173/WynikiGraczys', {
            method: 'POST'
        })
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