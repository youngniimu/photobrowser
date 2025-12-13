# Photo Browser

Photo Browser is a simple web app representing features that are fairly common in many real life web apps out there (i.e. fetching JSON formatted data from a REST API, presenting the data on a list and perhaps demonstrating some basic navigation in form of opening a details page describing single item in detail).

## Assignment

The coding challenge consists of creating a small app that pulls and displays data from a RESTful API. The backend and some documentation how to use it can be found here: http://jsonplaceholder.typicode.com/

Your task is, using the `/photos` endpoint, to display a list of all the photo thumbnails in the app. By clicking a photo a single photo view should appear, displaying the full-sized photo along with the relevant information related to the photo. How you do implement and lay this out is up to you.
The API returns links to images that don't exist anymore. You can replace the image urls from https://picsum.photos/ in order to show actual photos.

The API also provides albums and users that are related to the photos. If you have the time, feel free to add e.g. user details view, presenting some of her information in a nice way or maybe an album view displaying all images in a single album. Paging functionality would also be cool (the demo API is powered by [json-server](https://github.com/typicode/json-server), so all `GET` endpoints provide params `_page` and `_limit`). Lazy loading is an option also. Or maybe demonstrate your testing proficiency by creating nice set of tests. Or something completely different! Feel creative, the stage is yours!

***

## Requirements

Only three requirements:

1. The app needs to be a [single-page application](https://en.wikipedia.org/wiki/Single-page_application) (make sure to handle routing, navigating back & forth with browser history etc.).
2. It should be possible to share an URL that links to a single photo's page.
3. Even though we **strongly** believe in making all websites work on all browsers, in this case we allow an exception: Make sure the app works (at least) on the latest version of Chrome.

You can choose the architectural design and patterns freely, use whichever JS libraries/frameworks or other components you prefer. There’s no requirement for the implementation language itself, so in addition to JavaScript, feel free to use for example Elm or ClojureScript!

Provide us a way of seeing your source code (GitHub, Bitbucket, if all else fails then a .zip file…) and preferably a live version of the product ([GitHub Pages](https://pages.github.com) is a great and easy way, [Netlify](https://netlify.com) is another). If a live version is not available, provide a good README instructing how to get the app up & running.

In order for us to have time to have a look at your solution, **please return the assignment at the latest during the previous working day before your interview.** If at all feasible, bring your own laptop for reviewing your solution.

Some guidelines:

- Your solution should be able to scale for a larger purpose. Thus imagine the app being extended to cover a larger API, a bigger feature set and more views.
- Showcase your abilities, and use the task to demonstrate your idea of best practices, regarding coding style, project structure, frameworks, patterns, design, testing etc.
- There is no right or wrong solution, as long as it is your solution.
- Be prepared to describe your work in detail.