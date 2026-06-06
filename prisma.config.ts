import 'dotenv/config';
import { defineConfig, env } from 'prisma/config';

export default defineConfig({
	schema: 'prisma/schema.prisma',
	datasource: {
		// Use direct connection for CLI operations (migrations, db push)
		url: env('DIRECT_URL'),
	},
});
