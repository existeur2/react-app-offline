# react-app-offline

> This library displays &quot;offline&quot; or &quot;coming soon&quot; layout and disables the react app.

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

| prop         | required | default | description                                                                                     | type   |
| ------------ | -------- | ------- | ----------------------------------------------------------------------------------------------- | ------ |
| isOffline    | true     | true    | if **isOffline** is true, your application will be disable and only show the offline layout     | bool   |
| children     | true     | -       | children represents the content will be shown in the default layout                             | any    |
| customLayout | false    | -       | You can customize the offline layout as a whole using **customLayout**. It accepts JSX content. | jsx    |
| root         | false    | "root"  | The application root element. Sometimes "app".                                                  | string |

## License

MIT © [existeur2](https://github.com/existeur2)
