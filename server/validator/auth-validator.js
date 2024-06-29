const z = require("zod");

const signUpSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be atleast 3 characters" })
    .max(255, { message: "Name must be not more than 255 charcters" }),
  gender: z.enum(["male", "female", "other"], {
    required_error: "Gender is required",
  }),
  age: z.number({ required_error: "Age is required" }).positive(),
  weight: z.number({ required_error: "Weight is required" }).positive(),
  height: z.number({ required_error: "Height is required" }).positive(),
  dietaryPreferences: z.enum(["vegetarian", "non-vegetarian"], {
    required_error: "Dietary Preference is required",
  }),
  allergies: z.array(z.string()).optional(),
  healthGoals: z.string({ required_error: "Goals are required" }),
  activityLevel: z.string({ required_error: "Activity Level are required" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be atleast 3 characters" })
    .max(255, { message: "Email must be not more than 255 charcters" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(7, { message: "Password must be atleast 7 characters" })
    .max(255, { message: "Password must be not more than 255 charcters" }),
});

const signInSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be atleast 3 characters" })
    .max(255, { message: "Email must be not more than 255 charcters" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(7, { message: "Password must be atleast 7 characters" })
    .max(255, { message: "Password must be not more than 255 charcters" }),
});

module.exports = { signUpSchema, signInSchema };
