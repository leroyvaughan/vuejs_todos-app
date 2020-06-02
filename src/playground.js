export function testFunc() {
    console.log('Hello World');
}

export function func2() {
    var test2 = new TestClass2(
        {
            param1: 'dee',
            param2: 'eee',
            param3: 'eff',
            param4: 'gee!'
        });

    test2.printStuff();
    test2.printMoreStuff();
}

class TestClass1 {
    var1
    var2
    var3

    constructor(params) {
        const { param1, param2, param3 } = params;
        this.var1 = param1;
        this.var2 = param2;
        this.var3 = param3;
    }

    printStuff() {
        console.log(`output: ${this.var1} ${this.var2} ${this.var3}`);
    }
}

class TestClass2 extends TestClass1 {
    //properties || member vars
    #var4

    //example showing constructor params pass using 'rest' keyword with object param
    constructor({ param4, ...rest }) {
        super(rest);
        this.#var4 = param4;
    }

    printMoreStuff() {
        console.log(`more output: ${this.#var4}`);
    }
}

