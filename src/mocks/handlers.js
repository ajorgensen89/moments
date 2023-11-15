import { rest } from "msw";

const baseURL = "https://drf-api-aj-f1a2d8abfd1f.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 6,
        username: "Tea",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 6,
        profile_image: "https://res.cloudinary.com/dtsaa4qbs/image/upload/v1/media/../default_profile_qdjgyp"
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];