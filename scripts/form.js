const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

const productName = document.querySelector('#productName');

products.forEach(function(product) {
    const optionLine = document.createElement("option");
    optionLine.value = product.id
    optionLine.textContent = product.name
    productName.appendChild(optionLine);
})

let formAnswers = [];
const postReviewButton = document.getElementById('postReview');
postReviewButton.addEventListener('click', 
  function(event) {
    //event.preventDefault();

    const productNameValue = productName.value;
    const reviewDate = document.getElementById('date').value;
    const writtenReview = document.getElementById('writtenReview').textContent;
    const userName = document.getElementById('userName').value;
    const rating = document.querySelector('input[name="stars"]:checked').value;
    const features = [];
    document.querySelectorAll('input[name="features"]:checked').forEach(function(checkbox) {
      features.push(checkbox.value)
    })

    const formData = {
      productName: productNameValue,
      ratting: rating,
      reviewDate: reviewDate,
      features: features,
      writtenReview: writtenReview,
      userName: userName

    }
    setFormAnswers(formData);
    console.log(formData)
  }
)



function setFormAnswers (formData) {
  formAnswers.push(formData)
  localStorage.setItem('formSubmision', JSON.stringify(formAnswers));
  
  console.log(formAnswers)
}

function getFormAnswers() {
  JSON.parse(localStorage.getItem('formSubmision'));
}

