# ng-nest-starter
A starter for an isomorphic web app using NestJS and Angular
## Features
- Angular Universal
- Containerization using Docker
- Environment configuration

---

## Building and Running
### Build client for server-side rendering and run server:
```
npm run client:build:server
npm start
```

### Serve client using `webpack-dev-server`:
`npm run client:start`

### Run server:
`npm start`

### Build/run for production
This is done when building the Docker image.  Only run this to test the production build locally outside of Docker.
```
npm run build
npm run start:prod
```
---

## Testing

Unit tests are run using Jasmine for both the client and server.

### Run server unit tests:
`npm run server:test`

### Run client unit tests:
`npm run client:test`