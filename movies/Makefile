image: ## build image and push to heroku registry
	heroku container:push web --app hydra-movies

release: ## release container to heroku
	heroku container:release web --app hydra-movies

deploy: image release

logs: ## show heroku logs
	heroku logs --tail --app hydra-movies

.PHONY: image release deploy logs
