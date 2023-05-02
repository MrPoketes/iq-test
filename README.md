# IQYou

IQ test developed by Armintas Zadeika as part of BSc Computer Science dissertation project.

## Prerequisites

- <a href="https://nodejs.org/en">NodeJS</a>
- <a href="https://yarnpkg.com/">Yarn</a>
- <a href="https://www.docker.com/">Docker</a>

## Setting up the project

- Firstly, you need to configure your `.env` file. For development environment, you can simply copy `.env.example` provided and rename it to `.env`

- Installing node modules:

  ```sh
  yarn install
  ```

- Start the Postgres Database in [Docker](https://www.docker.com/get-started):

  ```sh
  yarn docker
  ```

  > **Note:** The yarn script will complete while Docker sets up the container in the background. Ensure that Docker has finished and your container is running before proceeding. Also ensure that Docker is running on your system, otherwise it will give an error saying that port 5432 is unreachable.

- Initial setup:

  ```sh
  yarn setup
  ```

- Run the first build:

  ```sh
  yarn build
  ```

- Start dev server:

  ```sh
  yarn dev
  ```
