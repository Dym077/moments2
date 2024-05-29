import { rest } from "msw";

const baseURL = "https://drf-api-wt-e8d04bb58926.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 4,
        username: "nisse",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 2,
        profile_image:
          "<my cloudinary media upload url here>",
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];