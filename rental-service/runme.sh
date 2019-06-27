docker build . -t aniket/rental-service
docker run -d -p  3003:80 --link location:location --name rental aniket/rental-service
