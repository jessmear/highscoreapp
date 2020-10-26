# High Score App

## About

High Score game was developed in October 2020 by Jess Mear (jessmeardev@gmail.com), starting with Create React App. The Star Wars API (https://swapi.dev/) was used to populate the leaderboard.

## Dev Goals

Possible Updates:

- Make both styles more mobile friendly

- Put leaderboard data in a DB so that the leaderboard could be real players


Possible UX Features:

- Implement and test a feature where there is no need to reset, but instead the user can continue playing, but after each tenth click, the score is reset to 0
  - This would allow a smoother play experience
  - It would remove some of the fun and tension in that each round no longer feels separate

- Implement and test a feature where the user can toggle sorting the leaderboard by score or average score per click
  - This would add a more of a sense of fun and also add interest to the leaderboard
  - The leaderboard is displaying the average data
  - Work remaining: implementation of the sort and a button or UI element

- Add colors to the numbers in the points list to reflect how high or low they are

- Add some css animation and more elaborate displays to add fun and engagement

- Add a rapidly shifting number (spinner?) so the ucer can try to click on a higher number intentionally, instead of getting a random number


### Testing

Some tests have been implemented.

More tests are needed to reliably flag when there is an issue. The Game component, in particular, has a lot of functionality that could easily be disrupted by changes. Some additional tests that I think would be useful include:

HighScoreApp
- Test that the API data is converted to useful data for the leaderboard
  - Specifically in regards to the Star Wars API
  - Test that height is converted to points
  - Test that clicks is a random number between 2 and 10 (inclusinve)
  - Test that a name and an id exist for each record
  - test that the user is added to the list
- Test that each component shows up

Game
- Test that when the play button is clicked
  - points is updated
  - score is updated
  - clicks are updated
  - maxRounds is checked
- Test when reset is clicked
  - handleReset is called
- Test that when handleReset is called
  - userInfo is reset to 0 clicks, 0 score
  - points is set to []
  - play button is enabled
- Test that when submit is clicked
  - user is removed from playerList
  - updateHighScore is called
  - data is POSTed (currently posting to a sample api)
  - handleReset is called
- Test that when updateHighScore is called
  - if userScore is lower than highScore, highScore is not updated
  - if highScore is not in the playerList, the list is updated to include it
  - if userScore is higher than highScore, highScore is updated
- Test that when updatePlayerList is called
  - if the removeUser flag is false (default), and the current user is not in the playerList, add the user
  - if the removeUser flag is passed as true, user is removed from the playerList
- Test that when points list is called, the cumulative list of user points is correctly updated
- Test that each component shows up

Leaderboard
- Test that when tableRows is called, the sorted list is generated and placed on the page as a table
- Test that each component shows up


## Quick Start

Currently running on `node v15.0.1`
To begin the development, run `yarn start`.
To create a production bundle, run `yarn build`.

## How to Deploy Create-React-App Onto GitHub Pages

### Configure Remote Repo to use gh-pages

Set up gh-pages on the remoterepo (see help files on GitHub)

### Configure Local Repo to use gh-pages

`npm install gh-pages --save-dev`

Edit the package.json: "homepage": "http://{githubusername}.github.io/{nameofrepo}" in scripts: "predeploy": "npm run build", "deploy": "gh-pages -d build"

### Deploy Code to Production

`npm run deploy`

### Push Code into Remote Repo

Note: Pushing code does NOT deploy the code

`commit` and `push`


---

# Readme Content from Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
