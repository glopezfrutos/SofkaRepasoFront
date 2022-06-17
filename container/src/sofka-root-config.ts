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
  name: "@Sofka/mf-header",
  app: () => System.import("@Sofka/mf-header"),
  activeWhen: ["/"]
});
registerApplication({
 name: "@Sofka/mf-content",
 app: () => System.import("@Sofka/mf-content"),
 activeWhen: ["/"]
});
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