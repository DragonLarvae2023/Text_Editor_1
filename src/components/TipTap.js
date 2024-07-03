import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import MenuBar from "./MenuBar";
import Box from "@mui/material/Box";

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
];

const content = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque consequatur debitis cum sapiente itaque. Ducimus, molestias ipsam velit perspiciatis molestiae veritatis dolorum amet facilis nulla fugiat consequuntur nisi natus ipsum! Iste, harum quasi, praesentium aperiam nihil ab repudiandae distinctio quidem esse, odit vitae. Voluptatum quae animi eum illo repellat nisi, blanditiis a doloribus explicabo veniam porro laboriosam ipsum delectus facilis, minima nulla. Sapiente quidem harum commodi velit, temporibus debitis dolore ratione veniam placeat fugit tempora nulla ipsum dolores at fugiat laudantium quaerat hic excepturi quam voluptate non natus deleniti aspernatur! Deleniti veritatis, quae optio consequatur molestias vero nulla tempore reiciendis sed nam cumque accusamus assumenda adipisci ut ratione ex quibusdam consectetur modi eligendi iure doloribus aut numquam maiores voluptatem? Iure ea dolores neque libero perferendis voluptatibus pariatur quia facilis sed corrupti recusandae odio, sint aliquid vel accusantium dicta culpa illo nesciunt natus excepturi repudiandae enim quod iste totam. Officia, asperiores sit voluptates molestias ullam corporis et similique ducimus facere odio hic unde? Optio perferendis possimus nisi dolores alias nostrum, illo amet repellendus neque id. Nulla iure animi deserunt! Architecto, nulla vel optio in recusandae voluptatum eius maxime necessitatibus accusantium atque facere error cupiditate similique obcaecati magnam enim! Ea, laudantium dignissimos.

`;

export default () => {
  return (
    <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
    <EditorProvider
      slotBefore={<MenuBar />}
      extensions={extensions}
      content={content}
    >
        
    </EditorProvider>
      </Box>
  );
};
