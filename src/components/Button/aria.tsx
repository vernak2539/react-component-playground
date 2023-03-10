import React, { useRef } from "react";
import { AriaButtonProps, useButton } from "react-aria";
import "./styles.css";

// click handler is onPress and is defined in the AriaButtonProps
// different semantics for it (i.e. SyntheticBaseEvent = onclick,

interface ButtonProps extends AriaButtonProps<"button"> {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
}

/**
 * Primary UI component for user interaction
 */
export const AriaButton = (props: ButtonProps) => {
  const ref = useRef();
  const defaultedProps = {
    primary: false,
    size: "medium",
    ...props,
  };
  const { buttonProps } = useButton(defaultedProps, ref);
  const { label, primary, size, backgroundColor } = defaultedProps;

  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";

  return (
    <button
      ref={ref}
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={{ backgroundColor }}
      {...buttonProps}
    >
      {label}
    </button>
  );
};
