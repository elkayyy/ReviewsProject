# Zoover FE assessment

## Requirements

This is an assignment that requires creating a good web UI visual performing a set of mathematical calculations and a web UI for visualization. A ready server that returns a collection of reviews for one single accommodation is provided and this acco page needs to be implemented.

A JSON file that contains a collection of reviews for one single accommodation is provided with end points that you can use directly from your fe app (`client`). It is expected that the calculations be performed on the server side using Node.js.

Use those reviews to perform the following tasks:

1. Calculations : Fix the missing `getReviewWeight` function in `_util.js` to do the required job in the server folder (don't worry it is just a JavaScript function). Each review has to have a weight value in the calculations. The weight value can be calculated as follows: when the review is older than 5 years its weight value defaults to 0.5. Otherwise it equals: 1 - (current_year - year_of_review)\*0.1

Keep in mind that each review has to have a weight value in the calculations.
The weight value can be calculated as follows:
when the review is older than 5 years its weight value defaults to 0.5. Otherwise it equals: 1 - (current_year - year_of_review)\*0.1

2. Build a UI to visualize the calculated rating values of the accommodation along with the list of reviews. It is up to you to choose how to serve reviews from the server; the choice will influence the assessment though. The following functionality is required:

   - filter by traveledWith value.
   - sort by travel date or review submission date.
   - (Nice to implement) implement a pagination functionality.

## How to use

- Just run `yarn install` in the root folder will install all dependencies for the client and the server as it is a monorepo
- Then run `yarn start`, which will run the client and the server parallel using lerna
- Client should be available at http://localhost:3000 and server for checking the end points should be at http://localhost:8080
- There are 2 endpoint that you can use from the server
  - `/reviews` which get all the reviews for you
  - `/reviews/average` which get the average calculations that you are going to implement

## General Note

We expect UI design to be responsive, it's nice to have code in TypeScript if possible (not a must), use React function components instead of classes, and Hooks whenever useful, show your code quality.

Here is an [inspiration design](inspiration-design.png) for you, but feel free to make it as you want, the most important thing is to have a good visual for the data
