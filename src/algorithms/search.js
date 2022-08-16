// javascript built in search
var beasts = ['Centaur', 'Godzilla',
    'Mosura', 'Minotaur', 'Hydra', 'Nessie'];

(function test() {
    // javascript built in linear searches; O(n)
    console.assert(beasts.indexOf('Godzilla') == 1);
    console.assert(beasts.indexOf('Cyclope') == -1);

    console.assert(beasts.findIndex(function (item) {
        return item == 'Hydra'
    }) == 4);
    console.assert(beasts.findIndex(function (item) {
        return item == 'Cyclope'
    }) == -1);

    console.assert(beasts.find(function (item) {
        return item == 'Hydra'
    }) == 'Hydra');

    console.assert(beasts.includes('Nessie') == true);
    console.assert(beasts.includes('Cyclope') == false);
})()
