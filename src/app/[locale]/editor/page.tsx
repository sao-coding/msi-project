'use client'

import Editor from '@/components/editor'
import { BlockNoteEditor, PartialBlock } from '@blocknote/core'
import React from 'react'

const EditorPage = () => {
  const [content, setContent] = React.useState<PartialBlock[]>([
    {
      type: 'paragraph',
      content: ''
    }
  ])

  React.useEffect(() => {
    const content = JSON.parse(
      localStorage.getItem('content') || '[{"type":"paragraph","content":""}]'
    )
    setContent(content)
  }, [])

  React.useEffect(() => {
    console.log(content)
  }, [content])

  const handleContentChange = (editor: BlockNoteEditor) => {
    console.log(editor.document)
    setContent(editor.document)
    localStorage.setItem('content', JSON.stringify(editor.document))
  }

  return (
    <div className='w-full flex'>
      <div className='shadow-md rounded-md p-4 w-full'>
        <Editor onChange={handleContentChange} initialContent={content} editable />
      </div>
      <div className='w-full'>
        <Editor
          onChange={handleContentChange}
          initialContent={JSON.parse(
            localStorage.getItem('content') || '[{"type":"paragraph","content":""}]'
          )}
          editable={false}
        />
      </div>
    </div>
  )
}

export default EditorPage
