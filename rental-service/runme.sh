docker build . -t aniket/rental-service
docker run -p 3003:80  --name rental aniket/rental-service