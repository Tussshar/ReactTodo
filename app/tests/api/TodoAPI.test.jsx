var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {

  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      var todos = [
        {

          id: 23,
          text: 'test all files',
          completed: false
        }
      ];

      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
      /*
        ToBe checks if they are same exact object in the memory
        and ToEqual only checks value on them
      */
    });

    it('should not set valid todos array', () => {
      /*
        because of previous it, there would be a value for todos in localStorage
        so our test would fail
        so we need method beforeEach
      */
      var badTodos = {a: 'b'};
      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return empty array for bad localStorage data', () => {
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should return todos in valid array in localStorage', () => {
      var todos = [
        {

          id: 23,
          text: 'test all files',
          completed: false
        }
      ];
      localStorage.setItem('todos',JSON.stringify(todos));
      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(todos);
    });
  });
});
