import { Card, Grid, Text, Link } from "@nextui-org/react";

export default function Footer() {
  return (
    <Card
      css={{ p: "$6", mw: "100%", backgroundColor: "#0b2834", border: "none" }}
    >
      <Card.Header>
        <img alt="nextui logo" src="./f1_logo.svg" width="84px" height="68px" />
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs", color: "white" }}>
              F1Calendar
            </Text>
          </Grid>
          <Grid xs={12}>
            <Link
              css={{ color: "$accents8" }}
              icon
              href="www.f1-calendar-paolo-dm.vercel.app"
              target="_blank"
            >
              www.f1-calendar-paolo-dm.vercel.app
            </Link>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
        <Text css={{ color: "white" }}>
          A web app for Formula 1 fans to learn about standings and schedules of
          current or past F1 seasons. Made by Paolo Di Martino
        </Text>
      </Card.Body>
      <Card.Footer>
        <Link
          icon
          color="primary"
          target="_blank"
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </Card.Footer>
    </Card>
  );
}
