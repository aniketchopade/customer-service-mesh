docker build . -t aniket/customer-service
docker run -p 3001:80  --name customer aniket/customer-service