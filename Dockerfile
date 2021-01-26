# Create the image based on the official Node 10 image from Dockerhub
FROM node:12.11 AS builder
# Create a new directory
RUN mkdir -p /app

# Change directory so that our commands run inside this new directory
WORKDIR /app

# Copy dependency definitions
COPY package.json /app

# Install dependencies using npm
RUN npm install --silent

# Get all the code needed to run the ap
COPY . /app

#Build the app
RUN npm run build

#==================== Setting up stage ====================#

# Create image based on the official nginx - Alpine image
FROM nginx:1.13.7-alpine

COPY --from=builder /app/build /usr/share/nginx/html
# nginx.conf to configure nginx because of react routing
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]