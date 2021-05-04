wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo chown -R mongodb:mongodb /var/lib/mongodb
sudo chown -R mongodb:mongodb /var/log/mongodb
sudo systemctl start mongod
sudo systemctl status mongod

npm install cors --silent
npm install express --silent
npm install pg --silent
npm install ws --silent
npm install mongodb --silent

psql "dbname='webdb' user='webdbuser' password='password' host='localhost'" -f db/schema.sql

npm start