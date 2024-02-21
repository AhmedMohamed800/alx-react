const { fromJS } = require('immutable');

export default function getImmutableObject(newObject) {
    return fromJS(newObject);
}
