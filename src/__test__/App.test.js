import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import SimpleCalculator from "../components/SimpleCalculator";

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

  it('should component is called at leact once', function () {
    const wrapper = setup()
    const appComponnet = findByAttr(wrapper, 'display')
    expect(appComponnet.length).toEqual(1)
  })

  describe("<SimpleCalculator/>", ()=> {
    it('should', function () {
      const wrapper = shallow(<SimpleCalculator/>);
      expect(wrapper.find('h2').length).toBe(1)
    })
  })


  describe("<SimpleCalculator/>", () => {
    it('should be 2 input element', function () {
      const wrapper = shallow(<SimpleCalculator />);
      expect(wrapper.find('input').length).toBe(2)
    })

    it('should be 2 button element', function () {
      const wrapper = shallow(<SimpleCalculator />);
      expect(wrapper.find('button').length).toBe(2)
    })
  })

});