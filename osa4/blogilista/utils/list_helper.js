const dummy = (blogs) => {
    return 1
  }

const totalLikes = (listOfBlogs) => {
    const reducer = (sum, blog) => {
        return sum + blog.likes
    }

    return listOfBlogs.reduce(reducer, 0)
}
  
module.exports = {
  dummy,
  totalLikes
}