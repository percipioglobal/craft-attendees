TAG?=16-alpine
CONTAINER?=$(shell basename $(dir $(CURDIR)))-buildchain
DOCKERRUN=docker container run \
	    --name ${CONTAINER} \
	    --rm \
	    -t \
        --network rsn-reapp_default \
        -p 3001:3001 \
		-e CPPFLAGS="-DPNG_ARM_NEON_OPT=0" \
        -v `pwd`/../:/app \
        ${CONTAINER}:${TAG}

.PHONY: build dev docker install update update-clean npm

build: docker install
	${DOCKERRUN} \
		run build
dev: docker install
	${DOCKERRUN} \
		run dev
docker:
	docker build \
		. \
		-t ${CONTAINER}:${TAG} \
		--build-arg TAG=${TAG} \
		--no-cache
install: docker
	${DOCKERRUN} \
		install
update: docker
	rm -f buildchain/package-lock.json
	${DOCKERRUN} \
		install
update-clean: docker
	rm -f buildchain/package-lock.json
	rm -rf buildchain/node_modules/
	${DOCKERRUN} \
		install
npm: docker
	${DOCKERRUN} \
		$(filter-out $@,$(MAKECMDGOALS))
%:
	@:
# ref: https://stackoverflow.com/questions/6273608/how-to-pass-argument-to-makefile-from-command-line
