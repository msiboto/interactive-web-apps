//import all variables from data.js after exporting them
import { BOOKS_PER_PAGE, authors, genres, books } from "./data.js";

//retrieve and initialise all DOM elements to be appended
const dataHeaderSearch = document.querySelector("[data-header-search]");
const dataHeaderSettings = document.querySelector("[data-header-settings]");
const dataListItems = document.querySelector("[data-list-items]");
const dataListMessage = document.querySelector("[data-list-message]");
const dataListButton = document.querySelector("[data-list-button]");
const dataListActive = document.querySelector("[data-list-active]");
const dataListBlur = document.querySelector("[data-list-blur]");
const dataListImage = document.querySelector("[data-list-image]");
const dataListTitle = document.querySelector("[data-list-title]");
const dataListSubtitle = document.querySelector("[data-list-subtitle]");
const dataListDescription = document.querySelector("[data-list-description]");
const dataListClose = document.querySelector("[data-list-close]");
const dataSearchOverlay = document.querySelector("[data-search-overlay]");
const dataSearchForm = document.querySelector("[data-search-form]");
const dataSearchTitle = document.querySelector("[data-search-title]");
const dataSearchGenres = document.querySelector("[data-search-genres]");
const dataSearchAuthors = document.querySelector("[data-search-authors]");
const dataSearchCancel = document.querySelector("[data-search-cancel]");
const dataSettingsOverlay = document.querySelector("[data-settings-overlay]");
const dataSettingsForm = document.querySelector("[data-settings-form]");
const dataSettingsTheme = document.querySelector("[data-settings-theme]");
const dataSettingsCancel = document.querySelector("[data-settings-cancel]");

//initialise matches & page - to display 36 books, adding an additional 36 books everytime you click "show more"
const range = [0, BOOKS_PER_PAGE];
let matches = books;
let page = 1;

//opens theme settings
dataHeaderSettings.addEventListener("click", () => {
        dataSettingsTheme.focus();
        dataSettingsOverlay.showModal();
    });

//dark & light mode settings
const css= {
    day: ["255, 255, 255", "10, 10, 20"],
    night: ["10, 10, 20", "255, 255, 255"],
};

//submit event listener after user selects dark/light theme to correspond to css object 
dataSettingsForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formSubmit = new FormData(event.target);
    const option = Object.fromEntries(formSubmit);
    if (option.theme === "night") {
        document.documentElement.style.setProperty(
            "--color-light",
            css[option.theme][0]
        );
        document.documentElement.style.setProperty(
            "--color-dark",
            css[option.theme][1]
        );
    } else {
        document.documentElement.style.setProperty(
            "--color-light",
            css[option.theme][0]
        );
        document.documentElement.style.setProperty(
            "--color-dark",
            css[option.theme][1]
        );
    }
    dataSettingsOverlay.close();
});

dataSettingsCancel.addEventListener("click", () => {

//once "cancel" is clicked, closes settings
    dataSettingsOverlay.close();
});

 //loop creates a list of books showing only 36 previews at a time.
const fragment = document.createDocumentFragment();
const extracted = books.slice(0, 36);

for (let i = 0; i < extracted.length; i++) {
    const { author: authorId, id, image, title } = extracted[i];
    const extractedBooks = document.createElement("button"); 
    extractedBooks.classList = "preview";
    extractedBooks.setAttribute("data-preview", id);
    extractedBooks.innerHTML = /* html */ `
        <img
            class="preview__image"
            src="${image}"
        />
        
        <div class="preview__info">
            <h3 class="preview__title">${title}</h3>
            <div class="preview__author">${authors[authorId]}</div>
        </div>
    `;

    fragment.appendChild(extractedBooks);
}
dataListItems.appendChild(fragment);

// create a dropdown list of the genres options
const bookGenre = document.createDocumentFragment();
const theGenres = document.createElement("option");
theGenres.value = "any";
theGenres.textContent = "All Genres";
bookGenre.appendChild(theGenres);

const genreArray = Object.entries(genres);
for (let i = 0; i < genreArray.length; i++) {
    const [id, name] = genreArray[i];
    const genreOp = document.createElement("option");
    genreOp.value = id;
    genreOp.textContent = name;
    bookGenre.appendChild(genreOp);
}
dataSearchGenres.appendChild(bookGenre);


//creates a dropdown list of the author names options
const bookAuthors = document.createDocumentFragment();
const theAuthors = document.createElement("option");
theAuthors.value = "any";
theAuthors.innerText = "All Authors";
bookAuthors.appendChild(theAuthors);

