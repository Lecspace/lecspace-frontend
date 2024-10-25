self.__BUILD_MANIFEST = {
  "polyfillFiles": [
    "static/chunks/polyfills.js"
  ],
  "devFiles": [
    "static/chunks/react-refresh.js"
  ],
  "ampDevFiles": [],
  "lowPriorityFiles": [],
  "rootMainFiles": [],
  "pages": {
    "/_app": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_app.js"
    ],
    "/_error": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_error.js"
    ],
    "/lecFFHome": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/lecFFHome.js"
    ],
    "/lecGFHome": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/lecGFHome.js"
    ],
    "/lecHome": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/lecHome.js"
    ],
    "/lecLGFHome": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/lecLGFHome.js"
    ],
    "/lecSFHome": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/lecSFHome.js"
    ]
  },
  "ampFirstPages": []
};
self.__BUILD_MANIFEST.lowPriorityFiles = [
"/static/" + process.env.__NEXT_BUILD_ID + "/_buildManifest.js",
,"/static/" + process.env.__NEXT_BUILD_ID + "/_ssgManifest.js",

];