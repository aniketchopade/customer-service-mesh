docker build . -t aniket/location-service
docker run -p 3002:80  --name location aniket/location-service