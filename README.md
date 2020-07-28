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

#### Run
<pre>
npm run test
</pre>

##### Show Result Test
<pre>
Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        1.345s
Ran all test suites.
</pre>

##### Simple Impelement
Make a folder <code>__ test __</code> in <code>src</code><br>
move file <code>App.test.js</code> in folder <code> __ test __</code>:
<pre>
import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import {Title} from "../components/Title";
import {Input} from "../components/Input";

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if(state) wrapper.setState(state)
  return wrapper;
};

const findByAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}

// deskripsikan test case yang ada didalam component App
describe("<App />", () => {
  //fungsi yang di jalankan untuk setiap case sesuai apa tidak
  it('should in <App/> component tobe one h1', function () {
    const wrapper = setup()
    // yang di harapkan dari sebuah test
    expect(wrapper.find('h1').length).toBe(1)
  })

  // mencari komponen pakai .length
  it('should component is called at leact once', function () {
    const wrapper = setup()
    const appComponnet = findByAttr(wrapper, 'component-app')
    expect(appComponnet.length).toEqual(1)
  })

  // cek state yang di buat sesuai apa tidak
  it('cek state name is string', function () {
    const wrapper = setup()
    const initialNameState = wrapper.state('name')
    expect(initialNameState).toMatch("")

  })

  // simulasi event
  it('should 1 counter', function () {
    const counter = 9
    const wrapper = setup(null, {counter})

    findByAttr(wrapper, 'increment-button').simulate('click')

    const display = findByAttr(wrapper, 'counter-display')
    expect(display.text()).toContain(counter + 1)
  })

  describe("&lt;Title/&gt;", ()=> {
    it('should', function () {
      const wrapper = shallow(&lt;Title/&gt;);
      expect(wrapper.find('h1').length).toBe(1)
    })

    it('props', () => {
      const wrapper = shallow(&lt;Title text={'React'} /&gt;)
      expect(wrapper.text()).toBe('Hello React')
    })
  })


  describe("&lt;Input/&gt;", () => {
    it('should be 1 input element', function () {
      const wrapper = shallow(&lt;Input /&gt;);
      expect(wrapper.find('input').length).toBe(1)
    })

    it('change handle input', function () {
      const handleChangeSpy = jest.fn()
      const wrapper = shallow(&lt;Input handleChange={handleChangeSpy}/&gt;)

      const event = { target: {value: 'aaa'} }
      wrapper.find('input').simulate('change', event)
      expect(handleChangeSpy).toHaveBeenCalledWith('aaa')
    })
  })
});
</pre>

Make a folder <code>components</code> in folder <code>src</code>, and make a file <code>Title.js</code> and <code>Input</code>

<code>Title</code>
<pre>
import React from "react";

export const Title = (props) => {
    return (

        &lt;h1&gt;Hello {props.text}&lt;/h1&gt;
    )
}
</pre>

<code>Input.js</code>
<pre>
import React from "react";

export const Input = (props) => {

    function handleChange(e) {
        props.handleChange(e.target.value)
    }

    return (
        &lt;input onChange={handleChange} value={props.value} /&gt;
    )
}
</pre>