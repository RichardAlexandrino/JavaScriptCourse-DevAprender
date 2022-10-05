// Constructor function

// Create a post object
// title, message, author, views, comments, itsLive

function Post(title,message,author,views,comments,itsLive){
    this.title = title,
    this.message = message,
    this.author = author,
    this.views = views,
    this.comments = comments,
    this.itsLive = itsLive
}

const post1 = new Post('a','b','c',10,'d',true);
console.log(post1);

const post2 = new Post('e','f','g',50,'h',false);
console.log(post2);