APP ?= hydra-movies

image: ## build image and push to heroku registry
	heroku container:push web --app $(APP)

release: ## release container to heroku
	heroku container:release web --app $(APP)

deploy: image release

logs: ## show heroku logs
	heroku logs --tail --app $(APP)

.PHONY: image release deploy logs
