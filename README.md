# 🌟 Star Wars API

Welcome to the **Star Wars Movie API** project! This project aims to provide an interactive interface that uses data from movies in the famous Star Wars series. Using the API, the application loads detailed information about each movie, offering a rich experience for fans of the galactic saga. May the force be with you!

## Project goals

This project was developed with a focus on the following objectives:

- **Use Vue Router**: Separate logical parts of the application and provide route structure for navigation between different components.
- **Use the `<RouterView>` and `<RouterLink>` components**: Implement Vue Router efficiently to render components dynamically.
- **Use the router programmatically**: Manage navigation in response to user events.
- **Generate pages with routes and sub-routes**: Structure the application in different pages and sub-pages, facilitating navigation.
- **Use the `mounted` lifecycle hook**: Load data from the API as soon as the components are assembled in the interface.
- **Use `watchers`**: Regroup API calls and update the interface automatically when new data is available.
- **Use URL params and query params**: Implement routes that capture URL parameters, allowing dynamic views of information according to user choices.
- **Use Axios as an alternative to Fetch**: The Axios library is used to make requests to the API, providing more efficient handling of promises.

  
## Softwares and Languages

- **Javascript**: (https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- **Vue.js**: (https://vuejs.org/)
- **Vue Router**: (https://router.vuejs.org/)
- **Pínia Vue.js**: (https://pinia.vuejs.org/)
- **Axios**: (https://axios-http.com/)
- **Tailwind**: (https://tailwindcss.com/)
- **HTML**: (https://developer.mozilla.org/es/docs/Web/HTML)
- **VSCode**: (https://code.visualstudio.com/)

## Getting Started

To run the project locally, follow the steps below:

1. **Clone the repository**:

```bash
git clone https://github.com/yourusername/star-wars-movie-api.git
cd star-wars-movie-api
```

2. **Install the dependencies**:

```bash
npm install
```

3. **Run the application**:

```bash
npm run dev
```

4. **Acess**: Open your web browser and go to `http://localhost:8080` to see the application in action.

5. ## Contribution

If you would like to contribute to this project, feel free to open issues or pull requests. All contributions are welcome!


## Project Requirements

### 0. Study the file structure

- Notice the `router.js`, where we define the application routes, and how each of them has an associated component. See how they are loaded in the `main.js` file.
- The main components ("page" components) go inside the `views` folder.
- Notice how the `<App />` component delegates which component to display through the `<RouterView />` component.

### 1. Create a homepage

- It should display a list of movies when the `<Home />` page loads.
- We will load the data from [The Star Wars API](https://swapi.dev/). Spend 10 minutes reading the documentation to understand how the different _endpoints_ work.
- You'll need to read about [lifecycle hooks](https://vuejs.org/guide/essentials/lifecycle.html) to use the `mounted` lifecycle hook and load the data when the page loads.
- Use `fetch` or [axios](https://github.com/axios/axios) to load the data in the `getFilms` method. You'll need to call `getFilms` in the `mounted` method. We'll load the data from the `/films/` endpoint.
- Add a loading state for when the data is loading.
- Add styles to the page and design it however you like. You can choose which data to display for each movie.

### 2. Create the movie page and link it to the list

- Each movie should have a link to its page.
- Create a new `Film` component, inside `views`, to display the movie information.
- Create a new route in the `router.js` file. You need to choose a name for the route and associate the component you just created.
- You will need a _param_ in this route to identify the movie to be displayed.
- Link the route to the list of movies in the _home_ using `<RouterLink>`.
- The `getId()` method allows you to get the ID from a URL. You can use it to generate your links correctly.

### 3. Load the movie information

- You need to display the movie information on the movie page.
- In the `Film` component, load the movie data from the API, as you did in the `Home` component. Create the methods, `data` and _lifecycle hooks_ that you need.
- Display the data on the page.
- Add a _loading_ _state_ for when the data is loading.
- Add styles to the page and give it the design you like.

### 4. Display the list of characters on the movie page

Since we don't have the movie names yet, you can just put the link, as if it were the name.

### 5. Create the character sub-page

- Create a new [nested route](https://router.vuejs.org/guide/essentials/nested-routes.html) in the `router.js` file as a sub-route of "film" to display a character.
- Define the parameters you need in this new route to represent the character ID.
- Create a new `<Character />` component to display the character information, pulled from the API.
- Link each of the character names to the new sub-route, using `<RouterLink />`.
- To display the sub-route inside the main route, you will need to use the `<RouterView />` component inside the `<Film />` component.
- At this point, if you select a character, and then select another, the information will not be updated. You will have to read about [watchers](https://vuejs.org/guide/essentials/watchers.html) to reload the necessary data when we want to display a different character.

## Resources

- [Vue Router](https://router.vuejs.org/introduction.html)
- [Vue Documentation](https://vuejs.org/guide/introduction.html)
- [Vue lifecycle hooks](https://vuejs.org/guide/essentials/lifecycle.html)
- [Vue watchers](https://vuejs.org/guide/essentials/watchers.html)
- [Axios](https://github.com/axios/axios)
- [The Star Wars API](https://swapi.dev/)

## Notes

_This is a student project created at [CodeOp](http://CodeOp.tech), at the Front End Development bootcamp in Barcelona.
