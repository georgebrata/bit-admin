# bit-admin

Simple admin dashboard with an interactive layout and a few components built with Vue3 and Tailwind *(under construction)*.

## JS Libraries used
- [Vite](https://vitejs.dev/) is used as a dev server & build tool
- [Vue Router](https://router.vuejs.org/) is used for routing
- [pinia](https://pinia.vuejs.org/) is used for state management

## CSS Libraries used
- [tailwindcss](https://tailwindcss.com/) for basic styling
- [vue-toastification](https://github.com/Maronato/vue-toastification) for basic notifications
- [sass-loader](https://vue-loader.vuejs.org/guide/pre-processors.html#sass-vs-scss) for scss pre-processing
- [@heroicons/vue](https://github.com/tailwindlabs/heroicons#vue) for icons


## File structure
In the 📁 src folder its where the fun happens:
- 📁 assets - mostly images
- 📁 router - routing files (extracted all routes in external **routes.js** file)
- 📁 scss - all SCSS styles (notifications overrides, tailwind, theme variables)
- 📁 scss          - all SCSS styles (notifications overrides, tailwind, theme variables)
- 📁 store         - Pinia store example with 1 module, **layoutStore**
- 📁 composabls    - reusable composable example, **useLogger()**
- 📁 components
- 📄 App.vue - top-level layout 
- 📄 main.js - application & plugins initialization 

### 📁 components  
- 📁 layout     - layout components like Header, Sidebar, etc
- 📁 base       - base UI components like Input, Select, Radio, Checkbox, Dropdown, Badge, etc

## Screenshots

##### Reports page
<img src="https://i.ibb.co/yh9hWCs/Screenshot-2022-11-06-at-20-50-46.png" alt="Screenshot-2022-11-06-at-20-50-46">

##### Modal open
<img src="https://i.ibb.co/Lz1grvm/Screenshot-2022-11-06-at-20-52-22.png" alt="Screenshot-2022-11-06-at-20-52-22" />

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```


### Todo

- [x] Add sass pre-preocessor
- [ ] Refacor styles 
- [ ] Add .ts support
- [ ] Implement auth, middelwares, more views, etc