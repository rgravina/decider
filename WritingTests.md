# Writing Tests

Some examples of wiring tests for the `rps` and `web` modules.

## The `rps` module
`spec/wiring.test.js`

```javascript
import Wiring from "../src/wiring";

describe('wiring tests', () => {
    it('ES6 classes can be imported and used', () => {
        expect(new Wiring().isItWorking()).toBe(true)
    })

    it('Jest ES6 class method call spy example', () => {
        const spy = {aMethodWeWantToSpyOn: jest.fn()}

        new SpyTest(spy).methodUnderTest()

        expect(spy.aMethodWeWantToSpyOn).toHaveBeenCalled()
    })
})
```

`src/wiring.js`
```javascript
export default class Wiring {
    isItWorking() {
        return true
    }
}

export class SpyTest {
    constructor(observer) {
        this.observer = observer
    }

    methodUnderTest() {
        this.observer.aMethodWeWantToSpyOn()
    }
}
```

## The `web` module

`spec/wiring.test.js`
```javascript
import React from "react";
import {render, unmountComponentAtNode} from "react-dom";

import Wiring from "../src/Wiring";

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders wiring component", () => {
    render(<Wiring/>, container);

    expect(container.textContent).toBe("Wiring component.");
});
```
`src/wiring.js`
```javascript
import React from 'react'

export default class Wiring extends React.Component {
    render() {
        return <p>Wiring component.</p>
    }
}
```