const Kosmici = () => {
    const kolorUfoludkow = [{kolor: 'niebieski'}];
    return (  
        kolorUfoludkow.map(ufolud => (
            <div className="h1" key={ufolud.klucz}>{ufolud.kolor}</div>
        ))
    );
}
 
export default Kosmici;