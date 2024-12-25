# Library Management System - FE

This is a Library Management System built with ReactJS while understanding the bear bones frond-end development coding style. So, anybody that wants to learn the front-end technologies like me will be able start the learning by reading this README.md.

Reminder: This is not the perfect code base, explore and grow show me the mistakes or the ways I can improve

Here, I focus on learning the Basics of React JS,

- Using typescript and its type system instead of vanilla JS.
- Catching up on things like props, components, tsx, hooks etc.
- Structuring a ReactJS project
- learning about how to use useMemo, useEffect, useCallback, useContext, useState.
- learning about how to use the redirection in the React JS.

and the rest will be discussed in upcoming sections.

---

## Table of Contents

- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [React Learning Tips](#react-learning-tips)
- [Screenshots](#screenshots)
- [Comments and Feedbacks](#comments-and-feedbacks)

---

## Installation

### Prerequisites

- Knowledge of Vanilla JS
- Node.js (v22 or higher)
- npm (v10.9.0 or higher)
- Having gone through the Typscript handbook. [The TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

### Steps to Install

1. Clone this repository:

   ```bash
   git clone <repository-url>
   ```

2. Install the packages:

    ```bash
    npm i
    ```
3. Run the project:

    ```bash
    npm run dev
    ```

---

## Technologies Used

- For the main code base - ReactJS with typescript
- Styling - css
- For making requests - axios library.
- Authentication - uses JWT tokens (In here not the perfect implementation but open for suggestions.)
- Routing  - React router dom package.
- Forms - [React hook form](https://www.react-hook-form.com/)

---

## Getting Started

- I Started by learning the HTML
    - what is markup means.
    - HTML tags and the structure
    - The semantics.
    - The tables and inputs etc.

- Secondly, moved on to the css - How to style it.

- Moved on to Vanilla JS or simply  Javascript
    - Understand the DOM concept first it makes the life easier 
    - [Follow this article to make sure you know the programming ascept of javascript](https://github.com/lydiahallie/javascript-questions)
    - Learnt especially how callbacks, promises work later moved to "async/await" which is the syntatic sugar of callbacks and promises.

- Before going into ReactJS I was exploring the frameworks that is being used.
- Then started learning ReactJs
    - **This is the phase I had my revelation.**
    - **Reusability**, The idea behind this whole ReactJS. Correct me if I'm wrong.
    - How the React component works - Component lifecycle
    - How the virtual DOM comes to the picture.
    - still on the curios mind what's really going on behind the scenes of react.

---

## Folder Structure

- Followed this structure. But in React JS you have the flexibility to decide where to put your files. 
- In the begining this is a pain in the a$$, if you are coming from backend technologies with a structured way of thinking. But don't worry you will notice the benefits.


```markdown

src
  -app
  -assests
    --images
    --fonts
  -components
    --nav-bar
      ---NavBar.tsx
      ---NavBar.less
    --book-card
      ---BookCard.tsx
      ---BookCard.less
  -context
  -e2e
  -pages
    --books
      --BookListPage.tsx
      --AddBookPage.tsx
  -layouts
    --app-layout
    --public-layout
  -locales
    --de
      ---translation.json
    --en
      ---translation.json
  -models
    --book.ts
    --author.ts
  -routes
    --Routes.tsx
  -services
    --bookService.ts
  -styles
    --styles.less
  -utils
    --constants.ts
    --dateUtils.ts

```
---

## React Learning Tips

- First, have to understand what is a stateful variable, Then move on to the useState hook
- Have to learn bunch of hooks that will help you do certain things.
- [Then use typescript to do the same things.](https://www.youtube.com/watch?v=TPACABQTHvM)
- Mix learning materials with texts and visuals.
- Ask a friend to review your code. Be humble!
- explore, but don't forget to code it yourself.

---

## Screenshots

![](assets/image_1.png)
![](assets/image_2.png)



---

## Comments and Feedbacks

Let me know how can I improve 💖.

