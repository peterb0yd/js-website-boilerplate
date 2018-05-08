var contentful = require('../lib/contentful')
var converter = require('../lib/converter')

// Display All Case Studies
exports.case_studies_page = async (req, res) => {
  try {
    let entries = await contentful.getEntries({
      order: '-sys.createdAt',
      content_type: '<your_case_study_content_type>'
    })
    // Convert Markdown to HTML
    let caseStudies = converter.getCaseStudies(entries.items)
    // Send posts with HTML
    res.render('case-studies', { title: '<name> | Case Studies', caseStudies })
  } catch (e) {
    res.status(500).send()
  }
}

// Display Single Case Study
exports.case_study_page = async (req, res) => {
  try {
    let entries = await contentful.getEntries({
      order: '-sys.createdAt',
      content_type: '<your_case_study_content_type>'
    })
    // Convert Markdown to HTML
    let caseStudy = converter.getCaseStudy(entries.items, req.params.title)
    // Send posts with HTML
    res.render('case-study', { title: `<name> | ${caseStudy.fields.clientName}`, caseStudy })
  } catch (e) {
    console.log(e)
    res.status(500).send()
  }
}
