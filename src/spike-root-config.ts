import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    import(
      /* webpackIgnore: true */ // @ts-ignore-next
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
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

// registerApplication({
//   name: "@spike/navbar",
//   app: () =>
//     import(
//       /* webpackIgnore: true */ // @ts-ignore-next
//       "@spike/navbar"
//     ),
//   activeWhen: ["/"],
// });

start({
  urlRerouteOnly: true,
});
