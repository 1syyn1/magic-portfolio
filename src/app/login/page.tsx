"use client";

import React, { useState } from "react";
import {
  Column,
  Flex,
  Heading,
  Text,
  Input,
  Button,
  RevealFx,
} from "@/once-ui/components";
import { Spinner } from "@/once-ui/components/Spinner"; // Assuming you have a Spinner component

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state for the button
  const [errorMessage, setErrorMessage] = useState(""); // To handle error messages

  const handleLogin = () => {
    if (!email || !password) {
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      // Simulate successful login or handle error
      if (email === "test@example.com" && password === "password123") {
        alert("Login Successful!"); // Simulate successful login
      } else {
      }
    }, 1500);
  };

  return (
    <Column
      fillWidth
      paddingY="l"
      gap="m"
      horizontal="center"
      vertical="center"
      style={{ textAlign: "center" }}
    >
      <Column maxWidth="m" horizontal="center" vertical="center">
        <RevealFx translateY="4" fillWidth horizontal="center">
          <Heading wrap="balance" variant="display-strong-xs">
            void
          </Heading>
        </RevealFx>
        <RevealFx
          translateY="4"
          fillWidth
          horizontal="center"
          paddingBottom="m"
        >
          <Heading wrap="balance" variant="display-strong-l">
            Login
          </Heading>
        </RevealFx>

        <RevealFx
          translateY="8"
          delay={0.2}
          fillWidth
          horizontal="center"
          paddingBottom="m"
        >
          <Text
            wrap="balance"
            onBackground="neutral-weak"
            variant="heading-default-xl"
            paddingBottom="m"
          >
            Enter your credentials to access your dashboard
          </Text>
        </RevealFx>

        {/* Reverted Input Fields to their previous look */}
        <RevealFx
          translateY="12"
          delay={0.4}
          fillWidth
          horizontal="center"
          paddingBottom="m"
        >
          <Input
            id="email"
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            width="100%"
          />
        </RevealFx>

        <RevealFx
          translateY="16"
          delay={0.6}
          fillWidth
          horizontal="center"
          paddingBottom="m"
        >
          <Input
            id="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            width="100%"
          />
        </RevealFx>

        {errorMessage && (
          <RevealFx
            translateY="20"
            delay={0.8}
            fillWidth
            horizontal="center"
            paddingBottom="m"
          >
            <Text
              variant="body-default-m"
              style={{ color: "red", fontWeight: "bold" }}
            >
              {errorMessage}
            </Text>
          </RevealFx>
        )}

        <RevealFx
          translateY="24"
          delay={1}
          fillWidth
          horizontal="center"
          paddingBottom="m"
        >
          <Button
            variant="primary"
            size="l"
            onClick={handleLogin}
            disabled={isLoading} // Disable button while loading
          >
            {isLoading ? (
              <Flex gap="8" vertical="center" horizontal="center">
                <Spinner size="s" /> {/* Use the Spinner component */}
                Logging in...
              </Flex>
            ) : (
              "Login"
            )}
          </Button>
        </RevealFx>
      </Column>
    </Column>
  );
};

export default LoginPage;
