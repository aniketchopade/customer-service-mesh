docker build . -t aniket/location-service
docker run -p 3002:80  -name main aniket/location-service