var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

/*
  Our reducers are pure function i.e. they dont update the argument that is
  passed in. It is pretty hard to assert. But using deep-freeze-strict
  we can check if our pure function i.e. reducers are updating the passed value
*/

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };

      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducers', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };

      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });
});
