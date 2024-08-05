'use client';
import { Description, Field, Input as I, Label } from '@headlessui/react';
import classNames from 'classnames';
import { useState } from 'react';
import { IoEyeOutline } from 'react-icons/io5';
export const Input = ({ propsInput, label, error }: any) => {
  const [type, setType] = useState(propsInput?.type ?? 'text');
  return (
    <Field className="relative w-full pb-3">
      <Label className="text-sm/6 font-light">{label}</Label>
      <I
        {...propsInput}
        type={type}
        className={classNames(
          'block w-full rounded border border-Black-300 py-1.5 px-3 text-sm/6 ',
          'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
        )}
      />
      {error && (
        <Description className="text-xs text-danger-main absolute -bottom-1">
          {error}
        </Description>
      )}
      {propsInput?.type === 'password' && (
        <IoEyeOutline
          onClick={() =>
            setType((type: any) => (type === 'password' ? 'text' : 'password'))
          }
          className="absolute cursor-pointer right-2 top-1/2 -translaye-x-1/2"
        />
      )}
    </Field>
  );
};

export default Input;