const authorArray = Object.entries(authors);
for (let i = 0; i < authorArray.length; i++) {
    const [id, name] = authorArray[i];
    const authOp = document.createElement("option");
    authOp.value = id;
    authOp.textContent = name;
    bookAuthors.appendChild(authOp);
}
dataSearchAuthors.appendChild(bookAuthors);

//close list items preview
dataListClose.addEventListener("click", () => {
    dataListActive.close();
});

//this click event listener allows a user to click on a book which returns books with an image and full description
dataListItems.addEventListener("click", (event) => {
    const pathArray = Array.from(event.path || event.composedPath());
    let active = null;

    for (let i = 0; i < pathArray.length; i++) {
        const node = pathArray[i];
        if (active) {
            break;
        }
        const previewId = node?.dataset?.preview;

        for (let i = 0; i < books.length; i++) {
            const singleBook = books[i];
            if (singleBook.id === previewId) {
                active = singleBook;
                break;
            }
        }
    }
    if (!active) {
        return;
    }
    dataListActive.open = true;
    dataListBlur.src = active.image;
    dataListImage.src = active.image;
    dataListTitle.textContent = active.title;

    dataListSubtitle.textContent = `${authors[active.author]} (${new Date(
        active.published
    ).getFullYear()})`;
    dataListDescription.textContent = active.description;
});

// testing if books exist
if (!books && !Array.isArray(books)) {
    throw new Error("Source required");
}
if (!range && range.length < 2) {
    throw new Error("Range must be an array with two numbers");
}

//more books
dataListButton.innerHTML =
    /* html */
    `<span> Show more books </span>
    <span class="list__remaining"> (${matches.length - page * BOOKS_PER_PAGE > 0 ? matches.length - page * BOOKS_PER_PAGE : 0})</span>`;

    dataListButton.addEventListener("click",()=>{
    const start = (page) * BOOKS_PER_PAGE
    const end = start + (BOOKS_PER_PAGE)
    const newBook = books.slice(start, end)
    const newBookFragment = document.createDocumentFragment();  //contains all the book previews which is appended to a container element in the DOM
//creates a preview of the book by calling the function createPreview()
    for (let i = 0; i < newBook.length; i++) {
        const morebooks = newBook[i];
        const showPreview = createPreview(morebooks);
        newBookFragment.appendChild(showPreview);
    }
    dataListItems.appendChild(newBookFragment);

    const remaining = matches.length - page * BOOKS_PER_PAGE;
    dataListButton.innerHTML = /* HTML */ `
      <span>Show more</span>
      <span class="list__remaining"> (${remaining > 0 ? remaining : 0})</span>
    `;
    dataListButton.disabled = remaining <= 0;
    page =  page + 1;
});


//preview display
function createPreview(preview) {
    const { author: authorId, id, image, title } = preview;

    const morebooks = document.createElement("button");
    morebooks.classList = "preview";
    morebooks.setAttribute("data-preview", id);

    morebooks.innerHTML = /* html */ `
              <img
                  class="preview__image"
                  src="${image}"
              />
              <div class="preview__info">
                  <h3 class="preview__title">${title}</h3>
                  <div class="preview__author">${authors[authorId]}</div>
              </div>
          `;
    return morebooks;
}

dataHeaderSearch.addEventListener("click", () => {
//opens search bar and focuses on title
    dataSearchTitle.focus();
    dataSearchOverlay.showModal();
});

dataSearchCancel.addEventListener("click", () => {
//"cancel" clicked closes search bar 
    dataSearchOverlay.close();
});

//submit search
dataSearchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const filters = Object.fromEntries(formData);
    const result = [];
    const booksList = books;

    for (let i = 0; i < booksList.length; i++) {
        const book = booksList[i];
        let titleMatch =
            filters.title.trim() !== "" && book.title.toLowerCase().includes(filters.title.toLowerCase());
        let authorMatch =
            filters.author !== "any" && book.author.includes(filters.author);
        let genreMatch =
            filters.genre !== "any" && book.genres.includes(filters.genre);

        if (titleMatch || authorMatch || genreMatch) {
            result.push(book);
        }
    }

    if (result.length > 0) {
        dataListMessage.classList.remove("list__message_show");
        dataListButton.disabled = true
        dataListItems.innerHTML = ""
        const searchBook = document.createDocumentFragment();
//creates and displays the book preview of books that matches the filters in the result array 
        for (let i = 0; i < result.length; i++) {
            const book = result[i];
            const bookPreview = createPreview(book);
            searchBook.appendChild(bookPreview);
        }
        dataListItems.appendChild(searchBook);
    } else {
        dataListMessage.classList.add("list__message_show");
        dataListButton.disabled = true
        dataListItems.innerHTML = "";
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
    dataSearchOverlay.close();
    dataSearchForm.reset();
});


























































