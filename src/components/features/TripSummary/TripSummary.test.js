import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate proper link', () => {
    const expectedId = 'abc';
    const component = shallow(<TripSummary id={expectedId} />);
    expect(component.find('Link').prop('to')).toEqual(`/trip/${expectedId}`);
  });

  it('should render correct image and alt', () => {
    const expectedImage = 'image.jpg';
    const expectedName = 'lorem';
    const component = shallow(<TripSummary name={expectedName} image={expectedImage} />);
    expect(component.find('img').prop('src')).toEqual(expectedImage);
    expect(component.find('img').prop('alt')).toEqual(expectedName);
  });

  it('should render correct props name, cost, days ', () => {
    const expectedName = 'name';
    const expectedCost = 'cost';
    const expectedDays = 7;
    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays}/>);
    expect(component).toBeTruthy();
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  // it('should render tags in proper order inside spans', () => {
  //   const expectedTags = ['a', 'b', 'c'];
  //   const component = shallow(<TripSummary tags={expectedTags}/>);

  // });

  // it('should not render div with tags when tag is not provided', () => {



  // });

});
