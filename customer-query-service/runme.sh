docker build . -t aniket/customer-query-service
docker run -p 3000:80  -name main aniket/customer-query-service