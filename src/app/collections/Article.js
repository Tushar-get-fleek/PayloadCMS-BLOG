export const Articles = {
    slug: 'articles',
    fields: [
      {
        name: 'title',
        type: 'text',
        required: true,
      },
      {
        name: 'miniTitle',
        type: 'text',
        admin: {
          description: 'This is the mini description on the card of featured articles and recently posted.',
        },
      },
      {
        name: 'miniVlogDescription',
        type: 'richText',
        admin: {
          description: 'This is the mini vlog description on the Dedicated blog page.',
        },
      },
      {
        name: 'image',
        type: 'text', // Changed from 'upload' to 'text'
        required: true,
        admin: {
          description: 'Enter the Cloudflare R2 URL of the image (e.g., https://pub-34f102bb65c80a685cfc5293b90ef8f7.r2.dev/image.jpg).',
        },
      },
      {
        name: 'date',
        type: 'date',
        required: true,
      },
      {
        name: 'content',
        type: 'richText',
        required: true,
      },
      {
        name: 'category',
        type: 'select',
        hasMany: true,
        required: true,
        options: [
          'Featured This Month',
          'Related Articles',
          'Recently Posted',
        ],
        admin: {
          description: 'Select one or more categories for this article.',
        },
      },
      {
        name: 'slug',
        type: 'text',
        required: true,
        unique: true,
        index: true,
        admin: {
          description: 'Used for URL routing (e.g., articles/my-article). Auto-generate if left blank.',
        },
      },
    ],
  };