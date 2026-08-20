import express from 'express';
import { resolve } from 'node:path';

process.env.NETLIFY_LOCAL = 'true';
const { netlifyAppEngineHandler } = await import('../dist/quincho/server/server.mjs');

const browserDistFolder = resolve(process.cwd(), 'dist/quincho/browser');
const app = express();

app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  })
);

app.use(async (req, res, next) => {
  try {
    const protocol = req.protocol || 'http';
    const host = req.get('host') || 'localhost:4000';
    const url = `${protocol}://${host}${req.originalUrl}`;
    const headers = new Headers();

    for (const [key, value] of Object.entries(req.headers)) {
      if (value === undefined) {
        continue;
      }
      headers.set(key, Array.isArray(value) ? value.join(', ') : value);
    }

    const method = req.method || 'GET';
    const hasBody = method !== 'GET' && method !== 'HEAD';
    const request = new Request(url, {
      method,
      headers,
      ...(hasBody ? { body: req, duplex: 'half' } : {}),
    });

    const response = await netlifyAppEngineHandler(request);
    res.status(response.status);
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });
    res.end(Buffer.from(await response.arrayBuffer()));
  } catch (error) {
    next(error);
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Node Express server listening on http://localhost:${port}`);
});
