// src/app/collections/Post.js

export const Posts = {
    slug: 'posts',
    fields: [
      {
        name: 'title',
        type: 'text',
        required: true,
      },
      {
        name: 'content',
        type: 'richText',
      },
    ],
  };
  