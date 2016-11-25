# appengine-guestbook-python-react
Guestbook example app that runs on Google AppEngine Python backend with React frontend

## App Engine + Python + React = :blue_heart:

I love using App Engine for my projects and for the next project I also wanted to use React for the frontend.
I've found some starter project for this configuration but it wasn't up-to-date and I also didn't support development very well.  
So I've created my own solution.

## Development Time

During development you run `npm start` from the root directory which run in parallel both `dev_appserver.py` to run App Engine local dev-server and Webpack dev-server to support hot-reloading for React.
You can change both the python and React code and it reload instantly - how fun and productive it that :rabbit:  
The backend run by default on port `8080` while the frontend run on port `3000`.    
During development you shold use port `http://localhost:3000` to run your app to get the frontend content from Webpack dev-server.

## Deployment

When you ready to deploy run `npm run deploy` which will build the static files from your React application and copy it to the `server/www` directory.  
Then it will run the required `gcloud app deploy` to deploy both your application and your indx.yaml.

## Structure

* `/` - The root directory is npm proejct which contain only scripts to run, build and deploy the application.
* `/server` - contains the server-side python application
* `/client` - contain the client-side React application
