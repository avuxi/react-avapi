# react-avapi

take a look at [integration repository](https://github.com/avuxi/Integrations) for integration example

### install

```
npm i --save avuxi/react-avapi
```

### usage

```js
import { Map, Lse } from 'react-avapi'

```

```html
<!-- include Google Maps or Leaflet script -->
<!-- include configuration script from https://admin.avuxi.com -->

<Map confId='5ae6df87a93f4e1e02a6122a'
     lat='41.38605'
     lng='2.17014'
     zoom='13' />
     
<Lse confId='5ae6e03da93f4e1e02a6122b'
     lat='41.390847'
     lng='2.16902' />
```