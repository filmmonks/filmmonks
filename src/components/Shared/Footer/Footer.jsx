import React from "react";
import { Grid, Link, Typography } from "@mui/material";
import { Container } from "@mui/system";
import img from "../../../Assets/Footer/footer.png";
const Footer = () => {
  function Copyright(props) {
    return (
      <div className="flex justify-center items-center mt-10">
        <p className="text-[#fff]">
          Copyright &copy;{" "}
          <a className="underline" href="#home">
            Film Monks{" "}
          </a>
          {new Date().getFullYear()}
        </p>
      </div>
    );
  }
  const footers = [
    {
      title: "Company",
      description: ["Team", "History", "Contact us", "Locations"],
    },
    {
      title: "Features",
      description: [
        "Cool stuff",
        "Random feature",
        "Team feature",
        "Developer stuff",
        "Another one",
      ],
    },
    {
      title: "Resources",
      description: [
        "Resource",
        "Resource name",
        "Another resource",
        "Final resource",
      ],
    },
    {
      title: "Legal",
      description: ["Privacy policy", "Terms of use"],
    },
  ];
  return (
    <div
      style={{ background: `url(${img})`, backgroundSize: "cover" }}
      className=""
    >
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="#fff" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      variant="subtitle1"
                      color="#fff"
                      className="cursor-pointer"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright sx={{ mt: 5, color: "#fff" }} />
      </Container>
      {/* End footer */}
    </div>
  );
};

export default Footer;
