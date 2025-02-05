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

import { baseURL, routes } from "@/app/resources";
import { home, about, person, newsletter } from "@/app/resources/content";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";

export async function generateMetadata() {
  const title = home.title;
  const description = home.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="l" horizontal="center">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: home.title,
            description: home.description,
            url: `https://${baseURL}`,
            image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
            publisher: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      <Column
        fillWidth
        paddingY="l"
        gap="m"
        horizontal="center"
        vertical="center"
      >
        <Column
          maxWidth="m"
          horizontal="center"
          vertical="center"
          style={{ textAlign: "center" }}
        >
          <RevealFx
            translateY="4"
            fillWidth
            horizontal="center"
            paddingBottom="xs"
          >
            <Heading wrap="balance" variant="display-strong-s">
              void.
            </Heading>
          </RevealFx>

          <RevealFx
            translateY="4"
            fillWidth
            horizontal="center"
            paddingBottom="m"
          >
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
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
            >
              {home.subline}
            </Text>
          </RevealFx>

          <RevealFx translateY="12" delay={0.4} horizontal="center">
            <Flex gap="16" horizontal="center">
              <Button
                id="purchase"
                data-border="rounded"
                href="/purchase"
                variant="secondary"
                size="l"
                arrowIcon
              >
                <Flex gap="8" vertical="center">
                  Purchase
                </Flex>
              </Button>
              <Button
                id="redeem"
                data-border="rounded"
                href="/redeem"
                variant="secondary"
                size="l"
                arrowIcon
              >
                <Flex gap="8" vertical="center">
                  Redeem
                </Flex>
              </Button>
            </Flex>
          </RevealFx>
        </Column>
      </Column>

      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} />
      </RevealFx>
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
