import { formatTime } from './formatTime';
import { promoPrice } from './promoPrice';

describe('utils', () => {

  describe('formatTime', () => {

    it('should return null if there is no arg', () => {
      expect(formatTime()).toBe(null);
    });

    it('should return null if arg is not a number', () => {
      expect(formatTime('abc')).toBe(null);
      expect(formatTime(() => {})).toBe(null);
    });

    it('should return null if arg is lower than zero', () => {
      expect(formatTime(-1)).toBe(null);
      expect(formatTime(-2)).toBe(null);
    });

    it('should return time in hh:mm:ss if arg is proper', () => {
      expect(formatTime(122)).toBe('00:02:02');
      expect(formatTime(3793)).toBe('01:03:13');
      expect(formatTime(120)).toBe('00:02:00');
      expect(formatTime(3604)).toBe('01:00:04');
    });
  });

  describe('promoPrice', () => {

    it('should return null if there is no arguments', () => {
      expect(promoPrice()).toBe(null);
    });

    it('should return null if arguments are not a number', () => {
      expect(promoPrice('abc', 'abc')).toBe(null);
      expect(promoPrice(() => {}, () => {})).toBe(null);
    });

    it('should return null if arguments are lower than zero', () => {
      expect(promoPrice(-1,-1)).toBe(null);
      expect(promoPrice(-2,-2)).toBe(null);
    });

    it('should return price with discount if arguments are proper', () => {
      expect(promoPrice(200,20)).toBe(160);
    });
  });

});
