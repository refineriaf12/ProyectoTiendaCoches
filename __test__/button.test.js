'use strict';
const { mount } = require('enzime')
const sinon = require('sinon');
const button = pageMounted.find('#formComplain_submit'); 



describe('Test Button component', () => {
    it('Test click event', () => {
      const mockCallBack = jest.fn();
  
      // const button = shallow((Button onClick={mockCallBack}>Ok!</Button));
      const button = shallow(<Button onclick={mockCallBack}/>);
      button.find('button').simulate('click');
      expect(mockCallBack.mock.calls.length).toEqual(1);
    });
  });

  describe('Test Button component', () => {
    it('simulates click events', () => {
      const mockCallBack = sinon.spy();
      const button = shallow((<Button onClick={mockCallBack}>Ok!</Button>));
  
      button.find('button').simulate('click');
      expect(mockCallBack).toHaveProperty('callCount', 1);
    });
  });