export default function PociskiKosmitów({pociskiKosmitow}){
    const stylPociskow = [`left-4`, `left-16`, `left-28`, `left-44`, `left-56`, 
    `left-64 ml-4`, `ml-4 left-72`, `ml-5 left-80`, `ml-4 left-96`, 'ml-44 left-96', 
    `left-72 ml-96`, `right-96 mr-96`, `right-96 mr-80`, `right-96 mr-64`, `right-96 mr-44`, 
    `right-72 mr-28`, `right-72 mr-5`, `right-56 mr-1`, `right-44 mr-1`, `right-28`, `right-12 mr-2`, `right-3`];
    
    const kluczePociskow = [`ebwboa`, `niwa98w`, `90911`, `11037ca8wo`, `ohca2mvjc`, `d89wadh89wi`, `b89wab`, `bawwadwa98`, 
    `cbae9wdg9wa`, `nc9a892vhcz`, `a89w99`, `nc90aba`, `ncanobcxc`, `ucag8wa`, `nc9ahwkjc`, `bcua8wwdwa22`, `ba89-x8982`, `b8cw9s1!!`,
    `cna89ghxzv`, `b79atjhx`, `hc9astw`, `busgnbvcn`];
    return(
    <>
        {stylPociskow.map((styl, index) => 
            <div className={`h-24 w-3 bg-orange-800 absolute ${pociskiKosmitow[index]} ${styl}`} key={kluczePociskow[index]}></div>
        )}
    </> 
    );
}