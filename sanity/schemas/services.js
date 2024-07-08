export const services = {
  title: "Services",
  name: "services",
  type: "document",
  fields: [
    {
      title: "Number",
      name: "number",
      type: "string",
    },
    {
      title: "Link",
      name: "href",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
        }),
    },
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Description",
      name: "description",
      type: "string",
    },
  ],
};
