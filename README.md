<a name="async-await-starter"></a>

<div align="center">
  <a href="https://github.com/PrimeAcademy/async-await-starter">
    <img src="https://avatars.githubusercontent.com/u/9360728?s=200&v=4" alt="Logo" width="80" height="80">
  </a>
  <h3>Async/Await Starter</h3>
  <p>
    <a href="https://github.com/PrimeAcademy/async-await-starter/issues">Report Bug</a>
    ·
    <a href="https://github.com/PrimeAcademy/async-await-starter/issues">Request Feature</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ul>
    <li>
      <a href="#about-this-repo">About This Repo</a>
    </li>
    <li>
      <a href="#github-setup">GitHub Setup</a>
    </li>
    <li><a href="#local-setup">Local Setup</a></li>
    <li><a href="#instructions">Instructions</a></li>
  </ul>
</details>

## About This Repo

⚪🔴 We will be building a basic Pokedex Strength Index application to find the strongest Pokemon in batches using the [PokeApi](https://pokeapi.co/) and [async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) with our database!

Much of the code is already setup, but we will need to add our new way of handling promises!

[Async/Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) in JavaScript is a way to handle [asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing) operations more easily and readably by allowing functions to pause while waiting for a [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) to resolve and then continue execution. We need it to write cleaner, more understandable code for tasks like fetching data from an API, without getting bogged down in complex promise chains or [callback hell](http://callbackhell.com/).

[🔝 back to top](#async-await-starter)

## GitHub Setup

- [ ] **Create Repo from Use Template**:

  - Click [HERE](https://github.com/new?template_name=async-await-starter&template_owner=prime-digital-academy) or the `Use Template` button in this repo to create a new repo.
  - Ensure `Include all branches` is left unchecked.
  - Specify your username and repo name appropriately.
  - Provide a description for the repo (optional).
  - Set the repo as `Public`.
  - Click `Create repository`.

[🔝 back to top](#async-await-starter)

## Local Setup

- [ ] **Clone your Repo**:

  - Click the `<> Code` button in this repo and choose `SSH`.
  - Copy the URL. It should look something like: `git@github.com:YOUR-USERNAME/YOUR-REPO-NAME.git`.
  - In your terminal, navigate to the directory where you want to clone this repo.
  - Execute `git clone git@github.com:YOUR-USERNAME/YOUR-REPO-NAME.git`, replacing the placeholders with actual values.

- [ ] **Create Database in PostgreSQL (using Postico)**:

  - Create a database named `async-await-starter-db` in Postico with the values in your `pool.js` file.
  - Copy and paste the content from your `database.sql` into your PostgreSQL database.
  - Run the queries in the new database to populate your tables with data.

- [ ] **Install Node Dependencies**:

  - In the terminal, navigate to the folder you cloned this repo and run the following:

    ```shell
    npm install
    ```

[🔝 back to top](#async-await-starter)

## Instructions

- [ ] **Start the application**:

  - In the terminal, run the following to start the server:
  
    ```shell
    npm run server
    ```

  - In a second terminal, run the following to start the client:

    ```shell
    npm run client
    ```

The UI should open in your default web browser to the correct URL. If not, open [localhost:5173](http://localhost:5173) in your web browser.

> **NOTE:** The key combination `ctrl-c` will stop your server/client from running. Whichever current Node.js process is running in that terminal will stop on macOS.

Follow along with your instructor to create a splendid Pokedex Strength Index application! Happy Priming!

[🔝 back to top](#async-await-starter)
