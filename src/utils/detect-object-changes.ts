import _ from 'lodash';

interface DiffResult {
  key: string;
  from: unknown;
  to: unknown;
}

function _toPlainObject(value: unknown): object {
  if (value === null || typeof value !== 'object') {
    return {};
  }

  const plainObject: Record<string, unknown> = {};
  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      const propValue = value[key as keyof typeof value];
      plainObject[key] =
        typeof propValue === 'object' &&
        propValue !== null &&
        !Array.isArray(propValue)
          ? _toPlainObject(propValue)
          : propValue;
    }
  }

  return plainObject;
}

export function detectObjectChanges(
  obj1: unknown,
  obj2: unknown,
  prefix = '',
): DiffResult[] {
  const changes: DiffResult[] = [];

  const addChange = (key: string, from: unknown, to: unknown): void => {
    changes.push({ key, from, to });
  };

  const compareValues = (
    key: string,
    value1: unknown,
    value2: unknown,
  ): void => {
    if (_.isEqual(value1, value2)) return;

    if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
      const nestedChanges = detectObjectChanges(value1, value2, key + '.');
      changes.push(...nestedChanges);
    } else {
      addChange(key, value1, value2);
    }
  };

  const plainObj1 = _toPlainObject(obj1);
  const plainObj2 = _toPlainObject(obj2);

  const keys = new Set([...Object.keys(plainObj1), ...Object.keys(plainObj2)]);
  keys.forEach((key) => {
    compareValues(
      prefix + key,
      plainObj1[key as keyof typeof plainObj1],
      plainObj2[key as keyof typeof plainObj2],
    );
  });

  return changes;
}
