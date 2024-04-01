import { Add, Search } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import FilterListIcon from "@mui/icons-material/FilterList";

const MyProductHeader = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <Box>
      <Box>
        <Typography sx={{ fontSize: "30px", fontWeight: 600 }}>
          My Product
        </Typography>
        <Box>
          <Box
            sx={{
              display: "flex",
              mt: "20px",
              p: "20px",
              justifyContent: "space-between",
              bgcolor: "white",
            }}
          >
            <TextField
              onChange={handleSearch}
              size="small"
              value={search}
              label={
                <div>
                  <Search />
                  Search
                </div>
              }
              sx={{ width: "300px" }}
            />
            <Button variant="outlined" startIcon={<Add />}>
              Add Product
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              paddingBottom: "20px",
              paddingX: "20px",
              justifyContent: "space-between",
              bgcolor: "white",
              boxShadow: "0px 12px 32px #1E20261A",
            }}
          >
            <Box>
              <Button startIcon={<TuneIcon />} variant="outlined">
                Filter
              </Button>
            </Box>
            <Box>
              <Button>
                <FilterListIcon />
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MyProductHeader;
