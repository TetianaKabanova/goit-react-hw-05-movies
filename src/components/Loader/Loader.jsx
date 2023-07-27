import { RotatingLines } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

function Loader() {
  return (
    <Wrapper>
      <RotatingLines
        strokeColor="#51E5FF"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </Wrapper>
  );
}

export default Loader;
