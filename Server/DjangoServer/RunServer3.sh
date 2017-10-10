#!/bin/bash

source env3/bin/activate
ip_address=$(ip addr | grep 'state UP' -A2 | tail -n1 | awk '{print $2}' | cut -f1  -d'/')
python3 manage.py runserver $ip_address:8000
