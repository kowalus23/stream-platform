Basic streaming platform (twich like), by using OBS app you can start streaming direct to the app, also you can ADD/EDIT/DELETE new streams, see the list of already created (currently based on json server db) Really simple but with huge potential to extend possibilities and make it bigger.


This project needs separated server for DB: for example JSON server: https://github.com/typicode/json-server<br>
Also it needs media streaming server, i used: https://github.com/illuspas/Node-Media-Server<br>
At the end we need to download: https://obsproject.com/ and configure it a bit:
Settings->Stream->
- Service: (Custom..)
- Server: rtmp://localhost/live
- Stream Key: STREAM_NAME (in my example it's 1 like ID)

## Available Scripts

In the project directory, you can run:

### `npm install`
Install all packages

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

