const listHelper = require('../utils/list_helper')

describe('total likes', () => {
    const listWithOneBlog = [
      {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5,
        __v: 0
      }
    ]

    const listWithThreeBlogs = [
        {
          _id: '5a422aa71b54a676234d17f8',
          title: 'Go To Statement Considered Harmful',
          author: 'Edsger W. Dijkstra 1',
          url: 'http://www.u.arizona.edu/~rubson/copyright_violations/nsidered_Harmful.html',
          likes: 5,
          __v: 0
        },
        {
            _id: '5a422aa71b234234676234d17f8',
            title: 'Go To Statement Considered Harmful pt2',
            author: 'Edsger W. Dijkstra 2',
            url: 'http://www.u.arizona.edu/~rubon/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 6,
            __v: 0
          },
          {
            _id: '5a422aa71htrj76234d17f8',
            title: 'asdfsdf',
            author: 'dsfgser',
            url: 'http://www.u.arizona.edu/~rubinson/iolations/Go_To_Considered_Harmful.html',
            likes: 7,
            __v: 0
          }
      ]
  
    test('when list has only one blog equals the likes of that', () => {
      const result = listHelper.totalLikes(listWithOneBlog)
      expect(result).toBe(5)
    })

    test('when list has three blogs equals the likes of all blogs', () => {
        const result = listHelper.totalLikes(listWithThreeBlogs)
        expect(result).toBe(18)
      })
  })