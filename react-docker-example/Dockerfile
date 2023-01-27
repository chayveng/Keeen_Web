# FROM node:lts-alpine
# ENV NODE_ENV=production
# WORKDIR /usr/src/app
# COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# RUN npm install --production --silent && mv node_modules ../
# COPY . .
# EXPOSE 3000
# RUN chown -R node /usr/src/app
# USER node
# CMD ["npm", "start"]


## Stage 0, "build-stage", based on Node.js, to build and compile the frontend
#FROM tiangolo/node-frontend:10 as build-stage
#WORKDIR /app
#COPY package*.json /app/
#RUN npm install --f
#COPY ./ /app/
#RUN npm run build
## Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
#FROM nginx:1.15
#COPY --from=build-stage /app/build/ /usr/share/nginx/html
#RUN rm /etc/nginx/conf.d/default.conf
## Copy the default nginx.conf provided by tiangolo/node-frontend
#COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf


#FROM node:alpine
#WORKDIR '/app'
#
#COPY package.json .
#RUN npm install
#COPY . .
#CMD ["npm", "start"]



FROM node:16.13.0-alpine3.14 as builder

WORKDIR /usr/src/app
# Installing dependencies
COPY package*.json ./
# COPY yarn.lock ./
# COPY ./node_modules ./node_modules
RUN npm install
RUN #npm install --force

COPY . .

# Building app
RUN ["npm","run","build"]

#RUN yarn export
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=0 /usr/src/app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

CMD ["nginx", "-g", "daemon off;"]