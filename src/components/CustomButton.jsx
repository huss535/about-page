import { Button } from "@mui/material";
import styled from "@emotion/styled";
const CustomButton = styled(Button)({
    backgroundColor: 'inherit', // Initial background color
    margin:40,
    transition: 'background-color 0.4s ease, transform 0.3s ease-in',
    color: '#000', // Text color
    '&:hover': {
      transform: 'translateY(-5px)',
      backgroundColor: 'beige'
    },
  });

  export default CustomButton;