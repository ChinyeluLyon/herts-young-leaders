import * as S from "./Button.styles";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <S.Button
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
