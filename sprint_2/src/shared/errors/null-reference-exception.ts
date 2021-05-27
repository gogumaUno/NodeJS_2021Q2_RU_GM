import { CustomException } from './custom-exception';

export class NullReferenceException extends CustomException {
    constructor(id: string) {
        super(`Entity with id ${id} was not found`);
        Object.setPrototypeOf(this, NullReferenceException.prototype);
    }
}