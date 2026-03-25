# ---- Build Stage ----
# node:14-alpine uses OpenSSL 1.x, fully compatible with react-scripts 4.x / webpack 4
FROM node:14-alpine AS builder
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

ARG REACT_APP_API_URL=/api/v1
ENV REACT_APP_API_URL=$REACT_APP_API_URL

COPY . .
RUN yarn build

# ---- Serve Stage ----
FROM nginx:1.25-alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
