const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('show');
	hamButton.classList.toggle('show');
});

const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	// Add more temple objects here...
	{
		templeName: "Monterrey Mexico",
		location: "Monterrey, Mexico",
		dedicated: "2002, April, 28",
		area: 16498,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/monterrey-mexico/400x250/monterrey-mexico-temple-lds-645907-wallpaper.jpg"
	  },
	  {
		templeName: "Sapporo Japan",
		location: "Sapporo, Japan",
		dedicated: "2016, Agosto, 21",
		area: 48480,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sapporo-japan/2018/400x250/Sapporo-Japan-Temple01.jpg"
	  },
	  {
		templeName: "Manila Philippines",
		location: "Quezon City, Philippines",
		dedicated: "1984, September, 25",
		area: 26683,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manila-philippines/400x250/manila-philippines-temple-lds-129585-wallpaper.jpg"
	  },
  ];

const templeCards = temples.map((temple) => {
	//Create the temple card elements
	const tCard = document.createElement("div");
	const templeCardName = document.createElement('h3');
	const templeCardLocation = document.createElement('p');
	const templeCardDedication = document.createElement('p');
	const templeCardArea = document.createElement('p');
	const templeCardImg = document.createElement('img');
	
	//Give attirbutes to img. Lazy loading here
	templeCardImg.setAttribute("src", temple.imageUrl)
	templeCardImg.setAttribute("atl", `${temple.templeName} temple`)
	templeCardImg.setAttribute("loading", "lazy")

	//Assign content
	templeCardName.innerHTML = `${temple.templeName} Temple`;
	templeCardLocation.innerHTML = `Location: ${temple.location}`;
	const tDedicationDate = temple.dedicated.split(',');
	templeCardDedication.innerHTML = `Dedicated on: ${tDedicationDate[1]} ${tDedicationDate[2]}, ${tDedicationDate[0]}`;
	templeCardArea.innerHTML = `Temple area: ${temple.area.toLocaleString('en-US')} sq ft`;
	templeCardImg.innerHTML = temple.imageUrl;
	
	//Append child elements to temple card
/* 	const templeCardName = `<h3>${temple.templeName}</h3>`;
	const templeCardLocation = `<p>Location: ${temple.location}</p>`;
	const templeDedication = `<p>Dedicated on: ${temple.dedicated}</p>`;
	const templeArea = `<p>Size: ${temple.area} sq ft</p>`;
	const templeImg = `<img src="${temple.imageUrl}" alt = "${temple.templeName} temple" loading = "lazy">`
	const tCard = document.createElement("div"); */
	
	tCard.appendChild(templeCardName);
	tCard.appendChild(templeCardLocation);
	tCard.appendChild(templeCardDedication);
	tCard.appendChild(templeCardArea);
	tCard.appendChild(templeCardImg);

	const templeCardsFinal = document.querySelector('.container');
	templeCardsFinal.appendChild(tCard);

	return tCard;
})



