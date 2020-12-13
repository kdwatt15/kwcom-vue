export default {
  content: {
    analyses: [
      { name: "Election", slug: "election", id: 1, content: 'text text text'},
      { name: "Corona Virus", slug: "corona-virus", id: 2, content: 'text text text'}
    ],
    blogPosts: [
      { name: "Blog Election", slug: "blog-election", id: 1 },
      { name: "Sparky's Analytics Zone", slug: "spaz", id: 2 }
    ]
  },
  fetch_data: function(type, slug) {
    var filtered_contents = this.content[type].filter(function(obj) {
      return obj.slug === slug
    });
    if (filtered_contents.length === 1) {
      return filtered_contents[0]
    } else {
      throw "Duplicated slugs in the database."
    }
  }
};
