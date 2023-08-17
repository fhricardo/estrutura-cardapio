const tradicional = document.getElementById('tradicional')
const smash = document.getElementById('smash')
const superburger = document.getElementById('super')
const combo = document.getElementById('combo')
function category(cat) {
    switch (cat) {
        case 'tradicional':
            tradicional.style.display = 'flex';
            smash.style.display = 'none';
            superburger.style.display = 'none';
            combo.style.display = 'none';
            break
        case 'smash':
            tradicional.style.display = 'none';
            smash.style.display = 'flex';
            superburger.style.display = 'none';
            combo.style.display = 'none';
            break
        case 'superburger':
            tradicional.style.display = 'none';
            smash.style.display = 'none';
            superburger.style.display = 'flex';
            combo.style.display = 'none';
            break
        case 'combo':
            tradicional.style.display = 'none';
            smash.style.display = 'none';
            superburger.style.display = 'none';
            combo.style.display = 'flex';
            break
    }
}