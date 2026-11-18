const games = [
	{
		title: "The Witcher 3",
		year: 2015,
		genre: "RPG",
		image: "https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg"
	},
	{
		title: "GTA V",
		year: 2013,
		genre: "Экшен",
		image: "https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg"
	},
	{
		title: "Red Dead Redemption 2",
		year: 2018,
		genre: "Приключения",
		image: "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg"
	},
	{
		title: "Assassin's Creed II",
		year: 2009,
		genre: "Экшен",
		image: "https://cdn.akamai.steamstatic.com/steam/apps/33230/header.jpg"
	}
];

const catalog = document.getElementById("games");

function showGames(list) {
	catalog.innerHTML = list.map(game => `
		<div class="game-card">
			<img src="${game.image}" alt="${game.title}">
			<div class="game-info">
				<h3>${game.title}</h3>
				<p>Год: ${game.year}</p>
				<p>Жанр: ${game.genre}</p>
				<button onclick="window.location.href='${game.title === "GTA V" ? "gta.html" : game.title === "Red Dead Redemption 2" ? "reddead.html" : game.title === "Assassin's Creed II" ? "ac2.html" : "witcher.html"}'">
    Подробнее
</button>
			</div>
		</div>
	`).join("");
}

showGames(games);

const searchInput = document.getElementById("search");

searchInput.addEventListener("input", function() {
	const query = searchInput.value.toLowerCase();

	const filteredGames = games.filter(game =>
		game.title.toLowerCase().includes(query)
	);

	if (filteredGames.length === 0) {
		catalog.innerHTML = "<p>Игры не найдены</p>";
	} else {
		showGames(filteredGames);
	}
});
