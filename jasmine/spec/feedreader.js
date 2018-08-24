/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
     entriesStart,
     entriesEnd;

     describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. 
         */
        it('Feeds are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* loops through each feed in the allFeeds object and
         * ensures it has a URL defined and that the name is not
         * empty.
        */

        it ('URL is defined', function(){
            for (feed of allFeeds){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBE(0);
            }
        })

         /* loops through each feed in the allFeeds object and
         * ensures it has a name defined and that the name is not
         * empty.
        */
        it('Feed Names defined', function() {
            for (feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });
    });


    /* a new test suite named "The menu" */
    describe ('The Menu', function(){
         /* ensures the menu element is hidden by default. */
        it('menu element is hidden', function(){
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });
        
        //* ensure the menu changes visibility when the menu icon clicked
     
        it('toggle works on click event', function(){
            $('.menu-icon.click').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon.click').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });  
     
    
    
    });
    /* a new test suite named "Initial Entries" */
   describe('Initial Entries', function() {

        /* a test that ensures when the loadFeed function is called and
         * completes its work, there is at least a single .entry element
         * within the .feed container. Remember, loadFeed() is
         * asynchronous so this test will require the use of Jasmine's
         * beforeEach and asynchronous done() function.
        */
        /* Call loadFeed() and await async return */
         beforeEach(function(done) {
          loadFeed(0, function() {
            done();
          });
        });

        // Run asynchronously
        it('should have at least one .entry element within .feed container', function(done) {
          var entry = $('.feed .entry');
          expect(entry.length).not.toBe(0);
          done();
        });
    });

    /* a test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
      // Check the length before loadFeed has run
        var feed1, feed2;

        /* Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

         // Run loadFeed()
         beforeEach(function(done) {
            loadFeed(0, function() {
              feed1 = $('.feed').html();
              loadFeed(1, function() {
                done();
              });
          });
        });

        // Check if the content has changed
        // Comparing the initial length (before running loadFeed)
        // to the final length (after loadFeed has run)
        it('should change the content when a new feed is loaded', function(done) {
          feed2 = $('.feed').html();
          expect(feed1).not.toBe(feed2);
          done();
        });
    });
}());
