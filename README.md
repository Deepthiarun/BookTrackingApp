# MyReads Project - Book Reading App

## Table of Contents
* [Project Overview](#overview)
* [System Requirements](#systemRequirements)
* [How to install](#howToInstall)
* [How to viwe the site](#howToView)
* [Known Issues](#knownIssues)
* [About](#about)

## Project Overview
This project is to creat an an App for tracking the books. Books can be categorised in to three different shelves: Currently Reading, For Reading and Finished Reading.

## System Requirements
* Node.js and npm
* Browser - Google Chrome/Mozilla Firefox

## Setup
* Copy the proejct folder to the local disc
* Open Node.js command prompt and change the working directory to the project folder
* Install the project using `npm install`
* Install React Router DOM -- `npm install --save react-router-dom`
* Start the local webserver -- `npm start`
* The main page will be opened on a new window of the default browser. Else use `http://localhost:3000/` 

## How to use the App
* The main page shows three book shelves with an intial set of books. Its shows the book image, title and author.
* Click the green button at the lower right corner of each book to move it to a different shelf (Click 'None' to remove it from the shelf)
* Click the + button at the lower right corner of the page to open a search page. 
* Search for books using Title or Author. Use the green button to add the book to any shelf on main page
* Use the back arrow on the page to go back to the main page.
    

## Known Issues / Limitations
* Search is limited to few keywords mentioned in SEARCH_TERMS.md

## About
* Release Date: 20-Sep-2018
* Version: 1.0
* Developer: Deepthi Sadasivan [LinkedIn](https://www.linkedin.com/in/deepthi-sadasivan)
* Contact: deepthi.arunn@gmail.com

## License
* This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
* Udacity, MDN webdocs, W3Schools and Stackoverflow community
* Built with starter code from [Udacity](https://github.com/udacity/reactnd-project-myreads-starter)

## Included Files
```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. 
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── App.css # Styles for the app.
    ├── App.js # This is the root of the app.
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── Book.js # The book component
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── BookShelf.js # The book shelf component
    ├── Changer.js # The dropdwon control for moving books
    ├── index.css # Global styles. 
    ├── index.js # Used for DOM rendering only.
    └── Search.js # Book search page .
```

## BooksAPI Documentation
[`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

