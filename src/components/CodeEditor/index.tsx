import { EditorView } from "@codemirror/view";
import { json as jsonLang } from "@codemirror/lang-json";
import { oneDark } from "@codemirror/theme-one-dark";
import { linter, Diagnostic } from "@codemirror/lint";
import CodeMirror from "@uiw/react-codemirror";
import { Box } from "@radix-ui/themes";
import classes from "./style.module.scss";

interface CodeEditorProps {
  value: string;
  onChange: (value: string, isValid: boolean) => void;
  readOnly?: boolean;
  height?: string;
  error?: string;
}

const jsonDiagnostic = linter((view) => {
  const diagnostics: Diagnostic[] = [];
  try {
    JSON.parse(view.state.doc.toString());
  } catch (err) {
    if (err instanceof SyntaxError) {
      diagnostics.push({
        from: 0,
        to: view.state.doc.length,
        severity: "error",
        message: err.message,
      });
    }
  }
  return diagnostics;
});

const CodeEditor = ({
  value = "{}",
  onChange,
  readOnly = false,
  height = "300px",
  error,
}: CodeEditorProps) => {
  const handleChange = (val: string) => {
    let isValid = true;
    try {
      JSON.parse(val);
    } catch {
      isValid = false;
    }

    onChange?.(val, isValid);
  };

  return (
    <Box className={classes.editor}>
      <CodeMirror
        value={value}
        height={height}
        theme={oneDark}
        extensions={[
          jsonLang(),
          EditorView.editable.of(!readOnly),
          jsonDiagnostic,
        ]}
        onChange={handleChange}
        className={classes.editor}
      />
      <Box className={classes.error}>{error}</Box>
    </Box>
  );
};

export default CodeEditor;
