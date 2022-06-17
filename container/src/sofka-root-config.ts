import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@sofka/header",
  app: () => System.import("@sofka/header"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@sofka/footer",
  app: () => System.import("@sofka/footer"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
