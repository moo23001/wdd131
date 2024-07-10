const input = document.getElementById('favchap');
const button = document.getElementById('submit');
const list = document.getElementById('list');

let chaptersArray = getChapterlist() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', function() {
    if (input.value.trim() !== '') {

        displayList(input.value);
        chaptersArray.push(input.value);

        setChapterList();

        
        input.value ='';
        input.focus();
    } else {
        alert("Input box is empty. Please enter a book and chapter.")
    }
});

function displayList(item) {
    const li = document.createElement('li');

    const deletButton = document.createElement('button');

    li.textContent = item;

    deletButton.textContent = '❌';
    deletButton.classList.add('delete');

    li.append(deletButton);

    list.append(li);

    deletButton.addEventListener('click', function() {
        list.removeChild(li);
        deleteChapter(li.textContent);
        item.focus();
    })
}



function setChapterList () {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterlist() {
    JSON.parse(localStorage.getItem('myFavBOMList'));
}
function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length -1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}


