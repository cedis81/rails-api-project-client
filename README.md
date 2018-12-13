# Fantasy Baseball
***

For this project, we were tasked with creating a front end app and our own API from scratch using the technologies we have learned so far at the Web Development Immersive at General Assembly through about seven weeks. The goal for me was to achieve MVP (minimum viable product), and that was to have my client communicate with an API that I created, allowing a user to first create a fantasy baseball league for version 1, with later versions eventually allowing those leagues to have teams with players and seeded statistics. The leagues are saved on my Heroku server with the database created on Rails, and the user is able to CRUD those leagues.


I have created new user authorization layout using Handlebars, Bootstrap, HTML and SASS, and made API calls to the Heroku server using both curl scripts and Ajax. The page is a single page application that does not necessitate refreshing at any point to operate. Throughout the process, Git and GitHub were used for version control.


My planning process was to figure out the wireframes to dictate the path of the user. We had four days to complete this project. My first step was to create the back end server in Rails, and confirmed all the CRUD actions with both curl scripts and Ajax calls, for both users and leagues. Once that was complete, I then moved on to updating the client and using Bootstrap and Handlebars to allow the user to navigate the site. One thing I for sure will take from this project is building better wireframes going forward, including forms, and layout instead of relying just on page paths. This will aid in planning the development of the app and creating a schedule to adhere to.


This took a lot longer than I had expected, as it took a lot of double checking, testing, and re-testing with new paths created on the page. Getting used to modals, and their patterns with hiding/fading, and clearing forms was a little bit of a challenge but was fun to work with. Having created this base will be good going forward as I can re-use this methodology and re-create it quickly. I'm looking forward to re-visiting this app and continuing to work on the development of building out the league before the 2019 season.


For the purposes of our project, the following are the rules that the app had to adhere to:
  * App must be a single page application and not use refresh to make any actions or updates
  * User must be able to create a new resource
  * User must be able to update a resource
  * User must be able to delete a resource
  * User must be able to view a single or multiple resource(s)
  * All resource actions must only be available to a signed in user.
  * Give feedback to the user after each action's success or failure.
  * All forms must clear after submit success or failure
  * Adhering to the user stories set forth below.

### List of technologies used:
  * Jquery
  * AJAX
  * JavaScript
  * HTML
  * SASS
  * Bootstrap
  * Handlebars
  * Curl
  * Git
  * GitHub

### User stories, version 1:
  1. As a user, I should be able to sign up for the app, and when I sign up, the option to do so should disappear.
  2. As a user, I should be able to sign in to the app after I have signed up for the game, and when I sign in to the game, options to sign up and sign in should disappear.
  3. As a user, I should be able to change my password, and log out successfully.
  4. As a user, I want to be able to create a team.

### Wireframes
Below is the version 1 wireframe created for MVP for this app.
![alt text](/assets/images/fbwireframev1.JPG "Fantasy Baseball App version 1 wireframe")

### Links:
[App client](https://cedis81.github.io/rails-api-project-client/)
[Heroku server page](https://cryptic-peak-27744.herokuapp.com/)
[Back end GitHub repo](https://github.com/cedis81/rails-api-project-back-end)

### Unsolved issues:
Below are unsolved issues that I would like to address in future iterations:
* Allow users to create teams and link them to an individual league.
* Allow users to add players to these teams, but only one single player instance per league.
* Seed player data.
* Aggregate statistics for players on each team.
* Aggregate statistics for each team in a league to determine standings
