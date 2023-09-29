import { Box, ListItem, ListItemButton, ListItemText } from "@mui/material";

const NabListDrawer = ({ navLinks }) => {
  return (
    <Box sx={{ width: 250 }}>
      <nav>
        {navLinks.map((buttons) => (
          <ListItem>
            <ListItemButton
              key={buttons.title}
              components="a"
              href={buttons.path}
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
