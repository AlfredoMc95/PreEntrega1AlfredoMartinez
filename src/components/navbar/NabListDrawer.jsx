import { Box, ListItem, ListItemButton, ListItemText } from "@mui/material";

const NabListDrawer = ({ navLinksArray }) => {
  return (
    <Box sx={{ width: 250 }}>
      <nav>
        {navLinksArray.map((buttons) => (
          <ListItem key={navLinksArray.title}>
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
