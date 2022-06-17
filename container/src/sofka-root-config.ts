import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@sofka/footer",
  app: () => System.import("@sofka/footer"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@sofka/header",
  app: () => System.import("@sofka/header"),
  activeWhen: ["/"],
});


start({
  urlRerouteOnly: true,
});
