IMPACT JS
==========
https://impactjs.com/download

Download version 1.24

Unzip the file in a into a good location and then install impact-node JS using.

`npm install -g impact-node`

Once installed create a new folder where you want the source code to be and clone this repo.

CD into the new folder and run the below command to start the project.

`impact-node serve`

This will run the server at [http://localhost:3000/](localhost:3000).

- Game view: [http://localhost:3000/](localhost:3000/)
- Weltmeister level editor: [http://localhost:3000/editor/](localhost:3000/editor/)

You can run server on different port.

`impact-node serve -p 9000`

And in watch mode. Game view will be updated when project's files changed.

`impact-node serve --watch`

### Build

`impact-node build`

This will compress code into a single file ready for production and put it into `build` including `media` dir with game assets.


### Create entity

`impact-node create:entity {name}`

This will create a new entity file with basic setup.

***Why no command for creating level?***
*This is what Weltmeister should be used for.*
