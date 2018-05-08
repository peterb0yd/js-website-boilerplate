var contentful = require('../lib/contentful')
var converter = require('../lib/converter')

// Display All Case Studies
exports.case_studies_page = async (req, res) => {
  try {
    let entries = await contentful.getEntries({
      order: '-sys.createdAt',
      content_type: '<your_content_type>'
    })
    // Convert Markdown to HTML
    let works = converter.getWorks(entries.items)
    // Send posts with HTML
    res.render('case-studies', { title: '<name> | Work', works })
  } catch (e) {
    res.status(500).send()
  }
}

// Display Single Case Study
exports.case_study_page = async (req, res) => {
  try {
    let entries = await contentful.getEntries({
      order: '-sys.createdAt',
      content_type: '<your_content_type>'
    })
    // Convert Markdown to HTML - dont convert title | grab the single post
    let work = converter.getWork(entries.items, req.params.title)
    // Send posts with HTML
    res.render('case-study', { title: `<name> | ${work.fields.clientName}`, work })
  } catch (e) {
    console.log(e)
    res.status(500).send()
  }
}
