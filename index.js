
module.exports = function template(s, vars, id) {
  id = id || ['{', '}'];
  var regexp = new RegExp(id[0] + '([_a-z0-9]*)' + id[1], 'gi');
  return s.replace(regexp, (_, name) => vars[name] || '');
};
