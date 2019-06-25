stopped_containers=$(docker container ls --filter status=exited -q | wc -l)
if [ $stopped_containers = 0 ]
then
echo "No stopped container"
else
echo "removing stopped containers"
docker container rm -f $(docker container ls --filter status=exited -q)
fi
docker container rm -f $(docker container ls --filter name=main -q)
docker container rm -f $(docker container ls --filter name=customer -q)
docker container rm -f $(docker container ls --filter name=location -q)
docker container rm -f $(docker container ls --filter name=rental -q)
docker rm $(docker ps -a -q)
cd ..
cd customer-service
chmod 700 runme.sh
./runme.sh
cd ..
cd location-service
chmod 700 runme.sh
./runme.sh
cd ..
cd rental-service
chmod 700 runme.sh
./runme.sh
cd ..
cd customer-query-service
chmod 700 runme.sh
./runme.sh
