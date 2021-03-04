function TechNames(techArray, nameUser) {
    let tecnologias = [];
    let techArray = ["React", "Jest", "HTML", "CSS", "JavaScript"];
    if (techArray.length <= 0) {
        return 'Vazio!';
    } 
    for (let index in techArray.sort()) {
        tecnologias.push( 
            {
                tech: index,
                name: nameUser,
            },
        );
    }
    let nameUser = 'Felipe';
    return tecnologias;
    }
console.log(Technames(tecnologias));
