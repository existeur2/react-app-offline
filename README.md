# react-app-offline

This library displays &quot;offline&quot; or &quot;coming soon&quot; layout and disables the react app. When using **react-app-offline**, the application will stop rendering the usual content to the DOM and instead it will render ComingSoon layouts. It helps you when your application is under maintenance or offline due to several reasons (application still under development, troubleshooting the back-end, etc... ).

> You can eventually disable your application for the public but still enable it for you and your team or client by configuring a simple password prompt.

[![NPM](https://img.shields.io/npm/v/react-app-offline.svg)](https://www.npmjs.com/package/react-app-offline) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo

[Existeur.com](https://existeur.com)

## Install

```bash
npm install --save react-app-offline
```

## Usage

```jsx
import React, { Component } from "react";

import AppOffline from "react-app-offline";

class Example extends Component {
  render() {
    return <AppOffline isOffline />;
  }
}
```

## Props

| prop         | required | default | description                                                                                                         | type   |
| ------------ | -------- | ------- | ------------------------------------------------------------------------------------------------------------------- | ------ |
| isOffline    | true     | true    | if **isOffline** is true, your application will be disable and only show the offline layout                         | bool   |
| children     | true     | -       | children represents the content will be shown in the default layout                                                 | any    |
| customLayout | false    | -       | You can customize the offline layout as a whole using **customLayout**. It accepts React component and JSX content. | any    |
| root         | false    | "root"  | The application root element. Sometimes "app".                                                                      | string |

## License

MIT © [existeur2](https://github.com/existeur2)
