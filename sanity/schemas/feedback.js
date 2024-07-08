export const feedback = {
  title: "feedback",
  name: "Feedback",
  type: "document",
  fields: [
    {
      title: "FirstName",
      name: "firstname",
      type: "string",
    },
    {
      title: "LastName",
      name: "lastname",
      type: "string",
    },
    {
      title: "Email",
      name: "email",
      type: "string",
    },
    {
      title: "Phone",
      name: "phone",
      type: "string",
    },
    {
      title: "Message",
      name: "message",
      type: "string",
    },
    {
        title: "Service", 
        name: "service",
        type: "reference",
        to: [{type: "services"}]
    }
  ],
};
