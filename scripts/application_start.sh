#!/bin/bash

echo 'run application_start.sh: ' >> /home/ubuntu/frontend/deploy.log
# nodejs-app is the same name as stored in pm2 process
echo 'running docker' >> /home/ubuntu/frontend/deploy.log
docker run -d -p 3000:80 frontend >> /home/ubuntu/frontend/deploy.log