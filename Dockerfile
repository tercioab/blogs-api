FROM node:16.14
USER root
RUN apt update
RUN apt install lsof