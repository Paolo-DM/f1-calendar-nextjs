import { Card, Grid, Text, Link } from "@nextui-org/react";

export default function Footer() {
  return (
    <div className="bg-[#0b2834]">
      <Card
        css={{
          p: "$2",
          mw: "100%",
          backgroundColor: "#0b2834",
          border: "none",
        }}
      >
        <Card.Header>
          <img alt="F1 logo" src="../../f1_logo.svg" width="102px" />
          <Grid.Container css={{ pl: "$8" }}>
            <Grid xs={12}>
              <Text h4 css={{ lineHeight: "$xs", color: "white" }}>
                F1Calendar
              </Text>
            </Grid>
            <Grid xs={12}>
              <Link
                css={{ color: "$accents8" }}
                href="https://f1calendar.vercel.app/"
                target="_blank"
              >
                https://f1calendar.vercel.app/
              </Link>
            </Grid>
          </Grid.Container>
        </Card.Header>
        <Card.Body css={{ py: "$2" }}>
          <Text css={{ color: "white" }}>
            A web app for Formula 1 fans to learn about standings and schedules
            of current or past F1 seasons.
          </Text>
          <Link
            href="https://www.linkedin.com/in/paolo-di-martino1/"
            isExternal
          >
            <span className="text-white">Made by &nbsp;</span> Paolo Di Martino
          </Link>
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
    </div>
  );
}
