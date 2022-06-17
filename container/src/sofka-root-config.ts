import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@sofka/footer",
  app: () => System.import("@sofka/footer"),
  activeWhen: ["/first"],
});

registerApplication({
  name: "@sofka/header",
  app: () => System.import("@sofka/header"),
  activeWhen: ["/second"],
});


start({
  urlRerouteOnly: true,
});
