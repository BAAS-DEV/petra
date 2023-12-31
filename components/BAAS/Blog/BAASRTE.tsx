import { CodeHighlightNode, CodeNode } from "@lexical/code"
import { AutoLinkNode, LinkNode } from "@lexical/link"
import { ListItemNode, ListNode } from "@lexical/list"
import { TRANSFORMERS } from "@lexical/markdown"
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin"
import { LexicalComposer } from "@lexical/react/LexicalComposer"
import { ContentEditable } from "@lexical/react/LexicalContentEditable"
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin"
import { ListPlugin } from "@lexical/react/LexicalListPlugin"
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin"
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin"
import { HeadingNode, QuoteNode } from "@lexical/rich-text"
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table"

// import prepopulatedText from "./SampleText.js"
import ActionsPlugin from "./plugins/ActionsPlugin"
import CodeHighlightPlugin from "./plugins/CodeHighlightPlugin"
import ToolbarPlugin from "./plugins/ToolbarPlugin"
import ExampleTheme from "./themes/ExampleTheme"
import "./themes/theme.module.css"

function Placeholder() {
  return (
    <div className="editor-placeholder">
      Play around with the Markdown plugin...
    </div>
  )
}

const editorConfig = {
  //   editorState: prepopulatedText,
  theme: ExampleTheme,
  // Handling of errors during update
  onError(error) {
    throw error
  },
  // Any custom nodes go here
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode,
  ],
}

export default function BAASRTE() {
  return (
    <>
      {/* <LexicalComposer initialConfig={editorConfig}>
        <div className="editor-container">
          <ToolbarPlugin />
          <div className="editor-inner">
            <RichTextPlugin
              contentEditable={
                <ContentEditable className="editor-input bg-white row-span-4" />
              }
              placeholder={<Placeholder />}
              ErrorBoundary={undefined}
            />
            <AutoFocusPlugin />
            <ListPlugin />
            <LinkPlugin />
            <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
            <CodeHighlightPlugin />
          </div>
          <ActionsPlugin />
        </div>
      </LexicalComposer> */}
    </>
  )
}
