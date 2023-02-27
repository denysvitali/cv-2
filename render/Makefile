IMAGE_NAME=dvitali/cv-render

build:
	docker build \
		-t "$(IMAGE_NAME)" \
		.

run:
	docker run --rm \
		--cap-add=SYS_ADMIN \
		-v "$(PWD)/output:/app/output" \
		"$(IMAGE_NAME)"