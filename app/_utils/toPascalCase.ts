export const toPascalCase = (str: string) => {
  const text = str.replace(/\w+/g, function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  return text;
};
