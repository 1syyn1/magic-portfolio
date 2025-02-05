import React from "react";

import {
  Heading,
  Flex,
  Text,
  Button,
  Avatar,
  RevealFx,
  Arrow,
  Column,
} from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";
import { InlineCode } from "@/once-ui/components";

import { baseURL, routes } from "@/app/resources";
import { home, about, person, newsletter } from "@/app/resources/content";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";

export default function ProductPage() {
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
      <RevealFx
          translateY="4"
          fillWidth
          horizontal="center"
        >
          <Heading wrap="balance" variant="display-strong-s" >
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
            The shop is currently closed!
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
            style={{ textAlign: "center" }}
            paddingBottom="m"
          >
            Due to unbearable demand the shop is currently <br /> <InlineCode>closed</InlineCode>, stay
            tuned for updates!
          </Text>
        </RevealFx> 
        <RevealFx
          translateY="8"
          delay={0.2}
          fillWidth
          horizontal="center"
          paddingBottom="m"
        >
          {newsletter.display && <Mailchimp newsletter={newsletter} />}
        </RevealFx>
      </Column>
    </Column>
  );
}
