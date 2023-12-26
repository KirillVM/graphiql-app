export interface SchemaData {
  data: {
    __schema?: {
      types?: Type[];
    };
  };
}

interface Type {
  name: string;
  kind: string;
  description: string;
  fields: Field[];
}

export interface Field {
  name: string;
  description: string;
  type: FieldType;
  args: Arg[];
}

export interface FieldType {
  name: string;
  kind: string;
}

interface Arg {
  name: string;
  type: Type;
}
