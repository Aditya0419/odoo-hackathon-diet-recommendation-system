import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./theme";
import Axios from "axios";

const foodSchema = {
  foodname: "",
  image: "",
  calories: "",
  category: "",
  carbs: "",
  fat: "",
  protein: "",
  fiber: "",
  cholesterol: "",
  sodium: "",
  sugar: "",
  potassium: "",
  magnesium: "",
  phosphorus: "",
  vitaminC: "",
  vitaminA: "",
  calcium: "",
  iron: "",
  zinc: "",
  vitaminE: "",
  vitaminK: "",
};

export default function FoodForm() {
  const [formData, setFormData] = useState(foodSchema);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await Axios.post("", formData); // Replace with your API endpoint
      setFormData(foodSchema); // Reset form data after successful submission
    } catch (error) {
      console.error("Error submitting food form:", error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="food-form">
        <form onSubmit={handleSubmit}>
          <Box
            component="form"
            sx={{
              maxWidth: "51.8ch",
              "& .MuiTextField-root": { m: 1, width: "50ch" },
              "@media(max-width:600px)": {
                "& .MuiTextField-root": { m: 1, width: "35ch" },
              },
            }}
            noValidate
            autoComplete="off"
          >
            {/* Food Name */}
            <TextField
              id="outlined-basic"
              label="Food Name"
              variant="outlined"
              className="textfield"
              name="foodname"
              value={formData.foodname}
              onChange={handleInputChange}
              required
            />
            <br />

            {/* Image URL */}
            <TextField
              id="outlined-basic"
              label="Image URL"
              variant="outlined"
              className="textfield"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              required
            />
            <br />

            {/* Calories */}
            <TextField
              id="outlined-number"
              label="Calories"
              type="number"
              name="calories"
              value={formData.calories}
              onChange={handleInputChange}
              required
              
              variant="outlined"
            />
            <br />

            {/* Category */}
            <TextField
              id="outlined-basic"
              label="Category"
              variant="outlined"
              className="textfield"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
            />
            <br />

            {/* Macros */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <TextField
                id="outlined-number"
                label="Carbs (g)"
                type="number"
                name="carbs"
                value={formData.carbs}
                onChange={handleInputChange}
                required
                sx={{ m: 1, flex: "1 1 30%" }}
                variant="outlined"
              />
              <TextField
                id="outlined-number"
                label="Fat (g)"
                type="number"
                name="fat"
                value={formData.fat}
                onChange={handleInputChange}
                required
                sx={{ m: 1, flex: "1 1 30%" }}
                variant="outlined"
              />
              <TextField
                id="outlined-number"
                label="Protein (g)"
                type="number"
                name="protein"
                value={formData.protein}
                onChange={handleInputChange}
                required
                sx={{ m: 1, flex: "1 1 30%" }}
                variant="outlined"
              />
            </Box>

            {/* Additional Nutrients */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              {/* Additional fields for fiber, cholesterol, sodium, sugar, potassium, etc. */}
              {/* Example:
                <TextField
                  id="outlined-number"
                  label="Fiber (g)"
                  type="number"
                  name='fiber'
                  value={formData.fiber}
                  onChange={handleInputChange}
                  required
                  sx={{ m: 1, flex: '1 1 30%' }}
                  variant="outlined"
                />
              */}
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <TextField
                id="fiber"
                name="fiber"
                label="Fiber (g)"
                type="number"
                variant="outlined"
                value={formData.fiber}
                onChange={handleInputChange}
                required
                sx={{ flex: "1 1 30%", mb: 2 }}
              />
              <TextField
                id="cholesterol"
                name="cholesterol"
                label="Cholesterol (mg)"
                type="number"
                variant="outlined"
                value={formData.cholesterol}
                onChange={handleInputChange}
                required
                sx={{ flex: "1 1 30%", mb: 2 }}
              />
              <TextField
                id="sodium"
                name="sodium"
                label="Sodium (mg)"
                type="number"
                variant="outlined"
                value={formData.sodium}
                onChange={handleInputChange}
                required
                sx={{ flex: "1 1 30%", mb: 2 }}
              />
            </Box>

            {/* Sugar, Potassium, Magnesium */}
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <TextField
                id="sugar"
                name="sugar"
                label="Sugar (g)"
                type="number"
                variant="outlined"
                value={formData.sugar}
                onChange={handleInputChange}
                required
                sx={{ flex: "1 1 30%", mb: 2 }}
              />
              <TextField
                id="potassium"
                name="potassium"
                label="Potassium (mg)"
                type="number"
                variant="outlined"
                value={formData.potassium}
                onChange={handleInputChange}
                required
                sx={{ flex: "1 1 30%", mb: 2 }}
              />
              <TextField
                id="magnesium"
                name="magnesium"
                label="Magnesium (mg)"
                type="number"
                variant="outlined"
                value={formData.magnesium}
                onChange={handleInputChange}
                required
                sx={{ flex: "1 1 30%", mb: 2 }}
              />
            </Box>

            {/* Phosphorus, Vitamin C, Vitamin A */}
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <TextField
                id="phosphorus"
                name="phosphorus"
                label="Phosphorus (mg)"
                type="number"
                variant="outlined"
                value={formData.phosphorus}
                onChange={handleInputChange}
                required
                sx={{ flex: "1 1 30%", mb: 2 }}
              />
              <TextField
                id="vitaminC"
                name="vitaminC"
                label="Vitamin C (mg)"
                type="number"
                variant="outlined"
                value={formData.vitaminC}
                onChange={handleInputChange}
                required
                sx={{ flex: "1 1 30%", mb: 2 }}
              />
              <TextField
                id="vitaminA"
                name="vitaminA"
                label="Vitamin A (IU)"
                type="number"
                variant="outlined"
                value={formData.vitaminA}
                onChange={handleInputChange}
                required
                sx={{ flex: "1 1 30%", mb: 2 }}
              />
            </Box>

            {/* Calcium, Iron, Zinc */}
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <TextField
                id="calcium"
                name="calcium"
                label="Calcium (mg)"
                type="number"
                variant="outlined"
                value={formData.calcium}
                onChange={handleInputChange}
                required
                sx={{ flex: "1 1 30%", mb: 2 }}
              />
              <TextField
                id="iron"
                name="iron"
                label="Iron (mg)"
                type="number"
                variant="outlined"
                value={formData.iron}
                onChange={handleInputChange}
                required
                sx={{ flex: "1 1 30%", mb: 2 }}
              />
              <TextField
                id="zinc"
                name="zinc"
                label="Zinc (mg)"
                type="number"
                variant="outlined"
                value={formData.zinc}
                onChange={handleInputChange}
                required
                sx={{ flex: "1 1 30%", mb: 2 }}
              />
            </Box>

            {/* Vitamin E, Vitamin K */}
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <TextField
                id="vitaminE"
                name="vitaminE"
                label="Vitamin E (mg)"
                type="number"
                variant="outlined"
                value={formData.vitaminE}
                onChange={handleInputChange}
                required
                sx={{ flex: "1 1 30%", mb: 2 }}
              />
              <TextField
                id="vitaminK"
                name="vitaminK"
                label="Vitamin K (mcg)"
                type="number"
                variant="outlined"
                value={formData.vitaminK}
                onChange={handleInputChange}
                required
                sx={{ flex: "1 1 30%", mb: 2 }}
              />
            </Box>

         


          <div className="food-submit">
            <button className="submit-food">
              <span className="button_top"> Submit </span>
            </button>
          </div>
        </form>
      </div>
    </ThemeProvider>
  );
}