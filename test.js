 (3)
 '' Carousel allows content to be viewed in different sizes of the screen when 
 'the user is navigating through the content or when animations is taking place'
'when the user is clicking on the contents. '



4.
 var myObject = {
    name: "Adalab",
    func: function() {
        var self = this;
        console.log("outer func:  this.name = " + this.name);
        console.log("outer func:  self.name = " + self.name);
        (function() {
            console.log("inner func:  this.name = " + this.name);
            console.log("inner func:  self.name = " + self.name);
        }());
    }
};
myObject.func();

  
  4
  'The name"Adalab" that is defined in the outer function is not defined in the inner function and cannot be accessed outside the function.









