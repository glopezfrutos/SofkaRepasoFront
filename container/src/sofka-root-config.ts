import { registerApplication, start } from "single-spa";

/* 
registerApplication({
  name: "@Sofka/mf-footer",
  app: () =>
    System.import(
      "//localhost:4200/main.js"
    ),
  activeWhen: ["/"],
});
*/

 registerApplication({
   name: "@Sofka/mf-footer",
   app: () => System.import("@Sofka/mf-footer"),
   activeWhen: ["/"]
 });
// registerApplication({
//   name: "@Sofka/navbar",
//   app: () => System.import("@Sofka/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});