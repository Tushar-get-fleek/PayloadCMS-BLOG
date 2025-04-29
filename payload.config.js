import sharp from 'sharp';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { buildConfig } from 'payload';
import { Posts } from "./src/app/collections/Post";

export default buildConfig({
  editor: lexicalEditor(),
  collections: [Posts],
  secret: process.env.PAYLOAD_SECRET || 'EwB6inCrmq68mUhpsjHScUh66wwJD8JXi+8EKtKkkMc=',
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || "postgres://neondb_owner:npg_OClcA3jHFEm1@ep-broad-cake-a4cy7k1u-pooler.us-east-1.aws.neon.tech/neondb",
      ssl: {
        rejectUnauthorized: false, // Change to true in production with proper CA certificates
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
  // Add logging for debugging
  telemetry: true,
  onInit: async (payload) => {
    payload.logger.info(`Database URL: ${process.env.DATABASE_URL || 'Using hardcoded connection string'}`);
    payload.logger.info(`Node environment: ${process.env.NODE_ENV || 'development'}`);
  },
});