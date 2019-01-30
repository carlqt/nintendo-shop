export function strip(str) {
  if (str) {
    // remove html tags
    return str.replace(/<(?:.|\n)*?>/gm, '');

    // remove multiple spaces
  };

  return "";
}