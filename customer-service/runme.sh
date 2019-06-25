docker build . -t aniket/customer-service
docker run -d -p 3001:80  --name customer aniket/customer-service
