module.exports = { contents: "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.actionReducers = exports.initialState = exports.selectors = exports.namespace = undefined;\n\nvar _immutable = require('immutable');\n\nvar _reduxAutomap = require('redux-automap');\n\nvar _reselect = require('reselect');\n\n(function () {\n  var enterModule = require('react-hot-loader').enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar namespace = exports.namespace = 'list';\n\nvar getItems = function getItems(state) {\n  return state.get('items');\n};\nvar getNumItems = function getNumItems(state) {\n  return state.get('items').size;\n};\nvar getHalfItems = function getHalfItems(items, number) {\n  return items.slice(0, Math.floor(number / 2));\n};\n\nvar getItemsSorted = (0, _reselect.createSelector)([getItems], function (items) {\n  return items.sort(function (a, b) {\n    a = a.get('name');\n    b = b.get('name');\n\n    return a < b ? -1 : a > b ? 1 : 0;\n  }).reverse();\n});\n\nvar getHalfItemsUnsorted = (0, _reselect.createSelector)([getItems, getNumItems], getHalfItems);\n\nvar getHalfItemsSorted = (0, _reselect.createSelector)([getItemsSorted, getNumItems], getHalfItems);\n\nvar selectors = exports.selectors = {\n  getItems: getItems, getNumItems: getNumItems, getItemsSorted: getItemsSorted, getHalfItemsUnsorted: getHalfItemsUnsorted, getHalfItemsSorted: getHalfItemsSorted\n};\n\nvar Entry = new _immutable.Record({\n  id: undefined,\n  name: 'new item',\n  date: new Date(),\n  isActive: false\n});\n\n// initial state for reducer\nvar initialState = exports.initialState = (0, _immutable.fromJS)({\n  items: [{ id: 1, name: 'foo', date: new Date(), isActive: true }, { id: 2, name: 'bar', date: new Date(), isActive: true }, { id: 3, name: 'baz', date: new Date(), isActive: true }, { id: 4, name: 'cat', date: new Date(), isActive: false }, { id: 5, name: 'miffles', date: new Date(), isActive: false }, { id: 6, name: 'vlad', date: new Date(), isActive: true }, { id: 7, name: 'baxter', date: new Date(), isActive: true }]\n});\n\n// define all action/reducer pairs here... add \"type\" attributes for\nvar actionReducers = exports.actionReducers = [{\n  addItem: function addItem() {\n    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'new item';\n    return { type: 'list/ADD_ITEM', name: name };\n  },\n  reducer: function reducer(state, action) {\n    var nextID = state.get('items').maxBy(function (i) {\n      return i.get('id');\n    }).get('id') + 1;\n\n    return state.update('items', function (items) {\n      return items.push(new Entry({\n        id: nextID,\n        name: action.name,\n        date: new Date()\n      }));\n    });\n  }\n}, {\n  toggleIsActive: function toggleIsActive(id) {\n    return { type: 'list/TOGGLE_ITEM_IS_ACTIVE', id: id };\n  },\n  reducer: function reducer(state, action) {\n    return state.update('items', function (items) {\n      return items.map(function (item) {\n        return item.get('id') === action.id ? item.update('isActive', function (active) {\n          return !active;\n        }) : item;\n      });\n    });\n  }\n}, {\n  // type: constants.REMOVE_ITEM,\n  removeItem: function removeItem(id) {\n    return { type: 'list/REMOVE_ITEM', id: id };\n  },\n  reducer: function reducer(state, action) {\n    return state.update('items', function (items) {\n      return items.filter(function (i) {\n        return i.get('id') !== action.id;\n      });\n    });\n  }\n}];\n\nvar _default = (0, _reduxAutomap.automap)({ namespace: namespace, actionReducers: actionReducers, initialState: initialState, selectors: selectors, foo: 'bar' });\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = require('react-hot-loader').default;\n\n  var leaveModule = require('react-hot-loader').leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(namespace, 'namespace', 'unknown');\n  reactHotLoader.register(getItems, 'getItems', 'unknown');\n  reactHotLoader.register(getNumItems, 'getNumItems', 'unknown');\n  reactHotLoader.register(getHalfItems, 'getHalfItems', 'unknown');\n  reactHotLoader.register(getItemsSorted, 'getItemsSorted', 'unknown');\n  reactHotLoader.register(getHalfItemsUnsorted, 'getHalfItemsUnsorted', 'unknown');\n  reactHotLoader.register(getHalfItemsSorted, 'getHalfItemsSorted', 'unknown');\n  reactHotLoader.register(selectors, 'selectors', 'unknown');\n  reactHotLoader.register(Entry, 'Entry', 'unknown');\n  reactHotLoader.register(initialState, 'initialState', 'unknown');\n  reactHotLoader.register(actionReducers, 'actionReducers', 'unknown');\n  reactHotLoader.register(_default, 'default', 'unknown');\n  leaveModule(module);\n})();\n\n;",
dependencies: ["immutable","redux-automap","reselect","react-hot-loader","react-hot-loader","react-hot-loader"],
sourceMap: "{\"version\":3,\"sources\":[\"/client/state/list.js\"],\"names\":[\"namespace\",\"getItems\",\"state\",\"get\",\"getNumItems\",\"size\",\"getHalfItems\",\"items\",\"number\",\"slice\",\"Math\",\"floor\",\"getItemsSorted\",\"sort\",\"a\",\"b\",\"reverse\",\"getHalfItemsUnsorted\",\"getHalfItemsSorted\",\"selectors\",\"Entry\",\"Record\",\"id\",\"undefined\",\"name\",\"date\",\"Date\",\"isActive\",\"initialState\",\"actionReducers\",\"addItem\",\"type\",\"reducer\",\"action\",\"nextID\",\"maxBy\",\"i\",\"update\",\"push\",\"toggleIsActive\",\"map\",\"item\",\"active\",\"removeItem\",\"filter\",\"foo\"],\"mappings\":\"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\",\"file\":\"client/state/list.js\",\"sourcesContent\":[\"import { Map, List, fromJS, Record } from 'immutable'\\nimport { automap } from 'redux-automap'\\nimport { createSelector } from 'reselect'\\n\\nexport const namespace = 'list'\\n\\nconst getItems = state => state.get('items')\\nconst getNumItems = state => state.get('items').size\\nconst getHalfItems = (items, number) => items.slice(0, Math.floor(number / 2))\\n\\nconst getItemsSorted = createSelector(\\n  [ getItems ], items => {\\n    return items.sort((a, b) => {\\n      a = a.get('name')\\n      b = b.get('name')\\n\\n      return a < b ? -1 : (a > b ? 1 : 0)\\n    }).reverse()\\n  }\\n)\\n\\nconst getHalfItemsUnsorted = createSelector(\\n  [ getItems, getNumItems ], getHalfItems\\n)\\n\\nconst getHalfItemsSorted = createSelector(\\n  [ getItemsSorted, getNumItems ], getHalfItems\\n)\\n\\nexport const selectors = {\\n  getItems, getNumItems, getItemsSorted, getHalfItemsUnsorted, getHalfItemsSorted\\n}\\n\\nconst Entry = new Record({\\n  id: undefined,\\n  name: 'new item',\\n  date: new Date,\\n  isActive: false\\n})\\n\\n// initial state for reducer\\nexport const initialState = fromJS({\\n  items: [\\n    { id: 1, name: 'foo', date: new Date, isActive: true },\\n    { id: 2, name: 'bar', date: new Date, isActive: true },\\n    { id: 3, name: 'baz', date: new Date, isActive: true },\\n    { id: 4, name: 'cat', date: new Date, isActive: false },\\n    { id: 5, name: 'miffles', date: new Date, isActive: false },\\n    { id: 6, name: 'vlad', date: new Date, isActive: true },\\n    { id: 7, name: 'baxter', date: new Date, isActive: true },\\n  ]\\n})\\n\\n// define all action/reducer pairs here... add \\\"type\\\" attributes for\\nexport const actionReducers = [\\n  {\\n    addItem: (name = 'new item') => ({ type: 'list/ADD_ITEM', name }),\\n    reducer: (state, action) => {\\n      let nextID = state.get('items').maxBy(i => i.get('id')).get('id') + 1\\n\\n      return state.update('items', items => items.push(new Entry({\\n        id: nextID,\\n        name: action.name,\\n        date: new Date,\\n      })))\\n    }\\n  },\\n  {\\n    toggleIsActive: (id) => ({ type:  'list/TOGGLE_ITEM_IS_ACTIVE', id }),\\n    reducer: (state, action) => state.update('items', items => items.map(item => item.get('id') === action.id ? item.update('isActive', active => !active) : item))\\n  },\\n  {\\n    // type: constants.REMOVE_ITEM,\\n    removeItem: (id) => ({ type:  'list/REMOVE_ITEM', id }),\\n    reducer: (state, action) => {\\n      return state.update('items', items => items.filter(i => i.get('id') !== action.id))\\n    }\\n  }\\n]\\n\\nexport default automap({ namespace, actionReducers, initialState, selectors, foo: 'bar' })\\n\"]}",
headerContent: undefined,
mtime: 1528991092851,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
