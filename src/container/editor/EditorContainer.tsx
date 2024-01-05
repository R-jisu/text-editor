import TextareaContainer from "./TextareaContainer";
import Toolbar from "./Toolbar";

const EditorContainer = () => {
  return (
    <div style={{ backgroundColor: "#fff", flex: 1, height: "100%" }}>
      <Toolbar />
      <TextareaContainer />
    </div>
  );
};

export default EditorContainer;
