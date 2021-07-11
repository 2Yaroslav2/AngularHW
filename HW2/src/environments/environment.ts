// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL: 'http://api.openweathermap.org/data/2.5/find?q=Kiev' +
    '&units=metric' +
    '&type=like' +
    '&APPID=15090a6be2dee785f8349ccde5ffe2c0'
  //API_URL: 'https://jsonplaceholder.typicode.com'
  //API_URL: 'https://openweathermap.org/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
