docker build . -t aniket/customer-query-service
docker run -p 3000:80 --link customer:customer --link rental:rental --link location:location --name main aniket/customer-query-service