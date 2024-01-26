FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm i -g pnpm
RUN pnpm i
RUN pnpm build

RUN rm -rf src/

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
