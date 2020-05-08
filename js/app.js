document.addEventListener('DOMContentLoaded', () => {
    const inputForm = document.querySelector('#input-form');
    inputForm.addEventListener('submit', handleNewItemFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick)
})

const handleNewItemFormSubmit = function (event) {
    event.preventDefault();

    const gameListItem = createGameListItem(event.target);
    const gameList = document.querySelector("#game-list");
    gameList.appendChild(gameListItem);

    event.target.reset();
}

const createGameListItem = function (form) {
    const gameListItem = document.createElement('li');
    gameListItem.classList.add('game-list-item');

    const title = document.createElement('h3');
    title.textContent = form.title.value;
    gameListItem.appendChild(title);

    const genre = document.createElement('p');
    genre.textContent = `Genre: ${form.genre.value}`;
    gameListItem.appendChild(genre);

    const platform = document.createElement('p');
    platform.textContent = `Platform: ${form.platform.value}`;
    gameListItem.appendChild(platform);

    const numPlayers = document.createElement('p');
    numPlayers.textContent = `Number of Players: ${form.numPlayers.value}`;
    gameListItem.appendChild(numPlayers);

    return gameListItem;
}

const handleDeleteAllClick = function (event) {
    const gameList = document.querySelector("#game-list");
    gameList.innerHTML = "";
}