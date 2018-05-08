const contentful = require('../lib/contentful')
const converter = require('../lib/converter')

// Blog Page
exports.blog_page = async (req, res) => {
  try {
    const entries = await contentful.getEntries({
      order: '-sys.createdAt',
      content_type: '<your_blog_content_type>'
    })
    // Convert Markdown to HTML
    const posts = converter.getPosts(entries.items)
    // Send posts with HTML
    res.render('blog', { title: '<name> | Blog', posts })
  } catch (e) {
    console.log(e)
    res.status(500).send()
  }
}

// Post Page
exports.post_page = async (req, res) => {
  try {
    const entries = await contentful.getEntries({
      order: '-sys.createdAt',
      content_type: '<your_blog_content_type>'
    })
    // Convert Markdown to HTML
    const post = converter.getPost(entries.items, req.params.title)
    // Send posts with HTML
    res.render('post', { title: `<name> | ${post.fields.title}`, post })
  } catch (e) {
    console.log(e)
    res.status(500).send()
  }
}
