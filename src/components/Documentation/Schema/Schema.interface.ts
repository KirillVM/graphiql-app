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
  enumValues: EnumValue[] | null;
  interfaces: InterfaceValue[] | null;
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

export interface EnumValue {
  deprecationReason: string | null;
  description: string;
  isDeprecated: boolean;
  name: string;
}

interface ofType {
  name: string;
  kind: string;
  ofType?: ofType;
}

export interface ArgData {
  name: string;
  type: Type;
}

export interface InterfaceValue {
  kind: string;
  name: string;
}
