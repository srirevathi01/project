FROM nginx

# Copy frontend HTML file
COPY index.html /usr/share/nginx/html/index.html

# Copy nginx template file (nginx.conf → default.conf.template)
COPY nginx.conf /etc/nginx/templates/default.conf.template

EXPOSE 80

