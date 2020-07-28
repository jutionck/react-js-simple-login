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

  describe("<Title/>", ()=> {
    it('should', function () {
      const wrapper = shallow(<Title/>);
      expect(wrapper.find('h1').length).toBe(1)
    })

    it('props', () => {
      const wrapper = shallow(<Title text={'React'} />)
      expect(wrapper.text()).toBe('Hello React')
    })
  })


  describe("<Input/>", () => {
    it('should be 1 input element', function () {
      const wrapper = shallow(<Input />);
      expect(wrapper.find('input').length).toBe(1)
    })

    it('change handle input', function () {
      const handleChangeSpy = jest.fn()
      const wrapper = shallow(<Input handleChange={handleChangeSpy}/>)

      const event = { target: {value: 'aaa'} }
      wrapper.find('input').simulate('change', event)
      expect(handleChangeSpy).toHaveBeenCalledWith('aaa')
    })


  })

});