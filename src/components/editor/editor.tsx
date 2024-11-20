'use client'

import { BlockNoteEditor, type Block, type PartialBlock } from '@blocknote/core'
import '@blocknote/core/fonts/inter.css'
import { BlockNoteView } from '@blocknote/mantine'
import '@blocknote/mantine/style.css'
import { FormattingToolbar } from '@blocknote/react'
import './editor.css'
import React from 'react'

// Props interface
interface EditorProps {
  onChange: (editor: Block[]) => void
  initialContent: PartialBlock[]  | undefined | "loading"
  editable: boolean
}

// Uploads a file to tmpfiles.org and returns the URL to the uploaded file.
async function uploadFile(file: File) {
  const body = new FormData()
  body.append('file', file)

  const ret = await fetch('https://tmpfiles.org/api/v1/upload', {
    method: 'POST',
    body: body
  })
  return (await ret.json()).data.url.replace('tmpfiles.org/', 'tmpfiles.org/dl/')
}

const Editor = ({ onChange, initialContent, editable = true }: EditorProps) => {
  // Creates a new editor instance.

  // const editor = useCreateBlockNote({
  //   initialContent: initialContent || [{ type: 'paragraph', content: '' }],
  //   uploadFile
  // })

  const editor = React.useMemo(() => {
    if (initialContent === "loading") {
      return undefined;
    }
    return BlockNoteEditor.create({ initialContent, uploadFile });
  }, [initialContent]);
 
  if (editor === undefined) {
    return "載入中";
  }

  // Renders the editor instance using a React component.
  return (
    // 強制使用 light theme
    <BlockNoteView
      editor={editor}
      onChange={() => onChange(editor.document)}
      editable={editable}
      theme='light'
    >
      <div className='msi-editor-toolbar'>
        <FormattingToolbar />
      </div>
    </BlockNoteView>
  )
}

export default Editor
