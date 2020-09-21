/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { FC } from 'react';

export interface ImageTableProps {
  columns: number;
  children: React.ReactNode;
}

function chunk<T extends any>(array: T[], size: number): T[][] {
  return array.reduce<T[][]>((previousValue, currentValue) => {
    if (previousValue[previousValue.length - 1].length < size) {
      previousValue[previousValue.length - 1].push(currentValue);
      return previousValue;
    }
    return previousValue.concat([currentValue]);
  }, [[]])
}

export const ImageTable: FC<ImageTableProps> = ({columns}) => {
  return (<table>
    children
  </table>);
}

export default ImageTable;
