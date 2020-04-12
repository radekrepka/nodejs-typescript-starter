import { normalizePort } from '../../src/config/utils';

describe('Config utils', () => {
    it('should return valid numeric port', () => {
        const portString = '4000';
        const port = normalizePort(portString);

        expect(port).toEqual(4000);
    });

    it('should return valid default port', () => {
        const port = normalizePort();

        expect(port).toEqual(3000);
    });
});
