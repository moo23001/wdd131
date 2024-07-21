const products = [
    {
        productName: "Product 1",
        productPrice: 19.99,
        productDescription: "Product 1 short description",
        productImg: "images/p1_480x480.webp",
        productPromo: true
    },
    {
        productName: "Product 2",
        productPrice: 19.99,
        productDescription: "Product 2 short description",
        productImg: "images/p2_480x480.webp"
    },
    {
        productName: "Product 3",
        productPrice: 19.99,
        productDescription: "Product 1 short description",
        productImg: "images/p3_480x480.webp"
    },
    {
        productName: "Product 4",
        productPrice: 19.99,
        productDescription: "Product 1 short description",
        productImg: "images/p4_480x480.webp"
    },
    {
        productName: "Product 5",
        productPrice: 19.99,
        productDescription: "Product 1 short description",
        productImg: "images/p5_480x480.webp"
    },
    {
        productName: "Product 6",
        productPrice: 19.99,
        productDescription: "Product 1 short description",
        productImg: "images/p6_1280x720.webp"
    },
    {
        productName: "Product 7",
        productPrice: 19.99,
        productDescription: "Product 1 short description",
        productImg: "images/p7_480x480.webp"
    },
    {
        productName: "Product 8",
        productPrice: 19.99,
        productDescription: "Product 1 short description",
        productImg: "images/p8_480x480.webp"
    },
    {
        productName: "Product 9",
        productPrice: 19.99,
        productDescription: "Product 1 short description",
        productImg: "images/p9_480x480.webp"
    },
    {
        productName: "Product 10",
        productPrice: 19.99,
        productDescription: "Product 1 short description",
        productImg: "images/p10_1280x720.webp"
    },
];

productCards(products);

function productCards(filteredProductArray) {
	document.querySelector(".galleryContainer").innerHTML = "";


	filteredProductArray.map((product) => {
	//Create the temple card elements
	const pCard = document.createElement("div");
	pCard.classList = 'card';
	const productCardName = document.createElement('h3');
	const productCardPrice = document.createElement('p');
	const productCardDescription = document.createElement('p');
	const productCardImg = document.createElement('img');
    const orderNowButton = document.createElement('a')
	
	//Give attirbutes to img. Lazy loading here
	productCardImg.setAttribute("src", product.productImg)
	productCardImg.setAttribute("alt", `${product.productName}`)
	productCardImg.setAttribute("loading", "lazy")

    //Give attributes Order Now button
    orderNowButton.setAttribute("href", "contactus.html");
    orderNowButton.textContent = "Order Now"
    orderNowButton.classList.add("orderNow");


	//Assign content
	productCardName.innerHTML = `${product.productName}`;
	productCardPrice.innerHTML = `Price: $ ${product.productPrice}`;
	productCardDescription.innerHTML = `Description: ${product.productDescription}`;
	productCardImg.innerHTML = product.productImg;
	
	//Append child elements to temple card
    pCard.appendChild(productCardImg);
	pCard.appendChild(productCardName);
	pCard.appendChild(productCardPrice);
	pCard.appendChild(productCardDescription);
    pCard.appendChild(orderNowButton);


	const productCardsFinal = document.querySelector('.galleryContainer');
	productCardsFinal.appendChild(pCard);

	})
}