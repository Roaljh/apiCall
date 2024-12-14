
- `app.js`: The main application file that sets up the Express server and routes.
- `package.json`: Contains the project metadata and dependencies.
- `views/`: Contains the Handlebars templates for rendering the views.

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the server:
    ```sh
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000` to view the product catalog.

## Routes

- `/`: Fetches and displays a list of products.
- `/product/:id`: Fetches and displays details for a specific product by ID.

## Dependencies

- [Express](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js.
- [Axios](https://axios-http.com/): Promise-based HTTP client for the browser and Node.js.
- [Handlebars](https://handlebarsjs.com/): Simple templating language.
- [Nodemon](https://nodemon.io/): Utility that monitors for any changes in your source and automatically restarts your server.

## License

This project is licensed under the MIT License.
