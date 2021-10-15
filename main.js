const firstPlayer = {
    id: 1,
    name: 'Mark',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['knife', 'gun'],
    attack: function () {
        console.log(`${this.name} Fight`);
    }
};

const secondPlayer = {
    id: 2,
    name: 'Ivan',
    hp: 65,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['stick', 'gun', 'sword'],
    attack: function () {
        console.log(`${this.name} Fight`);
    }
};

const $arenas = document.querySelector('.arenas');

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }
    return $tag;
}

function createPlayer(player) {
    const $player = createElement('div', `player${player.id}`);

    const $progressbar = createElement('div', 'progressbar');

    const $life = createElement('div', 'life');
    $life.style.width = `${player.hp}%`;

    const $name = createElement('div', 'name');
    $name.innerText = player.name;

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $player.appendChild($progressbar);

    const $character = createElement('div', 'character');

    const $img = createElement('img');
    $img.src = player.img;

    $character.appendChild($img);
    $player.appendChild($character);

    return $player;
}

$arenas.appendChild(createPlayer(firstPlayer));
$arenas.appendChild(createPlayer(secondPlayer));