import React from "react";
import { shallow } from "enzyme";
import App from "../App";

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

const findByTag = (wrapper, val) => {
  return wrapper.find(val);
};

const findByAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

describe("<App />", () => {
  it("should in <App /> components to be one div", function () {
    const wrapper = setup();
    const appComponent = findByTag(wrapper, "div");
    expect(appComponent.length).toBe(2);
  });

  it("should component is called at least once", function () {
    const wrapper = setup();
    const appComponent = findByAttr(wrapper, "component-app");
    expect(appComponent.length).toEqual(1);
  });

  it("should in <App /> components to be one h1", function () {
    const wrapper = setup();
    const appComponent = findByTag(wrapper, "h1");
    expect(appComponent.length).toBe(1);
  });

  it("should component is called at least once", function () {
    const wrapper = setup();
    const appComponent = findByAttr(wrapper, "counter-display");
    expect(appComponent.length).toEqual(1);
  });

  it("should in <App /> components to be one button", function () {
    const wrapper = setup();
    const appComponent = findByTag(wrapper, "button");
    expect(appComponent.length).toBe(1);
  });
});