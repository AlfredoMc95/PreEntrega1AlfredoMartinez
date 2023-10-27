import { Box, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { NavLink } from "react-router-dom";

const NabListDrawer = ({ navLinksArray }) => {
  return (
    <Box sx={{ width: 250 }}>
      <nav>
        {navLinksArray.map((buttons) => (
          <ListItem key={navLinksArray.title}>
            <ListItemButton
              key={buttons.title}
              component={NavLink}
              href={buttons.path}
              to={buttons.path}
            >
              <ListItemText primary={buttons.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </nav>
    </Box>
  );
};

export default NabListDrawer;
