const input = document.getElementById('favchap');
const button = document.getElementById('submit');
const list = document.getElementById('list');

button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');

        const deletButton = document.createElement('button');

        li.textContent = input.value;

        deletButton.textContent = '❌';

        li.append(deletButton);

        list.append(li);

        deletButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
        })
        
        input.value ='';
        input.focus();
    } else {
        alert("Input box is empty. Please enter a book and chapter.")
    }
});

