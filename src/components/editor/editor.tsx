'use client'

import type { BlockNoteEditor, PartialBlock } from '@blocknote/core'
import '@blocknote/core/fonts/inter.css'
import { BlockNoteView } from '@blocknote/mantine'
import '@blocknote/mantine/style.css'
import { FormattingToolbar, useCreateBlockNote } from '@blocknote/react'
import './editor.css'

// Props interface
interface EditorProps {
  onChange: (editor: BlockNoteEditor) => void
  initialContent: PartialBlock[]
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

  const editor = useCreateBlockNote({
    initialContent: initialContent || [
      {
        type: 'paragraph',
        content: 'Welcome to this demo!'
      },
      {
        type: 'paragraph',
        content: 'Upload an image using the button below'
      },
      {
        type: 'image'
      },
      {
        type: 'paragraph'
      }
    ],
    uploadFile
  })

  // Renders the editor instance using a React component.
  return (
    // 強制使用 light theme
    <BlockNoteView
      editor={editor}
      onChange={() => onChange(editor)}
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
