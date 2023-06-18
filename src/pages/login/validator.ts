import * as z from "zod";

export const schema = z.object({
  email: z.string().nonempty("Email é obrigatório"),
  password: z.string().nonempty("Senha é obrigatória"),
});