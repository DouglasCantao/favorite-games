FROM node:latest
WORKDIR /home/src/site
COPY /site/package.json .
COPY /site/nuxt.config.ts .
COPY /site/components ./components
COPY /site/layouts ./layouts
COPY /site/composables ./composables
COPY /site/pages ./pages
COPY /site/server ./server
COPY /site/public ./public
RUN npm install
RUN npm run build

EXPOSE 3000
CMD npm run preview