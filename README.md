## Features

- Search music
- Create playlist


## Using

- [Create React App](https://create-react-app.dev/) to initialize the project.
- [React Redux](https://react-redux.js.org/) for manage the state.
- [Material-UI](https://mui.com/material-ui/getting-started/installation/)for user interface.
- [react testing-library](https://testing-library.com/) to test the code 
- Deploy on [Vercel](https://vercel.com/).

## How to run on local

- Clone this project

    ```bash
    git clone https://github.com/qepotjo/Gigih-spotify
    ```

- Go to the project folder

    ```bash
    cd spotify-app
    ```

- Install dependencies

    ```bash
    npm install
    ```

- Setup environment variables

    Create file with name `.env.local` and add the following content:

    ```env
    REACT_APP_SPOTIFY_CLIENT_ID = <your spotify client id>
    ```

- Run the server

    ```bash
    npm start
    ```

- Open <http://localhost:3000> with your browser to see the result.
