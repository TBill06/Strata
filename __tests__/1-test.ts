import { hello } from '../1.hello-world'

describe('hello', () => {
    it('should return "Hello, World!"', () => {
        expect(hello()).toBe('Hello, World!');
    });
})