import * as S from "./Button.styles";

type ButtonProps = {
  children: React.ReactNode;
  selected?: boolean;
  hidden?: boolean;
  onClick?: (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
const Button = ({ children, selected, hidden, onClick }: ButtonProps) => {
  return (
    <S.Button
      role="button"
      selected={selected}
      hidden={hidden}
      onClick={(ev) => {
        if (onClick) {
          onClick(ev);
        }
      }}
    >
      {children}
    </S.Button>
  );
};

export default Button;
