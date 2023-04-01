type NewType = {
  label: string;
  type: string;
  name: string;
  value: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
};

const Input = (props: NewType) => {
  const { label, type, name, value, onChange, onClick, className } = props;

  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      onClick={onClick}
      placeholder={label}
      className={`w-full px-2 py-2 rounded-md border border-primary outline-primary bg-white ${className}`}
    />
  );
};

export default Input;
