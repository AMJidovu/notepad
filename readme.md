<p align="center">
  <img src="https://i.imgur.com/yduVWCu.png" height="120" />
</p>

Notepad provides a painless interface for publishing professional articles. It exposes a minimalist frontend for
editing and publishing articles using markdown formatting.

Notepad is written in NodeJS and is extremely efficient. It's lightweight and can be installed with a single command on
most server environments.

Furthermore, it provides a minimalist interface for viewing your articles:

![screenshot](https://i.imgur.com/SWAd3SF.png)

## API

`GET /api/articles/{article-id}` Get Article

`POST /api/articles` Create Article

`UPDATE /api/articles/{article-id}` Update Article

`DELETE /api/articles/{article-id}` Delete Article

## Running Locally

You can run Notepad locally in development mode for testing by cloning the repository, installing dependecies with `yarn`, and finally running the development server with `yarn dev`.

## Running with Docker

> TODO

## Contributing

1. Fork this repository to your own GitHub account and then clone it locally.
2. Ensure that you have Docker installed on your machine.
3. Commit any changes, then open a pull request.

## License

Notepad is licensed under the MIT license.
