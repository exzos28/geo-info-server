## Quick Overview

The backend is deployed here -
https://blooming-plateau-14609.herokuapp.com/

![Image 1](./img.png)

```sh
# Common build stage

FROM node:16 as common-build-stage
LABEL author="exzos28"

COPY . ./app

WORKDIR /app

RUN npm install

EXPOSE 3000

# Development build stage
FROM common-build-stage as development-build-stage

ENV NODE_ENV development

CMD ["npm", "run", "dev"]

# Production build stage
FROM common-build-stage as production-build-stage

ENV NODE_ENV production

CMD ["npm", "run", "start"]
```

