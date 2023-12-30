import { useState } from 'react';
import {
  FieldData,
  SchemaData,
  EnumValue,
  InterfaceValue,
} from './Schema.interface';
import Types from './Types/Types';
import Type from './Type/Type';
import Field from './Field/Field';
import styles from './Schema.module.scss';
import Enum from './Enum/Enum';
import Interface from './Interface/Interface';
import QueryType from './QueryType/QueryType';
import rootIcon from '@assets/icons/docs/root.svg';
import allTypesIcon from '@assets/icons/docs/all-types.svg';
import fieldsIcon from '@assets/icons/docs/fields.svg';
import implementsIcon from '@assets/icons/docs/implements.svg';
import enumIcon from '@assets/icons/docs/enum.svg';

const Schema = ({ data }: SchemaData) => {
  const schema = data.__schema;
  const [activeTypeStack, setActiveTypeStack] = useState<string[]>([]);

  if (!schema || !schema.types || schema.types.length === 0) {
    return null;
  }

  const setActiveType = (type: string) => {
    setActiveTypeStack((prevStack) => [...prevStack, type]);
    window.scrollTo(0, 0);
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
        <>
          <div className={styles.head}>
            <img src={rootIcon} alt="Root types" />
            Root Types
          </div>
          <QueryType
            name={schema.queryType?.name}
            setActiveType={setActiveType}
          />
          <div className={styles.head}>
            <img src={allTypesIcon} alt="All schema types" />
            All Schema Types
          </div>
          <Types types={schema.types} setActiveType={setActiveType} />
        </>
      ) : (
        <div className={styles.list}>
          <button data-testid="go-back-button" onClick={goBack}>
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
          {activeTypeData.interfaces &&
            activeTypeData.interfaces.length !== 0 && (
              <>
                <div className={styles.head}>
                  <img src={implementsIcon} alt="Implements" />
                  Implements
                </div>
                <ul className={styles.interface}>
                  {activeTypeData?.interfaces?.map(
                    (interfaceValue: InterfaceValue) => (
                      <Interface
                        key={interfaceValue.name}
                        name={interfaceValue.name}
                        setActiveType={setActiveType}
                      />
                    )
                  )}
                </ul>
              </>
            )}
          {activeTypeData?.enumValues && (
            <>
              <div className={styles.head}>
                <img src={enumIcon} alt="Enum Values" />
                Enum Values
              </div>
              <ul>
                {activeTypeData?.enumValues?.map((enumValue: EnumValue) => (
                  <Enum key={enumValue.name} name={enumValue.name} />
                ))}
              </ul>
            </>
          )}
          {activeTypeData?.fields && (
            <>
              <div className={styles.head}>
                <img src={fieldsIcon} alt="Fields" />
                Fields
              </div>
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
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Schema;
