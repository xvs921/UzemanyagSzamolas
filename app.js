//console.log('A számítógép használatra kész.');
//FUNKCIÓ
//fuelToOffload=tankCapacity-requiredFuel
// Amiket ki kell számolnom:
// fuelToOffload:
    // Az az üzemanyagmennyiség, amit leeresztve a súlylimit alá kerülünk, de még haza tudunk jutni.
    // fuelToOffload = tankCapacity - requiredFuel
// tankCapacity: Az űrsikló üzemanyagtartályának űrtartalma.
// requiredFuel: Minimális üzemanyag-mennyiség, amivel visszajutunk a Földre.
// requiredFuel = totalDistanceToTravel * (averageLitersOverHundred / 100)

//KINÉZET
// 4) Végezd el a számítást (hívd meg a „calculateFuelToOffload” függvényt).
function calculateFuelToOffload() {
    // 1) Kérdezz rá a „totalDistanceToTravel” értékére, és mentsd el a választ egy változóba.
    var totalDistanceToTravel=prompt('Hány kilométer távolságot kíván megtenni? Adjon meg egy számot!');
    // 2) Kérdezz rá az „averageLitersOverHundred” értékére, és mentsd el a választ egy változóba.
    var averageLitersOverHundred=prompt('Mi az űrhajó átlagos fogyasztása literben? Adjon meg egy számot!');
    // 3) Kérdezz rá a „tankCapacity” értékére, és mentsd el a választ egy változóba.
    var tankCapacity=prompt('Mi az űrhajó üzemanyagtartályának űrtartalma literben? Adjon meg egy számot!');
    // 1. lépés: Számolja ki a szükséges üzemanyag-mennyiséget.
    var requiredFuel = totalDistanceToTravel * (averageLitersOverHundred / 100);
    //console.log('Szükséges üzemanyag-mennyiség: ' + requiredFuel + ' L');
    //alert('Szükséges üzemanyag-mennyiség: ' + requiredFuel + ' L');

    // 2. lépés: Számolja ki a lecsapolandó üzemanyagot.
    var fuelToOffload = tankCapacity - requiredFuel;
    //console.log('A leeresztendő üzemanyagmennyiség: ' + fuelToOffload + ' L');
    alert('Szükséges üzemanyagmennyiség: ' + requiredFuel + ' L.\nA leeresztendő üzemanyagmennyiség: ' + fuelToOffload + ' L.');
}
calculateFuelToOffload();
// 5) Írd ki az eredményt a felhasználónak.