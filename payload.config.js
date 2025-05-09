import sharp from 'sharp';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { buildConfig } from 'payload';
import { Posts } from './src/app/collections/Post';
import { Articles } from './src/app/collections/Article';

export default buildConfig({
  editor: lexicalEditor(),
  collections: [Posts, Articles], // Removed Media collection
  secret: process.env.PAYLOAD_SECRET || 'EwB6inCrmq68mUhpsjHScUh66wwJD8JXi+8EKtKkkMc=',
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL|| "https://payload-cms-blog.vercel.app" || 'http://localhost:3000',
  //serverURL:'http://localhost:3000',
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || 'postgres://neondb_owner:npg_OClcA3jHFEm1@ep-broad-cake-a4cy7k1u-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require',
      ssl: {
        rejectUnauthorized: false,
      },
      onNotice: (notice) => {
        console.log('Database notice:', notice);
      },
      onError: (err) => {
        console.error('Database error:', err);
      },
    },
    push: process.env.NODE_ENV === 'production' ? false : true,
  }),
  sharp,
  telemetry: true,
  onInit: async (payload) => {
    payload.logger.info(`Database URL: ${process.env.DATABASE_URL || 'Using hardcoded connection string'}`);
    payload.logger.info(`Node environment: ${process.env.NODE_ENV || 'development'}`);
  },
});