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

All endpoints that modify the database require a valid `Authorization` header.

### Authorization

`POST /api/auth/login` Authenticate User

### Articles

`GET /api/articles` List Articles

`POST /api/articles` Create Article

`GET /api/articles/{article-id}` Get Article

`UPDATE /api/articles/{article-id}` Update Article

`DELETE /api/articles/{article-id}` Delete Article

## Configuration

A sample `config.example.js` is provided in the repository.

Note: Typings are provided in [`src/typings/config.d.ts`](src/typings/config.d.ts).

**Available options are as follows:**

- `secret` (type: _`string`_) - Secret used to sign JSON Web Tokens
- `database` (type: [_`SequelizeOptions`_](https://sequelize.org/master/class/lib/sequelize.js~Sequelize.html#instance-constructor-constructor)) - Standard sequelize connection options
- `mailer` (type: [_`TransportOptions`_](https://nodemailer.com/smtp/)) - Standard Nodemailer SMTP Transport Options

## Running Locally

You can run Notepad locally in development mode for testing by cloning the repository, installing dependecies with `yarn`, and finally running the development server with `yarn dev`.

### Debugging

I use Visual Studio Code to debug Notepad, here is a sample debug configuration:

```json
{
  "type": "node",
  "request": "launch",
  "name": "Launch Program",
  "cwd": "${workspaceFolder}",
  "program": "${workspaceFolder}/src/index.ts",
  "preLaunchTask": "npm: build",
  "console": "integratedTerminal",
  "outFiles": ["${workspaceFolder}/dist/**/*.js"]
}
```

## Building from Source

You can build Notepad from source very simply. First clone this repository, then install dependecies with `yarn`. After that is complete simply run `yarn build` to build the application, when that is complete run `yarn start` to start the application.

## Running with Docker

As of now there is no image on the docker hub. To run with docker, please clone this repository, modify `docker-compose.yml` for your needs and then run `docker-compose up`.

## Contributing

1. Fork this repository to your own GitHub account and then clone it locally.
2. Ensure that you have Docker or Node installed on your machine.
3. While developing, ensure that you are formatting all code with prettier, you can do this by running `yarn format`.
4. Before commiting, please run `yarn lint` and `yarn typecheck` and correct any errors.
5. Commit any changes, then open a pull request.

## License

Notepad is licensed under the MIT license.
