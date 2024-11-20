'use client'

import Editor from '@/components/editor'
import { Block, PartialBlock } from '@blocknote/core'
import React from 'react'
const loadContent = async () => {
  const content = localStorage.getItem('content')
  return content ? JSON.parse(content) : undefined
}
const EditorPage = () => {
  const [content, setContent] = React.useState<PartialBlock[] | undefined | 'loading'>('loading')

  React.useEffect(() => {
    loadContent().then((content) => {
      setContent(content)
    })
  }, [])

  // React.useEffect(() => {
  //   console.log("content", content)
  // }, [content])

  const handleContentChange = async (content: Block[]) => {
    localStorage.setItem('content', JSON.stringify(content))
  }

  return (
    <div className='w-full flex'>
      <div className='shadow-md rounded-md p-4 w-full'>
        <Editor onChange={handleContentChange} initialContent={content} editable />
      </div>
      <div className='w-full'>
        <pre>{JSON.stringify(content, null, 2)}</pre>
      </div>
    </div>
  )
}

export default EditorPage
