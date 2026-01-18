import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@spike/legacy-app",
  app: () =>
    import(
      /* webpackIgnore: true */ // @ts-ignore-next
      "@spike/legacy-app"
    ),
  activeWhen: (location) => location.pathname === "/",
});

registerApplication({
  name: "@spike/modern-app",
  app: () =>
    import(
      /* webpackIgnore: true */ // @ts-ignore-next
      "@spike/modern-app"
    ),
  activeWhen: ["/modern"],
});

start({
  urlRerouteOnly: true,
});
