docker build . -t aniket/customer-query-service
docker run -d -p  3000:80 --link customer:customer --link rental:rental --name main aniket/customer-query-service
