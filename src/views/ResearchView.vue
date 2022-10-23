<template>
    <div id="app" class="container">
      <h1>Vuetify</h1>
      <h4>Vuetify is a complete UI framework built on top of Vue.js. The goal of the project is to provide developers with the tools they need to build rich and engaging user experiences. Unlike other frameworks, Vuetify is designed from the ground up to be easy to learn and rewarding to master with hundreds of carefully crafted components from the Material Design specification.

Vuetify takes a mobile first approach to design which means your application just works out of the box—whether it’s on a phone, tablet, or desktop computer.</h4>
<br/>
<h1>Why Vuetify</h1>
<h4>Since its initial release in 2014, Vue.js has grown to be one of the most popular JavaScript frameworks in the world. One of the reasons for this popularity is the wide use of components which enable developers to create concise modules to be used and re-used throughout their application. UI Libraries are collections of these modules that implement a specific style guideline and provide the necessary tools to build expansive web applications.

Vuetify is developed exactly according to Material Design specification with every component meticulously crafted to be modular, responsive, and performant. Customize your application with unique and dynamic Layouts and customize the styles of your components using SASS variables.

Vuetify has a very active development cycle and is patched weekly, responding to community issues and reports at breakneck speed, allowing you to get your hands on bug fixes and enhancements more often. In addition, every major release is accompanied with 18 months of Long-term support for the previous minor version.

Unlike other frameworks, when you develop with Vuetify, you are never alone. Stuck on a problem? Take advantage of our massive Discord community and collaborate with other Vuetify developers in one of our public help channels. Need a more personalized support solution? Vuetify offers elite support through GitHub sponsorship with options tailored to individuals and businesses. Check out some other ways to Sponsor Vuetify development</h4>
<br/>
<h1>Composition API</h1>
<h4>Composition API is a set of APIs that allows us to author Vue components using imported functions instead of declaring options. It is an umbrella term that covers the following APIs:</h4>

<h4>Reactivity API, e.g. ref() and reactive(), that allows us to directly create reactive state, computed state, and watchers.</h4>

<h4>Lifecycle Hooks, e.g. onMounted() and onUnmounted(), that allow us to programmatically hook into the component lifecycle.</h4>

<h4>Dependency Injection, i.e. provide() and inject(), that allow us to leverage Vue's dependency injection system while using Reactivity APIs.</h4>
<br/>
<h1>Why Composition API</h1>

<h3>Better Logic Reuse</h3>

<h4>The primary advantage of Composition API is that it enables clean, efficient logic reuse in the form of Composable functions. It solves all the drawbacks of mixins, the primary logic reuse mechanism for Options API.

Composition API's logic reuse capability has given rise to impressive community projects such as VueUse, an ever-growing collection of composable utilities. It also serves as a clean mechanism for easily integrating stateful third-party services or libraries into Vue's reactivity system, for example immutable data, state machines, and RxJS.</h4>
<h3>More Flexible Code Organization</h3>
<h4>Many users love that we write organized code by default with Options API: everything has its place based on the option it falls under. However, Options API poses serious limitations when a single component's logic grows beyond a certain complexity threshold. This limitation is particularly prominent in components that need to deal with multiple logical concerns, which we have witnessed first hand in many production Vue 2 apps.</h4>
<h3>Better Type Inference</h3>
<h4>In recent years, more and more frontend developers are adopting TypeScript as it helps us write more robust code, make changes with more confidence, and provides a great development experience with IDE support. However, the Options API, originally conceived in 2013, was designed without type inference in mind. We had to implement some absurdly complex type gymnastics to make type inference work with the Options API. Even with all this effort, type inference for Options API can still break down for mixins and dependency injection.</h4>
    </div>
  </template>
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Abyssinica+SIL&family=Alkalami&display=swap');
  template{
    font-family: 'Abyssinica SIL', serif;
    font-family: 'Alkalami', serif;
  }
  .container{
    padding-left: 100px;
    padding-right: 100px;
  }
  </style>
