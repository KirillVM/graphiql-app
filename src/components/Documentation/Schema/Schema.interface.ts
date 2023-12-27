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
  fields: FieldData[] | null;
}

export interface FieldData {
  name: string;
  description: string;
  type: FieldType;
  args: ArgData[];
}

export interface FieldType {
  name: string;
  kind: string;
  ofType?: ofType;
}

interface ofType {
  name: string;
}

export interface ArgData {
  name: string;
  type: Type;
}
