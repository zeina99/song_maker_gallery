import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { H2, Button as DefaultButton, Input } from "Styles";

const Button = styled(DefaultButton)`
  max-width: 100px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  margin: 5vh 5vw;
`;
const Label = styled.label`
  display: block;
`;

export const ChangeEmail = ({ changeEmail, userId, token }) => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    changeEmail(email, userId, token);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <H2>Change Account Email</H2>
      <Label htmlFor="newEmail">New Email</Label>
      <Input
        block
        data-testid="newEmailInput"
        type="test"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <Button
        block
        data-testid="newEmailFormSubmit"
        as="input"
        type="submit"
        value="Submit"
      />
    </Form>
  );
};

ChangeEmail.propTypes = {
  /* function(newEmail, userId, token) to change email */
  changeEmail: PropTypes.func,

  /* current user credentials */
  userId: PropTypes.number,
  token: PropTypes.string,
};
