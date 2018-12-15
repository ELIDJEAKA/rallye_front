import { SecondToTimePipe } from './second-to-time.pipe';

describe('SecondToTimePipe', () => {
  it('create an instance', () => {
    const pipe = new SecondToTimePipe();
    expect(pipe).toBeTruthy();
  });
});
