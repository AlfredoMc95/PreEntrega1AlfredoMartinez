import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function ActiveLastBreadcrumb() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          color="inherit"
          href="/"
          sx={{ color: "white" }}
        >
          Animals
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/"
          sx={{ color: "white" }}
        >
          Cats
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href="/"
          sx={{ color: "white" }}
        >
          Dogs
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href="/"
          sx={{ color: "white" }}
        >
          horses
        </Link>
      </Breadcrumbs>
    </div>
  );
}
