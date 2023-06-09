import { DecimalPipe } from '@angular/common';
import { PipeTransform } from '@angular/core';

import { RegexConst } from '../constants/regex-const';
import { ParseHelper } from '../utilities/parse-helper';

export class FormattedNumberPipe implements PipeTransform {
  transform(value: any, locale: string): string {
    const regexp = new RegExp(RegexConst.SINGLE_BYTE_NUMERIC_COMMA_PERIOD_SPACE);

    // If the format is not proper, returnes the character string without conversion.
    if (!value.toString().match(regexp)) {
      return value;
    }

    // Removes blanks and commas before converting
    const blankCommaRemovedValue = value
      .toString()
      // First converts with half-width blank
      .replace(new RegExp(RegexConst.HalfWidthBlank, 'g'), '')
      .replace(new RegExp(RegexConst.HalfWidthComma, 'g'), '');

    return new DecimalPipe(locale).transform(blankCommaRemovedValue, '1.0-0', locale);
  }

  parse(value: any, locale: string): string {
    return ParseHelper.parse(value.toString(), locale);
    // If the Parse Helper class is difficult, use the comment line below instead.
    // return value.toString().replace(/,/g, '');
  }
}
