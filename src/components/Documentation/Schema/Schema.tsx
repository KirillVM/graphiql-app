import { useState } from 'react';
import { FieldData, SchemaData } from './Schema.interface';
import Types from './Types/Types';
import Type from './Type/Type';
import Field from './Field/Field';
import styles from './Schema.module.scss';

const Schema = ({ data }: SchemaData) => {
  const schema = data.__schema;
  const [activeTypeStack, setActiveTypeStack] = useState<string[]>([]);

  if (!schema || !schema.types || schema.types.length === 0) {
    return null;
  }

  const setActiveType = (type: string) => {
    setActiveTypeStack((prevStack) => [...prevStack, type]);
  };

  const goBack = () => {
    setActiveTypeStack((prevStack) => prevStack.slice(0, -1));
  };

  const activeType =
    activeTypeStack.length > 0
      ? activeTypeStack[activeTypeStack.length - 1]
      : null;
  const activeTypeData = activeType
    ? schema.types.find((type) => type.name === activeType)
    : undefined;

  return (
    <div>
      {!activeTypeData ? (
        <Types types={schema.types} setActiveType={setActiveType} />
      ) : (
        <div className={styles.list}>
          <button onClick={goBack}>
            {<span>◀</span>}
            {activeTypeStack.length === 1
              ? 'Docs'
              : `${activeTypeStack[activeTypeStack.length - 2]}`}
          </button>
          <Type
            name={activeTypeData.name}
            description={
              activeTypeData.description
                ? activeTypeData.description
                : 'No description'
            }
          />
          <ul>
            {activeTypeData?.fields?.map((field: FieldData) => (
              <Field
                key={field.name}
                name={field.name}
                args={field.args}
                type={field.type}
                description={field.description}
                setActiveType={setActiveType}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Schema;
