# About React
React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.

# Introduction 
I made this react app from scratch with 3 client side routes using react routers to make it looks like a multi page appliacation, I also used a external API for showing the home page data, which is read only,  and use a json server to create a Restful API for for my backend, This app has 4 functionalities which are: "showing animals", "searching animals", "adding animals" and "deleting animals". 

Inside the home page, there are 10 animals with their informations are currently showing , when I refresh the page it will load other 10 random animals,  
and I can search animals by their informations inside the animal searcher text input field.

Inside the our animals page, it’s not showing all informations like how it shows in the home page, just make it easier to demonstrate the functionalities, however if you want to show the full information about animals, simply uncomment from line 18 to 23 in NewCard.js component. So I assume the animals showing here are the current animals in "our zoo", what I mean by that those data are what I created inside of my db.json file, it will enable me to post or patch the data

I can also add animals by filling out the form in Adding Animals page, which is making a post request to our database(db.json) under the hood, when I click the add animal button it will add into the db.json, you can check the new added animal in db.json file, to delete animals by clicking the deleting button in our animals page. 

The last thing is the url, when I change the directions the url will also change because I uesed client side routes, test it out by changing direction using three blue buttons. 

# Walkthrough Video

https://youtu.be/NakdCuq5s9M

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
