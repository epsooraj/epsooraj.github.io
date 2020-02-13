#!/bin/bash

if [ $# -gt 0 ];
then
	env_var="DATABASE_URL=$(heroku config:get DATABASE_URL -a ep-portfolio-api) python3 manage.py "
else
	echo "No arguments supplied"
	exit
fi

command="$env_var $1"
eval $command