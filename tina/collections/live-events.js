const liveEvents = {
  label: "Live Events",
  name: "liveEvents",
  path: "content/sections",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: "live-events",
  },
  fields: [
    {
      label: "Enable",
      name: "enable",
      type: "boolean",
    },
    {
      label: "Title",
      name: "title",
      type: "string",
    },
    {
      label: "Subtitle",
      name: "subtitle",
      type: "string",
    },
    {
      label: "List",
      name: "list",
      type: "object",
      list: true,
      fields: [
        {
          label: "Enable",
          name: "enable",
          type: "boolean",
        },
        {
          label: "Title",
          name: "title",
          type: "string",
        },
        {
          label: "Thumbnail",
          name: "thumbnail",
          type: "image",
        },
        {
          label: "Media Link (Supports YouTube/Vimeo)",
          name: "mediaLink_supports_youtube_vimeo",
          type: "string",
        },
      ],
      ui: {
        itemProps: (item) => {
          return { label: `${item?.title}` };
        },
      },
    },
  ],
};

export default liveEvents;
