# Welcome to Appspace React FE Challenge

Here's the link to deployed version of app - https://appspace-rick-and-morty.herokuapp.com/

## About project

### Implemented 
1. Responsive design. (Mobile first, tablet and desktop view)
2. Used Styled Components for CSS.
3. Implemented loading animation. 
4. **React router V6**, for:
- Page not found
- Routing to home page from the header icon.
5. Implemented a search bar, which filters characters by name.
6. Paginated list of items (**Used React Paginate package**):
- Shows all pages for non-filtered characters.
- Shows all pages related to filtered charactes by name.
- Have a button for previous and next page.
- Have numbered buttons, so you can go to the last or first one.
7. For pagination and filtering implemented **URL Search Params**:
- Which works and updates when you search for a character.
- It updates when you change to a different page.
---

### Overview

The Main focus was on Url Search Params. It took most of the time to handle that it will be dinamically updated when you use search or changing pages.
Played a bit with CSS animations, so when you hover over the character card, it flips and displays info about the character.
As well deployed the app on Heroku. It's not perfectly woking, but it is just to see the general view.


---

### Things I had in mind
To build navigation with more options, and more search filters. But I took a path to make a fully working Url search params function.

---
## Screenshots

Desktop and mobile view

<p align="center">
<img src="src/assets/project-overview.png" />
</p>

---

## Getting Started

1. Clone repo

```
git clone https://github.com/Jonas-Petrauskas/appspace-frontend.git
```

2. Install dependencies

```
Yarn install
```

3. Start the project

```
go to -> src file | yarn start
```


---

## Developed by

Jonas Petrauskas - [GitHub](https://github.com/Jonas-Petrauskas) - [LinkedIn](https://www.linkedin.com/in/jonas-petrauskas-78038894/)
