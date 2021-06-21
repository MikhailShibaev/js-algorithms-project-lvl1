/**
 * 
 * @param {Array<{id: number, text: string}>} docsArray массив документов
 * @returns {{docs: Array<{id: string, text: string}>, search: (value: string) => Array<string>}} объект 
 */
export const engine = (docsArray) => {
    const search = (value) => {
        const result = [];

        docsArray.forEach((doc) => {
            const { text: docText, id } = doc;
            const textAsArray = docText.split(" ");

            if (textAsArray.includes(value)) {
                result.push(id);
            }
        });

        return result;
    }

    return {
        docs: docsArray,
        search,
    };
}
