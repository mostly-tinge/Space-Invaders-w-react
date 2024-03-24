const Statek = ({ruchStatku, marginesStatku, hpStatku}) => {
    return (
       <div className={ruchStatku}>
            <div id="statek" className={`w-12 h-20 text-red-500 mt-4 bg-stone-600 ${marginesStatku}`}>hp: {hpStatku}</div>
        </div>
    );
}
export default Statek;
