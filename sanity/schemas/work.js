export const work = {
  title: "Work",
  name: "work",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Number",
      name: "number",
      type: "string",
    },
    {
      title: "Description",
      name: "description",
      type: "string",
    },
    {
      title: "Category",
      name: "category",
      type: "string",
    },
    {
      title: "Tech Stack",
      name: "stack",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              title: "Name",
              name: "name",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Live project",
      name: "live",
      type: "string",
    },
    {
      title: "Github Repository",
      name: "github",
      type: "string",
    },
  ],
};
