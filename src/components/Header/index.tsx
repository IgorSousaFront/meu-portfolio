type IHeaderProps = {
  name: string | undefined;
  text: string;
  number: number;
}

const Header = ({
  name,
  text,
  number
}: IHeaderProps) => {
  return(<h1>{name} {text} {number}</h1>);
}

export default Header;

