type ObjectType = Record<string, any>;
type RecordType = Record<string, any>;

export const cleanProps = (obj: ObjectType): RecordType => {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, value]) => value !== undefined)
  );
};
