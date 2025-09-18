// when we have callbacks inside callbacks the code gets difficult to manage and read. This is called callback hell or Pyramid of doom


//example of callback hell

loadScript("script1.js", function() {
    loadScript("script2.js", function() {
        loadScript("script3.js", function() {
        });
    });
});
        

// as the cells becomes more nested the code becomes hard to read and manage.