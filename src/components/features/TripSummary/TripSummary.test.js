import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate proper link', () => {
    const expectedId = 'abc';
    const expectedCost='cost';
    const component = shallow(<TripSummary id={expectedId} tags={[]} cost={expectedCost} />);
    expect(component.find('Link').prop('to')).toEqual(`/trip/${expectedId}`);
  });

  it('should render correct image and alt', () => {
    const expectedImage = 'image.jpg';
    const expectedName = 'lorem';
    const expectedCost='cost';
    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} image={expectedImage} tags={[]}/>);
    expect(component.find('img').prop('src')).toEqual(expectedImage);
    expect(component.find('img').prop('alt')).toEqual(expectedName);
  });

  it('should render correct props name, cost, days, discount ', () => {
    const expectedName = 'name';
    const expectedCost = 'cost';
    const expectedDays = 7;
    const expectedDiscount = 20;
    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} discount={expectedDiscount} tags={[]}/>);
    expect(component).toBeTruthy();
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render tags in proper order inside spans', () => {
    const expectedTags = ['a', 'b', 'c'];
    const expectedCost='cost';
    const component = shallow(<TripSummary tags={expectedTags} cost={expectedCost}/>);
    component.find('.tags span').forEach((elem, i) => {
      expect(elem.text()).toEqual(expectedTags[i]);
    });
  });
  // expect(component.find('.tags span').at(0).text()).toEqual(expectedTags[0]);
  // expect(component.find('.tags span').at(1).text()).toEqual(expectedTags[1]);
  // expect(component.find('.tags span').at(2).text()).toEqual(expectedTags[2]);
  // });

  it('should not render div with tags when tag is not provided', () => {
    const expectedCost = 'cost';
    const component = shallow(<TripSummary cost={expectedCost} tags={[]} />);
    expect(component.exists('div .tags')).toBeFalsy();
  });
});
