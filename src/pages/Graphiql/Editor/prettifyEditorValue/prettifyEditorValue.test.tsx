import { setEditorValue } from '@src/store/playgroundSlice/playgroundSlice';
import { Dispatch } from 'react';
import prettifyEditorValue from './prettifyEditorValue';

const mockDispatch: Dispatch<ReturnType<typeof setEditorValue>> = jest.fn();

beforeEach(() => {
  jest
    .spyOn(
      require('@src/store/playgroundSlice/playgroundSlice'),
      'setEditorValue'
    )
    .mockImplementation(jest.fn());
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('prettifyEditorValue function', () => {
  it('should format the value correctly', () => {
    const inputValue = `
      query {
        name
        age
      }
    `;

    const expectedOutput = `query {\n  name\n  age\n}\n`;

    prettifyEditorValue(inputValue, mockDispatch);

    expect(setEditorValue).toHaveBeenCalledWith(expectedOutput);
  });

  it('should handle brackets and indentation correctly', () => {
    const inputValue = `
      query {
        name {
          first
          last
        }
        age
      }
    `;

    const expectedOutput = `query {\n  name {\n    first\n    last\n  }\n  age\n}\n`;

    prettifyEditorValue(inputValue, mockDispatch);

    expect(setEditorValue).toHaveBeenCalledWith(expectedOutput);
  });
});
