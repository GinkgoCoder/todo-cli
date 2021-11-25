const assert = require('assert');
const Task = require('../../src/model/task')
const {Priority, Status} = require('../../src/model/enum');
const TodoException = require('../../src/exception/todo-exception');
const {expect} = require('chai');

describe('Task Model Test', function () {
    it('should create task successfully', () => {
        new Task(1, '', Priority.HIGH, Status.PENDING,
            new Date(), new Date(), new Date());
    })

    it('should throw InvalidArgument Error if date argument is invalid', () => {
        expect(function () {
            new Task(1, '', Priority.HIGH, Status.PENDING,
                new Date(), new Date(), '')
        }).to.throw(TodoException, 'updateTime is not a date');
    })

    it('should throw InvalidArgument Error if enum argument is invalid', () => {
        expect(function () {
            new Task(1, '', '', Status.PENDING,
                new Date(), new Date(), new Date())
        }).to.throw(TodoException, 'priority value does not exist');
    })
});
