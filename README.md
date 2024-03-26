This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and setting up New Relic following this [official guide](https://newrelic.com/blog/how-to-relic/nextjs-monitor-application-data).

## New Relic

According to this [doc](https://docs.newrelic.com/docs/logs/logs-context/logs-in-context/) we are able to monitor the application using AMP agents and logs in context will be [automatilcally forwarded](https://docs.newrelic.com/docs/logs/logs-context/configure-logs-context-nodejs/) using Pino.

### Setup

Preload New Relic

```json
"dev": "NODE_OPTIONS='-r @newrelic/next' next dev",
```

### Pino

Write some logs on [page.tsx](src/app/page.tsx)
Setup Pino

```typescript
import pino from 'pino';
export const logger = pino();
```

Instrument `Pino` properly in `next.config.mjs`

```js
webpack: (config) => {
  if (config.target.includes('node')) {
    config.externals.push('pino');
  }
  return config;
};
```

Write logs

```typescript
logger.info('Hi from Next.js - Home');
```

## Run application

Run the application providing name and license key by `env` variables.

```bash
NEW_RELIC_LICENSE_KEY=[your license here] NEW_RELIC_APP_NAME=nextjs-pino npm run dev
```
