const firstPlayer = {
    name: 'Mark',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['knife', 'gun'],
    attack: function () {
        console.log(`${this.name} Fight`);
    }
};

const secondPlayer = {
    name: 'Ivan',
    hp: 65,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['stick', 'gun', 'sword'],
    attack: function () {
        console.log(`${this.name} Fight`);
    }
};

const $arenas = document.querySelector('.arenas');

function createPlayer(playerClass, player) {
    const $player = document.createElement('div');
    $player.classList.add(playerClass);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = `${player.hp}%`;

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = player.name;

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $player.appendChild($progressbar);

    const $character = document.createElement('div');
    $character.classList.add('character');

    const $img = document.createElement('img');
    $img.src = player.img;

    $character.appendChild($img);
    $player.appendChild($character);

    $arenas.appendChild($player);
}

createPlayer('player1', firstPlayer);
createPlayer('player2', secondPlayer);