#!/bin/bash

python manage.py makemigrations main
python manage.py makemigrations reference

python manage.py migrate

python manage.py loaddata DjangoServer/reference/fixtures/Sex.json
python manage.py loaddata DjangoServer/reference/fixtures/Level.json
python manage.py loaddata DjangoServer/reference/fixtures/Position.json
python manage.py loaddata DjangoServer/reference/fixtures/Role.json
# python manage.py loaddata DjangoServer/reference/fixtures/SocialNetwork.json

python manage.py loaddata DjangoServer/main/fixtures/Profile.json
