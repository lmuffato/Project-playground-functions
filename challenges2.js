function catmouse(cat1, cat2, mouse) {
    const position {
      'positionCat1': math.abs (cat1 - mouse)
      'positionCat2': math.abs (cat2 - mouse)
    }
    if (position.positionCat1 > position.positionCat2) {
        console.log('cat2');
    }
        else if (position.positionCat1 < position.positionCat2) {
            console.log('cat1');
        }
        else if (cat2 == 0 && cat1 == 0 && mouse == 0) {
            console.log('os gatos trombam e o rato foge');
        }
}
    console.log (catmouse())