## Deployment on Heroku

To be able to deploy the live demo to Heroku, you need access to the Hydra-CG Heroku account and log in via:

```bash
heroku login
heroku container:login
```

Afterwards run the follwing command within the `movies` directory:

```bash
make deploy
```

### Deploy to your own account

You can deploy to your own heroku account. First log in:
 
 ```bash
 heroku login
 heroku container:login
 ```
 
Then run `make` with specifying the `APP` name:

```bash
make APP=my-hydra-movies deploy
```
