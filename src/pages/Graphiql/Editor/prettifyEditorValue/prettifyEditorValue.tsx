import { setEditorValue } from '@src/store/playgroundSlice/playgroundSlice';
import { Dispatch } from 'react';

const prettifyEditorValue = (
  value: string,
  dispatch: Dispatch<ReturnType<typeof setEditorValue>>
): void => {
  const formattedValue = value
    .replaceAll('\n', ' ')
    .replace(/\s+/g, ' ')
    .replace(/}/g, '}\n')
    .replace(/{/g, ' {\n')
    .replace(/}/g, '\n}')
    .replace(
      /(\b(?!query\b)\w+\b(?!\(|:|,|\)|\]))/g,
      (match, offset, string) => {
        const before = offset > 0 ? string[offset - 1] : '';
        const after =
          offset + match.length < string.length
            ? string[offset + match.length]
            : '';

        const isInBrackets = before === '{' || after === '}';
        return isInBrackets || offset === 0 ? match : `\n${match}`;
      }
    )
    .replace(/^query\s\n/, 'query ');

  const lines = formattedValue.split('\n');
  let formattedQuery = '';
  let level = 0;

  lines.forEach((line) => {
    const trimmedLine = line.trim();
    const decreaseLevel = trimmedLine.startsWith('}') ? -1 : 0;
    const increaseLevel = trimmedLine.endsWith('{') ? 1 : 0;

    if (trimmedLine !== '') {
      level += decreaseLevel;

      formattedQuery += ' '.repeat(Math.max(0, level * 2)) + trimmedLine + '\n';

      level += increaseLevel;
    }
  });

  dispatch(setEditorValue(formattedQuery));
};

export default prettifyEditorValue;
