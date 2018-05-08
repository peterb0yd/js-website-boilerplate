const contentful = require('../lib/contentful')
const converter = require('../lib/converter')

// Blog Page
exports.blog_page = async (req, res) => {
  try {
    const entries = await contentful.getEntries({
      order: '-sys.createdAt',
      content_type: 'blogPost'
    })
    // Convert Markdown to HTML - and convert titles
    const posts = converter.convertPosts(entries.items)
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
      content_type: 'blogPost'
    })
    // Convert Markdown to HTML
    const post = converter.convertPost(entries.items, req.params.title)
    // Send posts with HTML
    res.render('post', { title: `RotorScape | ${post.fields.title}`, post })
  } catch (e) {
    console.log(e)
    res.status(500).send()
  }
}
