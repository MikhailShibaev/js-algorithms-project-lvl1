/**
 * 
 * @param {Array<{id: string, text: string}>} docsArray массив документов
 * @param {string} token искомое значение
 * @returns {{docs: Array<{id: string, text: string}>, value: string} объект
 */
export const engine = (docsArray, token) => {
  const regExp = /\w+/g;

  const search = () => {
    const term = token.match(regExp)[0];

    return docsArray.map(({ text: docText, id }) => {
      const textAsArray = docText
        .split(" ")
        .map((el) => {
          return el.match(regExp)[0];
        });

      if (textAsArray.includes(term)) {
        return id;
      }
    }).filter(id => id);
  }

  if (docsArray.length > 0) {
    return {
      docs: search(),
      value: token,
    };
  } else {
    return {
      docs: docsArray,
      value: token,
    }
  }
}