import React, { FormEventHandler } from 'react'

interface FormProps {
    title: string
    children: React.ReactNode
    onSubmit: (formData: FormData) => void
}

const Form: React.FC<FormProps> = ({title, children, onSubmit}) => {
    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
      event.preventDefault();
      const formEl = event.currentTarget;
      const formData = new FormData(formEl);
      console.log(formData.entries());
      for(const [key, value] of formData.entries()) {
        console.log(key, value);
      }
      onSubmit(formData);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <h3>{title}</h3>
        <fieldset>{children}</fieldset>
      </form>
    );
  };

export default Form
