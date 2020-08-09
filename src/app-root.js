export class AppRoot {
    constructor() {
        // this.el = undefined;
        this.watch = undefined;
        this.props = undefined;
        this.components = undefined;
        this.name = '';
        this.methods = {};
        this.data = undefined;
    }

    generate(child) {

        // get properties
        const propertyNames = Object.getOwnPropertyNames(child);
        const data = {};
        const parent  = new AppRoot();
        const parentProps = Object.getOwnPropertyNames(parent);
        propertyNames.forEach(key => {
            if (!parentProps.includes(key)) {
                data[key] = this[key];
            }
        });
        this.data = () => {
            return data;
        }

        // get methods
        const methods = child.__proto__;
        const methodNames = Object.getOwnPropertyNames(methods);
        for (let i = 1; i < methodNames.length; i++) {
            const methodName = methodNames[i];
            if (!methodName.includes('$')) {
                this.methods[methodName] = this[methodName];
            } else {
                this[methodName.substr(1)] = this[methodName];
            }
        }
    }

    $beforeMount() {}

    $beforeUpdate() {}

    $updated() {}

    $beforeCreate() {}

    $created() {}

    $activated() {}

    $beforeDestroy() {}

    $mounted() {}

    $destroyed() {}
}
