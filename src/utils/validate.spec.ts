import { plainToClass } from 'class-transformer';
import { IsNumber, validateSync } from 'class-validator';
import { IsNullable } from './validate-config';

class SampleDto {
  @IsNullable()
  @IsNumber()
  foo: number | null;
}

describe('IsNullable', () => {
  it('should disable other validators when given property is null', () => {
    expect(validateSync(plainToClass(SampleDto, { foo: null }))).toEqual([]);
  });
  it('should allow other validators to work when given property is not null', () => {
    expect(validateSync(plainToClass(SampleDto, { foo: 1 }))).toEqual([]);
    expect(
      validateSync(plainToClass(SampleDto, { foo: '1' }))[0].constraints
        ?.isNumber,
    ).toMatch('foo must be a number');
  });
  it('should not allow undefined', () => {
    expect(
      validateSync(plainToClass(SampleDto, { foo: undefined })).length,
    ).toBeGreaterThan(0);
  });
});
