import { GreetPipe } from 'src/app/greet.pipe';

describe('GreetPipe', () => {
  it('Greet Works properly', () => {
    const pipe = new GreetPipe();
    expect(pipe.transform("Ram","M","M")).toEqual("Mr.Ram");
  });
});
