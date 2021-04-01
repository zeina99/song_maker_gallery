import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import styled, { Blanket as StyledBlanket, Button } from "Styles";

const BlanketChildren = styled.div`
  margin-top: 2rem;
`;

const ToggleBlanket = styled(StyledBlanket)`
  display: ${(props) => (props.isEnabled ? "auto" : "none")};
`;

const OkButton = styled(Button)`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  border-radius: 0 0 20px 0;
  background-color: salmon;
`;

export const Blanket = ({ children, dismissedCallback, ...props }) => {
  // manage whether the component is displayed
  const [enabled, setEnabled] = useState(true);

  // parent can override and force the blanket to come back or go away
  useEffect(() => {
    setEnabled(props.enabled);
  }, [props.enabled]);

  return (
    <ToggleBlanket isEnabled={enabled} data-testid="blanket">
      <OkButton
        data-testid="dismissBlanketButton"
        onClick={() => {
          setEnabled(false);
          dismissedCallback && dismissedCallback();
        }}
      >
        Close
      </OkButton>
      <BlanketChildren>{children}</BlanketChildren>
    </ToggleBlanket>
  );
};

Blanket.propTypes = {
  children: PropTypes.node,
  dimissedCallback: PropTypes.func,
  enabled: PropTypes.bool,
};

Blanket.defaultProps = {
  enabled: true,
};
