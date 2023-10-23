# Game Search

This is a Nuxt v3 application that allows user to search for games, by platform and by genre, and save locally their favorites.

## Getting Started

To locally preview production build, follow the instructions below.

### Prerequisites

To run the application you will need Docker an Docker Compose installed on your machine.

To install it, follow the instructions from the official websites:

* [Docker](https://docs.docker.com/install/)
* [Docker Compose](https://docs.docker.com/compose/install)


## API url and ENV VARS
This app uses env var to keep the api urls and api keys safe.

In real projects make sure to not expose sensitive API information, like APY KEYS, TOKENS, or any other things that should by private.

If you want to run without docker, create a .env file:

BASE_API_URL=https://www.freetogame.com/api/games
BASE_API_URL_SINGLE_DATA=https://www.freetogame.com/api/game

### Installing

Run the command below from the root directory, which is the folder where the *docker-compose.yml* file is.

```
sudo docker compose up or sudo docker-compose up
```
or

```
npm run dev
```


This command will create the container for the application to run.
Once the container is up and running, the application will be accessible on ```http://localhost:3000```.

## Built With
* [Nuxt](https://nuxt.com/)
* [Sass](https://sass-lang.com/)
* [Docker](https://docs.docker.com/)
* [Docker Compose](https://docs.docker.com/compose/)
