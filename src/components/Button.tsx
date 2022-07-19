import { Button as ButtonNativeBase, Heading, IButtonProps } from 'native-base';


type Props = IButtonProps & {
    title: string;
}

export function Button({title,...rest}:Props) {
  return (
    <ButtonNativeBase {...rest}>
        <Heading>{title}</Heading>
    </ButtonNativeBase>
  );
}