FROM node:latest

MAINTAINER myCon mycon0018@gmail.com

RUN mkdir -p /pro2020

WORKDIR /pro2020

COPY package.json .

ENV GITURL "https://github.com/mycon19/pro2020.git"

RUN git clone $GITURL 

ENTRYPOINT cd /pro2020/*/ && git pull && npm install && npm start

#COPY . .

EXPOSE 3000

CMD ["npm", "start"]