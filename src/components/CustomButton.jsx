import { Button } from "@mui/material";
import styled from "@emotion/styled";
const CustomButton = styled(Button)({
    backgroundColor: '#E7473C', // Initial background color
    margin:40,
    transition: 'background-color 0.3s ease, transform 0.2s ease-in',
    color: '#000', // Text color
    '&:hover': {
      transform: 'translateY(-5px)',
      backgroundColor: '#E7473C'
    },
  });

  export default CustomButton;