# A Tree of Ice and Fire

### Problem

You will be creating a full-stack application to display information about characters from the popular book series, *A Song of Ice and Fire*. For those unfamiliar, *A Song of Ice and Fire* (also known as *Game of Thrones*) is a fantasy genre show that has many different houses, characters, and kingdoms. Your goal is to construct an application that renders a simplified family tree for a given character using data stored in a database. **Please note that knowledge of the books/show gives you no advantage in this exercise.** Being familiar with the character names is just a fun bonus.

Below is a gif of what your finished page will look like (*NOTE: Click on the gif for a closer look*) and a visualization of the Stark family tree (right)
<br>
 <img src="http://gifyu.com/images/finished-example.gif" alt="example1.gif" border="0" height="400px" />
 <img src="https://s29.postimg.org/4ytamtsnb/Screen_Shot_2017_01_16_at_1_25_12_PM.png" height="400px" width="600px" />
<br>

### Technologies

In order to accomplish this task, you'll be storing information from a JSON file in MongoDB using the [Mongoose ODM](http://mongoosejs.com/). Your front end will display views created from data in the database. You will have the choice of using either [AngularJS](https://angularjs.org/) or [ReactJS](https://facebook.github.io/react/), and will serve your application with a [NodeJS](https://nodejs.org/) web server using [ExpressJS](https://expressjs.com/).

NAME WHICH FRONT END FRAMEWORK YOU WILL BE USING FOR THE ASSESSMENT HERE:
* *[AngularJS or ReactJS]*:

**By design, this assessment contains more work than you will be able to complete in a day**, so don't be concerned about not completing all of the features below. Rather, please work on the following features **in order**, moving on to the next feature **only after** the one you are working on is complete. **Please commit WORKING code early and often**.

### Character Information

  * Build out `insertAllCharacters.js` to store the data from characters.json in MongoDB, using `db/models/character.js` and `db/controllers/character.js`.
  * Serve your application from the provided ExpressJS web server.
  * If using Angular:
    * Use the existing code in the `angular-client` directory, and build the `FamilyTree` view in `angular-client/app/views/familytree.html`.
    * Start your application with the command `npm start`.
  * If using React:
    * Use the existing code in the `react-client` directory, and build the `FamilyTree` view in `react-client/src/components/FamilyTree.jsx`. You may also need to modify `react-client/src/index.jsx`.
    * Start your application with two commands - `npm start` and `npm run dev-react` - in two separate Terminal tabs. For more information about Webpack, read the comments in `webpack.config.js` or take a look at [the Webpack Docs](https://webpack.github.io/docs/).
  * With your chosen framework, render the example tree data provided for you. It should look similar to the gif shown above.
  * After successfully populating your database by running `insertAllCharacters.js` once, complete the buildTree function in `tree-builder.js` (React) or `familyTree.js` (Angular) that, given a character name, generates a family tree for that character. (*NOTE: For simplicity's sake, each character only has one parent*).
  * Use buildTree to render the family tree for a character name entered into the search bar.

### Spoiler button

  * By default, information other than the character's name and their children should be hidden. Your task is to add a "Spoiler" button to each character that, on click, shows if they are either alive or dead. If they are dead, show the date they died.

### Input Validation

  * Add a feature that detects whether a submitted character name is a valid character name.
    * If the name is valid, display the character's family tree.
    * If the name is invalid, tell the user there is no character by that name.
  * Allow a user to enter a name in uppercase or lowercase letters (Ex: "jon snow" should get the same results as "Jon Snow").
  * Allow a user to search for a character not only by full name, but also by known aliases.

## Available Resources

* [Stack Overflow](http://stackoverflow.com/)
* [MDN](https://developer.mozilla.org/)
* [ExpressJS Docs](https://expressjs.com/)
* [Body Parser Middleware Docs](https://github.com/expressjs/body-parser)
* [Mongo Docs](https://www.mongodb.com/)
* [Mongoose ODM Docs](http://mongoosejs.com/)
* [AngularJS Docs](https://angularjs.org/)
* [ReactJS Docs](https://facebook.github.io/react/)
* [React Router Docs](https://github.com/ReactTraining/react-router/tree/master/docs)
* [Webpack Docs](https://webpack.github.io/docs/)
* [Babel Docs](https://babeljs.io/docs/setup/)
* [NodeJS Docs](https://nodejs.org/)
* [ExpressJS Docs](https://expressjs.com/)
* [jQuery Docs](https://jquery.com/)
* [Postman](https://www.getpostman.com/)
* [BluebirdJS Docs](http://bluebirdjs.com/)
* [Classnames](https://www.npmjs.com/package/classnames)
* Docs for any npm packages you might use
* [Google Search](https://google.com) to search for the correct page on any of the documentation above
