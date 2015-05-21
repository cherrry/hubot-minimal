# hubot-minimal

## Create Hubot

1. `git clone https://github.com/cherrry/hubot-minimal.git` in Cloud9's terminal.

2. Run `cd hubot-minimal`

3. Edit hubot's name and slack token in `bin/hubot`

4. Run `./bin/hubot --adapter slack`

5. Say `hello` in slack, ta da!

## Save Your Configuration

1. Run `git add .`

2. Run `git commit -m "set hubot's config"`

## Deploy To Heroku

1. Create new Node.js app.

2. Run `heroku login` in Cloud9's terminal.

3. Run `heroku keys:add`

4. Copy your `GIT_URL` from app's settings on Heroku.

5. Run `git remote add heroku GIT_URL`

6. Run `git push heroku master`

7. Run `heroku ps:scale web=1`
