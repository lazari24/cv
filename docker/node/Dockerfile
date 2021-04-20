FROM node:14.16.1-alpine3.11

COPY ./docker/node/entrypoint.sh /usr/local/bin/docker-entrypoint
RUN chmod +x /usr/local/bin/docker-entrypoint

WORKDIR /var/www/cv

COPY ./ ./

ENTRYPOINT ["docker-entrypoint"]

CMD ["npm", "run", "start"]
