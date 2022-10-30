# cypressTemplate
This repo is to create a new cypress framework setup with page object model

### Following npm **development libraries** will be included to new framework template:

```
 - *@badeball/cypress-cucumber-preprocessor*
 - *@bahmutov/cypress-esbuild-preprocessor*
 - *esbuild*

```

### Following npm **run time libraries** will be include to new framework template:
```
-  *cypress*

```

## ** Steps to do to create a new Framework and run a sample cypress cucumber test **

```html
 <!-- - npm FrameWorkCreate.js yourFrameWorkName -->
    **npm FrameWorkCreate.js TestFramework**
 - Naviagate to your new Framework folder, usually it will be "/Users/<userName>/Desktop/<yourFrameWorkName>"
    Example: "/Users/ashok/Desktop/TestFramework"
 - Run npm install in your new Framework terminal in the path "/Users/ashok/Desktop/TestFramework"
   Example: npm install 
 - Run npm test run in your new Framework terminal in the path "/Users/ashok/Desktop/TestFramework"
   Example: npm run test
  
```
 
## New framework template has following Folder hierarchy as shown below:
```
.
├── cypress
│   ├── downloads
│   ├── e2e
│   │   ├── features
│   │   │   └── hello.feature      #
│   │   └── steps
│   │       └── hello.js
│   ├── fixtures
│   │   └── example.json
│   ├── plugins
│   │   └── index.js
│   ├── screenshots
│   ├── support
│   │   ├── commands.js
│   │   └── e2e.js 
│   └── videos
|
├── cypress.config.js
├── package-lock.json
└── package.json


```
