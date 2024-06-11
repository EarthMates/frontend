#!/bin/bash
echo 'run after_install.sh: ' >> /home/ubuntu/frontend/deploy.log

echo 'cd /home/ubuntu/frontend' >> /home/ubuntu/frontend/deploy.log
cd /home/ubuntu/frontend >> /home/ubuntu/frontend/deploy.log

echo 'docker build -t frontend .' >> /home/ubuntu/frontend/deploy.log 
docker build -t frontend . >> /home/ubuntu/frontend/deploy.log