import styled from 'styled-components';

type Props = {
  options: [string, string][];
  handleSelectChange: (option: string) => void;
  defaultValue: string;
};

function SelectBox({ options, handleSelectChange, defaultValue }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleSelectChange(e.target.value);
  };

  return (
    <Select defaultValue={defaultValue} onChange={handleChange}>
      {options.map(([id, name]) => (
        <Option key={id} value={id}>
          {name}
        </Option>
      ))}
    </Select>
  );
}

export default SelectBox;

const Select = styled.select`
  width: 100%;
  height: 100%;
  text-align: center;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const Option = styled.option`
  background-color: black;
`;
