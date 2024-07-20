let formAnswers = [];
const postReviewButton = document.getElementById('sendRequest');
postReviewButton.addEventListener('click', 
  function(event) {
    event.preventDefault();

    const contactName = document.getElementById('fullName').value
    const contactEmail = document.getElementById('email').value;
    const contactRequest = document.getElementById('request').value;


    const formData = {
        contactName: contactName,
        contactEmail: contactEmail,
        contactRequest: contactRequest

    }
    setFormAnswers(formData);
    console.log(formData)
  }
)



function setFormAnswers (formData) {
  formAnswers.push(formData)
  localStorage.setItem('formRequests', JSON.stringify(formAnswers));
  
  console.log(formAnswers)
}

function getFormAnswers() {
  JSON.parse(localStorage.getItem('formRequests'));
}

