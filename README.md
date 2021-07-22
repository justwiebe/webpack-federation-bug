### To reproduce:

1. `yarn build && yarn serve` in the root folder and also in `RemoteApp`
2. Open up localhost:3000 in the browser
3. Check the console to see that there is an error: "634.js:50 Uncaught TypeError: (0 , \_dom__WEBPACK_IMPORTED_MODULE_0__.a) is not a function"

If you change mode for RemoteApp to `development` then it will work fine
