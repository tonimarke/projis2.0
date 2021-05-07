import { useRef, useEffect } from 'react';
import { OptionTypeBase } from 'react-select';
import Select, { Props as AsyncProps } from 'react-select';
import { useField } from '@unform/core';
import { Container, Label } from './styles';

interface AsyncSelectProps extends AsyncProps<OptionTypeBase> {
  name: string;
  label?: string;
}

export default function AsyncSelect({ name, label, ...rest }: AsyncSelectProps) {
  const selectRef = useRef(null);
  
  const { fieldName, defaultValue, registerField, error } = useField(name);
  
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.state.value.value) {
            return [];
          }
          return ref.state.value.value.map(
            (option: OptionTypeBase) => option.value,
          );
        }
        if (!ref.state.value.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);
  
  return (
    <div>
      <Label>
        {label && <label htmlFor={fieldName}>{label}</label>}
      </Label>
      <Container>
        <Select
          className="select"
          cacheOptions
          defaultValue={defaultValue}
          ref={selectRef}
          classNamePrefix="react-select"
          {...rest}
        />
      </Container>
    </div>
  );
};