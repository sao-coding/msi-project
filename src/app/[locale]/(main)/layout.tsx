import { Link } from '@/i18n/routing'
import LeftBar from './left-bar'

export default function RootLayout({
  breadcrumb,
  children
}: Readonly<{
  breadcrumb: React.ReactNode
  children: React.ReactNode
}>) {
  const link = [
    {
      title: 'Home',
      href: '/'
    },
    {
      title: 'Test',
      href: '/test'
    }
  ]
  return (
    <>
      <div className='flex gap-2'>
        {link.map((item, index) => (
          <Link key={index} href={item.href} className='text-blue-500 underline'>
            {item.title} 點擊切換頁面
          </Link>
        ))}
      </div>
      <div className='flex'>
        <LeftBar />
        <div className='border'>
          <h1 className='text-2xl'>這是麵包屑{breadcrumb}</h1>
          {children}
        </div>
      </div>
    </>
  )
}
