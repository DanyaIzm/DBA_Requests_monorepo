FROM python:3.10.1-slim

WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

COPY . .

COPY ./.prod.env ./.env

RUN pip install -r requirements.txt
