#!/bin/bash

DATABASE_URL=$(heroku config:get DATABASE_URL -a ep-portfolio-api) python3 manage.py runserver