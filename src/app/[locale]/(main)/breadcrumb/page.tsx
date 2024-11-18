'use client'

const TitlePage = ({ params }: { params: { title: string } }) => {
  return (
    <div>
      <h1>title {params.title}</h1>
    </div>
  )
}

export default TitlePage
