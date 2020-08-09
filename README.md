# VueJS Class Component
Make your VueJS components as class based component using Plain JavaScript for fast build

####Installation:
* Using NPM Package Manager
```bash
npm install --save vuejs-class-component
```

* Using Yarn
```bash
yarn add vuejs-class-component
```

####Usage:
Create a JS class by extending AppRoot class as following and call **super.generate()** function to generate vue like object.
* js/example.js
```
import { AppRoot } from 'vuejs-class-component';

class Example extends AppRoot {
    name = 'Example';
    
    username = 'Raja';
    
    constructor() {
        super();
        super.generate(this);
    }

    $mounted() {
        this.onLoad();
    }
    
    onClick() {
        alert(`hello ${this.username}`);
    }
    
    onLoad() {
        console.log('Page Loaded');
    }
}
export default new Example();
```
Don't forget to export.
* Example.vue
```
<template>
    <div>
        {{username}}
    </div>
</template>
<script src="./js/example.js"/>
<style scoped></style>

```

* working with lifecycle hooks

Add **$** before any lifecycle hook, and it will become a lifecycle function
```
class Example extends AppRoot {
   page;
   $mounted() {
     this.page = this.$route.params.page;
   }
}
```
Here added $ before lifecycle hooks to make lifecycle hooks separate than normal functions. If you want to initialize a variable with vue instance variables like this.$route then you need to initialize in the $mount() function to avoid the errors.
### Contributing
[Github](https://github.com/mdmusarrat/vuejs-class-component)
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

### License
MIT