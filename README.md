# FeedReader Project
## Table of Contents
 
 [Project Overview](https://github.com/ferhansahin/udacity-feedreader/blob/master/README.md)
 [Installation](https://github.com/ferhansahin/udacity-feedreader/blob/master/README.md)
 [Test Built](https://github.com/ferhansahin/udacity-feedreader/blob/master/README.md)

## Project Overview

This project is a simple demonstration of testing against the code you write using the [Jasmine] framework (http://jasmine.github.io/).

This is part of the Udacity Front-End NanoDegree and the majority of the code was provided. Changes have been made to the following files as part of this project.

index.html
js/app.js
jasmine/spec/feedreader.js
The original repository can be found at (https://github.com/udacity/frontend-nanodegree-feedreader).

## Installation

Clone the GitHub repository.

$ git clone https://github.com/ferhansahin/udacity-feedreader.git $ cd fend-project-memory-game

Open index.html in your browser.

Jasmine Framework version used is jasmine-2.1.2

## Tests Built
The following is a list of the tests that were added to Jasmine to test the functionality of the FeedReader.

### RSS Feeds
Ensure that the allFeeds variable has been defined and that it is not empty.

Check that each URL in the allFeeds object is defined and that the URL is not empty.

Check that each name in the allFeeds object is defined and that the name is not empty.

### The Menu
Ensure the menu element is hidden by default.

Ensure the menu changes visibility when the menu icon is clicked. This test has two expectations: does the menu display when clicked and does it hide when clicked again.

### Initial Entries
Ensure when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.

Ensure when a new feed is loaded by the loadFeed function that the content actually changes.