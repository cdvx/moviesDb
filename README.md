[![Build Status](https://travis-ci.org/cdvx/moviesDb.svg?branch=master)](https://travis-ci.org/cdvx/moviesDb)
[![Coverage Status](https://coveralls.io/repos/github/wycliffkas/MoviesDatabase/badge.svg?branch=master)](https://coveralls.io/github/wycliffkas/MoviesDatabase?branch=master)

# The Movies Database (simples demo app React,Redux, MoviesDatabase API, Infinity Scroll)

An application that fetches and displays movies from `TheMovieDatabase Api` and also allows users to add movies to cart.

The Hosted version can be found [here](https://affectionate-sinoussi-76a9de.netlify.com/).

## Features

- Display several movie categories
- Display movies belonging to a selected category with infinite scroll
- Display detailed page of a movie
- Add movies to cart
- Displays movies in a cart


## How to run the application

###### requirements
 - Before you run the application make sure the following are installed
  - `Node, npm or yarn`

  
###### installation

- Clone the repository on the local environment by running:
  `git clone https://github.com/cdvx/moviesDb.git`
- Create a .env file and add a variable `token=<the movies database token>`
- Run `source .env` to source the environment variable
- Run `npm install` if you use `npm` or `yarn` if you use `npm` inorder to install the dependencies
- Run `npm run start` to launch the app which will automatically launch the app in the browser.

## Available Scripts

In the project directory, you can run:

#### `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

#### `npm run test`

Launches the test runner in the interactive watch mode.

#### `npm run test --coverage`

Launches the test runner and also displays test coverage table.

#### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.
