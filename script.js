function getPilihanKomputer() {
    const comp = Math.random();

    if ( comp < 0.34) return 'kertas';
    if ( comp >= 0.34 && comp < 0.67)  return 'batu';
    return 'gunting';
}

function getPilihanPlayer(comp, player) {
    if ( player == comp) return 'Seri';
    if ( player == 'kertas') return(comp == 'batu') ? 'Anda Menang' : 'Komputer Menang';
    if ( player == 'batu') return (comp == 'gunting') ? 'Anda Menang' : 'Komputer Menang';
    if ( player == 'gunting') return (comp == 'kertas') ? 'Anda Menang' : 'Komputer Menang';
    return 'BISA MAINNYA GAK SIH?!!!!!';
}

let pKertas = document.querySelector('.kertas');
pKertas.addEventListener('click', function () {
    const pilihanKomputer = getPilihanKomputer();
    const pilihanPlayer = pKertas.className;
    const hasil = getPilihanPlayer(pilihanKomputer, pilihanPlayer);

    const imgKomputer = document.querySelector('.img-komputer');
    imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

    const info = document.querySelector('.info');

    info.innerHTML = hasil;
});

let pBatu = document.querySelector('.batu');
pBatu.addEventListener('click', function () {
    const pilihanKomputer = getPilihanKomputer();
    const pilihanPlayer = pBatu.className;
    const hasil = getPilihanPlayer(pilihanKomputer, pilihanPlayer);

    const imgKomputer = document.querySelector('.img-komputer');
    imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

    const info = document.querySelector('.info');

    info.innerHTML = hasil;
});

let pGunting = document.querySelector('.gunting');
pGunting.addEventListener('click', function () {
    const pilihanKomputer = getPilihanKomputer();
    const pilihanPlayer = pGunting.className;
    const hasil = getPilihanPlayer(pilihanKomputer, pilihanPlayer);

    const imgKomputer = document.querySelector('.img-komputer');
    imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

    const info = document.querySelector('.info');

    info.innerHTML = hasil;
});