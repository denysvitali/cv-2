CONTAINER_NAME=cv
IMAGE_NAME=dvitali/cv-2
TAG=$(shell git describe --dirty --tags --always)
IMAGE_REF=$(IMAGE_NAME):$(TAG)

dev-run:
	docker run \
		--entrypoint=bash \
		-it \
		--rm \
		--name "$(CONTAINER_NAME)" \
		-u 1000:1000 \
		-p 3001:5173 \
		-w /app \
		-v "$$PWD:/app" \
		node:latest

dev-exec:
	docker \
		exec \
		-it \
		"$(CONTAINER_NAME)" \
		bash

docker-build:
	docker build \
		-t "$(IMAGE_REF)" \
		.

docker-run:
	docker run \
		--rm \
		-p 8080:80 \
		--rm \
		--name $(CONTAINER_NAME)-nginx \
		"$(IMAGE_REF)"

docker-push:
	docker push "$(IMAGE_REF)"

render:
	docker 