!/bin/bash

python3 manage.py makemigrations main
python3 manage.py makemigrations reference

python3 manage.py migrate

python3 manage.py loaddata DjangoServer/reference/fixtures/Sex.json
python3 manage.py loaddata DjangoServer/reference/fixtures/Level.json
python3 manage.py loaddata DjangoServer/reference/fixtures/Position.json
python3 manage.py loaddata DjangoServer/reference/fixtures/Role.json
python3 manage.py loaddata DjangoServer/reference/fixtures/SocialNetwork.json

#python3 manage.py loaddata DjangoServer/main/fixtures/User.json
#python3 manage.py loaddata DjangoServer/main/fixtures/Profile.json
