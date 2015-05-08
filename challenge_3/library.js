<script>
(function() {

  var Library = function(name, location) {
    this.name = name;
    this.location = location;
    this.shelves = [];
  };

  var Shelf = function(subject) {
    this.subject = subject;
    this.books = [];
  };

  var Book = function(title, author, subject) {
    this.title = title;
    this.author = author;
    this.subject = subject;
  };

  Library.prototype.addShelf = function() {
    this.shelves.push(new Shelf(subject));
  };

  Library.prototype.removeShelf = function(this.shelves[i]) {
    this.shelves.splice(this.shelves[i]);
  }

  var scienceFiction = new Shelf('Sciene Fiction');
  console.log(scienceFiction);
})();
</script>
