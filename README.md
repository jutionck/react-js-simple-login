## Enzyme

Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output. You can also manipulate, traverse, and in some ways simulate runtime given the output.

Enzyme's API is meant to be intuitive and flexible by mimicking jQuery's API for DOM manipulation and traversal.

#### Installation
<pre>
npm i --save-dev enzyme enzyme-adapter-react-16
</pre>

Finally, you need to configure enzyme to use the adapter you want it to use. To do this, you can use the top level configure(...) API.

Open file setupTests.js ini folder src, change this:
<pre>
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });</pre>
