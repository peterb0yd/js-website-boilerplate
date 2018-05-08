var showdown  = require('showdown')
var _ = require('lodash')
var converter = new showdown.Converter()

exports.convertPosts = posts => {
  posts.forEach((post, i, arr) => {
    post = convertSinglePost(post)
  })
  return posts
}

exports.convertCaseStudies = caseStudies => {
  caseStudies.forEach((caseStudy, i, arr) => {
    caseStudy = convertSingleCaseStudy(caseStudy)
  })
  return caseStudies
}

exports.convertPost = (posts, permalink) => {
  let post = _.find(posts, (p) => { return p.fields.permalink === permalink })
  let thisIndex = posts.indexOf(post)
  if (thisIndex > 0)
    post.nextPost = posts[thisIndex-1].fields.permalink
  if (thisIndex < posts.length-1)
    post.previousPost = posts[thisIndex+1].fields.permalink
  return convertSinglePost(post);
}

exports.convertCaseStudy = caseStudies => {
  let caseStudy = _.find(caseStudies, (c) => { return c.fields.permalink === permalink })
  let thisIndex = caseStudies.indexOf(caseStudy)
  if (thisIndex > 0)
    caseStudy.nextCaseStudy = caseStudies[thisIndex-1].fields.permalink
  if (thisIndex < caseStudies.length-1)
    caseStudy.previousCaseStudy = caseStudies[thisIndex+1].fields.permalink
  return convertSingleCaseStudy(caseStudy);
}

const convertSinglePost = post => {
  post.fields.content = converter.makeHtml(post.fields.content)
  /*
    Add to or update this function as needed
  */
  return post
}

const convertSingleCaseStudy = post => {
  post.fields.description = converter.makeHtml(post.fields.content)
  post.fields.results = converter.makeHtml(post.fields.content)
  /*
    Add to or update this function as needed
  */
  return post
}
