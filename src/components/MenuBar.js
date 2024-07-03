import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import TToggleButton from "@mui/material/ToggleButton";
import ClearIcon from "@mui/icons-material/Clear";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { ToggleButton,Button } from "@mui/material";
const MenuBar = () => {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  return (
    <div className="control-group">
      <ToggleButtonGroup sx={{
        m:"auto"
      }}
      style={{
        marginInline:"23px"
      }}>
        <ToggleButton
          value="bold"
          aria-label="bold"
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "is-active" : ""}
        >
          <FormatBoldIcon />
        </ToggleButton>

        <ToggleButton
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is-active" : ""}
        >
          <FormatItalicIcon />
        </ToggleButton>
        <ToggleButton
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "is-active" : ""}
        >
          Strike
        </ToggleButton>
        <ToggleButton
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          className={editor.isActive("code") ? "is-active" : ""}
        >
          Code
        </ToggleButton>
        <ToggleButton
          onClick={() => editor.chain().focus().unsetAllMarks().run()}
        >
        <ClearIcon/>
        </ToggleButton>
        <ToggleButton onClick={() => editor.chain().focus().clearNodes().run()}>
          Clear nodes
        </ToggleButton>
        <ToggleButton
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive("paragraph") ? "is-active" : ""}
        >
          Paragraph
        </ToggleButton>
        <ToggleButton
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive("heading", { level: 1 }) ? "is-active" : ""
          }
        >
          H1
        </ToggleButton>
        <ToggleButton
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive("heading", { level: 2 }) ? "is-active" : ""
          }
        >
          H2
        </ToggleButton>
        <ToggleButton
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive("heading", { level: 3 }) ? "is-active" : ""
          }
        >
          H3
        </ToggleButton>
        <ToggleButton
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
          className={
            editor.isActive("heading", { level: 4 }) ? "is-active" : ""
          }
        >
          H4
        </ToggleButton>
        <ToggleButton
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 5 }).run()
          }
          className={
            editor.isActive("heading", { level: 5 }) ? "is-active" : ""
          }
        >
          H5
        </ToggleButton>
        <ToggleButton
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 6 }).run()
          }
          className={
            editor.isActive("heading", { level: 6 }) ? "is-active" : ""
          }
        >
          H6
        </ToggleButton>
        <ToggleButton
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "is-active" : ""}
        >
         <FormatListBulletedIcon/>
        </ToggleButton>
     
      </ToggleButtonGroup>
      <Button>saving ....</Button>
    </div>
  );
};
export default MenuBar