FROM node:8

WORKDIR /tmp
COPY . .

RUN mkdir -p /opt/care/app \
    && npm install \
    && npm build \
    && npm install serve -g \
    && mv build/* /opt/care/app \
    && apt-get autoremove --purge -q -y \
    && apt-get clean -q \
    && cd /opt/care/app \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /root/.npm /root/.node-gyp

WORKDIR /opt/care/app
CMD ["serve", "-s"]

EXPOSE 5000
