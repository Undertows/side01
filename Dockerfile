FROM nginx
COPY dist/ /usr/local/diaries/
COPY nginx.conf /etc/nginx/conf.d/