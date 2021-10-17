const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const firstPlayer = {
    player: 1,
    name: 'Mark',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['knife', 'gun'],
    attack: function () {
        console.log(`${this.name} Fight`);
    }
};

const secondPlayer = {
    player: 2,
    name: 'Ivan',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['stick', 'gun', 'sword'],
    attack: function () {
        console.log(`${this.name} Fight`);
    }
};


function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }
    return $tag;
}

function createPlayer(playerObj) {
    const $player = createElement('div', `player${playerObj.player}`);

    const $progressbar = createElement('div', 'progressbar');

    const $life = createElement('div', 'life');
    $life.style.width = `${playerObj.hp}%`;

    const $name = createElement('div', 'name');
    $name.innerText = playerObj.name;

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $player.appendChild($progressbar);

    const $character = createElement('div', 'character');

    const $img = createElement('img');
    $img.src = playerObj.img;

    $character.appendChild($img);
    $player.appendChild($character);

    return $player;
}

$arenas.appendChild(createPlayer(firstPlayer));
$arenas.appendChild(createPlayer(secondPlayer));

function changeHP(playerObj) {
    const $playerObj = document.querySelector('.player' + playerObj.player + ' .life');
    const remainingHP = playerObj.hp - calculateRandomValue();
    playerObj.hp = remainingHP <= 0 ? 0 : remainingHP;
    $playerObj.style.width = `${playerObj.hp}%`;

    if (remainingHP <= 0) {
        $arenas.appendChild(playerWin(firstPlayer.hp <= 0 ? secondPlayer.name : firstPlayer.name));
        $randomButton.disabled = true;
    }
}

$randomButton.addEventListener('click', function () {
    changeHP(firstPlayer);
    changeHP(secondPlayer);
});

function playerWin(name) {
    const $winTitle = createElement('div', 'loseTitle');
    $winTitle.innerText = `${name} win`;
    return $winTitle;
}

function calculateRandomValue() {
    return Math.ceil(Math.random() * 20);
}