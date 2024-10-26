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
    "/LectureHalls/lecHome/lecFFHome": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/LectureHalls/lecHome/lecFFHome.js"
    ],
    "/LectureHalls/lecHome/lecGFHome": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/LectureHalls/lecHome/lecGFHome.js"
    ],
    "/LectureHalls/lecHome/lecHome": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/LectureHalls/lecHome/lecHome.js"
    ],
    "/LectureHalls/lecHome/lecSFHome": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/LectureHalls/lecHome/lecSFHome.js"
    ],
    "/_app": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_app.js"
    ],
    "/_error": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_error.js"
    ]
  },
  "ampFirstPages": []
};
self.__BUILD_MANIFEST.lowPriorityFiles = [
"/static/" + process.env.__NEXT_BUILD_ID + "/_buildManifest.js",
,"/static/" + process.env.__NEXT_BUILD_ID + "/_ssgManifest.js",

];