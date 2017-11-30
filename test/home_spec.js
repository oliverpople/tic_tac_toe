var Browser = require("Zombie");
var url = "http://localhost:3000/";
var browser = new Browser();

describe("intialising home page", function() {

// first test whether our browser is created and site is actually accessible
  it("should have defined headless browser", function(next) {
    expect(typeof browser != "undefined").toBe(true);
    expect(browser instanceof Browser).toBe(true);
    next();
  });

  it("should visit the homepage and see 9 slots", function(next) {
    browser.visit(url, function(err) {
      expect(browser.success).toBe(true);
  expect(browser.query("input[name='slot1']")).not.toBeNull();
        expect(browser.query("input[name='slot2']")).not.toBeNull();
          expect(browser.query("input[name='slot3']")).not.toBeNull();
          expect(browser.query("input[name='slot4']")).not.toBeNull();
          expect(browser.query("input[name='slot5']")).not.toBeNull();
          expect(browser.query("input[name='slot6']")).not.toBeNull();
          expect(browser.query("input[name='slot7']")).not.toBeNull();
          expect(browser.query("input[name='slot8']")).not.toBeNull();
          expect(browser.query("input[name='slot9']")).not.toBeNull();
      next();
    });
  });

});
