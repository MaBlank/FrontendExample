import {FormatDatePipe} from "./format-date.pipe";

describe('FormatDatePipe', () => {
  it('create an instance', () => {
    const pipe = new FormatDatePipe();
    expect(pipe).toBeTruthy();
  });
  it('should format a date correctly', () => {
    const pipe = new FormatDatePipe();
    expect(pipe.transform('2023-10-05')).toBe('05.10.2023');
  });
  it('should format a date with single-digit day and month correctly', () => {
    const pipe = new FormatDatePipe();
    expect(pipe.transform('2023-04-07')).toBe('07.04.2023');
  });
  it('should format the last day of February in a leap year correctly', () => {
    const pipe = new FormatDatePipe();
    expect(pipe.transform('2024-02-29')).toBe('29.02.2024');
  });
});
