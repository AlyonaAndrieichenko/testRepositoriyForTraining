db.articles.updateMany( {},
 { $push: { title: 'my news' } ,
{ tags: 'super_article' },
{ content: 'random text' },
{ author_id: '111' },
}
)
