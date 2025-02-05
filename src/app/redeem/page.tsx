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
import { InlineCode } from "@/once-ui/components";
import { Spinner } from "@/once-ui/components/Spinner"; // Correct default import

// Sample key-to-name mapping
const keyTable = {
  a4976d9b4adeb7206d2317168509732cec926124: "Luis",
};

export default function KeyRedemptionPage() {
  const [key, setKey] = useState("");
  const [message, setMessage] = useState("");
  const [isValidKey, setIsValidKey] = useState(false);
  const [userName, setUserName] = useState("");
  const [headingText, setHeadingText] = useState("Redeem your Key");
  const [isLoading, setIsLoading] = useState(false); // Added loading state

  const handleRedeem = () => {
    setIsLoading(true); // Start loading when redeem is clicked

    setTimeout(() => {
      if (keyTable[key]) {
        setIsValidKey(true);
        setUserName(keyTable[key]);
        setHeadingText(`Welcome, ${keyTable[key]}!`);

        // Show the message for 1 second before redirecting to the download link
        setTimeout(() => {
          window.location.href = `/files/Installer.exe`; // Redirect to the file download
        }, 1000); // 1 second delay for the download redirection
      } else {
        setIsValidKey(false);
        setHeadingText("The Key does not Exist!");
      }

      setIsLoading(false); // Stop loading after processing
    }, 1000); // 1 second delay before checking the key
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
          <Heading wrap="balance" variant="display-strong-s">
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
            {headingText}
          </Heading>
        </RevealFx>

        <RevealFx
          translateY="8"
          delay={0.2}
          fillWidth
          horizontal="center"
        >
          <Text
            wrap="balance"
            onBackground="neutral-weak"
            variant="heading-default-xl"
            paddingBottom="xs"
          >
            {isValidKey ? (
              "We’re processing your download..."
            ) : (
              <>
                Enter the key you received to redeem{" "}
                <InlineCode>Void</InlineCode>.
              </>
            )}
          </Text>
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
            variant="heading-default-s"
            paddingBottom="m"
          >
            {isValidKey ? (
              "Purchased 02/05/25 for $4.99 · void6c8de65cfa014cd7cca3ae369de910d6"
            ) : (
              <>
              </>
            )}
          </Text>
        </RevealFx>

        {!isValidKey && (
          <RevealFx
            translateY="12"
            delay={0.4}
            fillWidth
            horizontal="center"
            paddingBottom="m"
          >
            <Input
              id="key-input"
              label="Enter Key"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              width="100%"
            />
          </RevealFx>
        )}

        {!isValidKey && (
          <RevealFx
            translateY="16"
            delay={0.6}
            fillWidth
            horizontal="center"
            paddingBottom="m"
          >
            <Button
              variant="primary"
              size="l"
              onClick={handleRedeem}
              disabled={isLoading} // Disable button while loading
            >
              {isLoading ? (
                <Flex gap="8" vertical="center" horizontal="center">
                  <Spinner size="s" /> {/* Use the Spinner component */}
                </Flex>
              ) : (
                "Redeem"
              )}
            </Button>
          </RevealFx>
        )}

        {message && (
          <RevealFx
            translateY="20"
            delay={0.8}
            fillWidth
            horizontal="center"
            paddingBottom="m"
          >
            <Text
              variant="body-default-m"
              style={{ color: isValidKey ? "green" : "red" }}
            >
              {message}
            </Text>
          </RevealFx>
        )}
      </Column>
    </Column>
  );
}
