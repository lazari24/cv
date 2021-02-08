FROM node:14

COPY docker/node/entrypoint.sh /usr/local/bin/docker-entrypoint
RUN chmod +x /usr/local/bin/docker-entrypoint

WORKDIR /var/www/cv

ENTRYPOINT ["docker-entrypoint"]

CMD ["npm", "run", "start"]

