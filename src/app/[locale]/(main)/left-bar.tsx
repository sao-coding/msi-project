'use client'

import { Link } from '@/i18n/routing'
import { usePathname } from '@/i18n/routing'

const LeftBar = () => {
  const pathname = usePathname()
  console.log('pathname', pathname)

  const selected = pathname === '/' ? 'a' : 'b'

  const list = {
    a: [
      {
        title: 'Home',
        href: '/',
        children: [
          {
            title: 'Sub Home',
            href: '/sub-home'
          }
        ]
      },
      {
        title: 'About',
        href: '/about'
      },
      {
        title: 'Contact',
        href: '/contact'
      }
    ],
    b: [
      {
        title: 'BHome',
        href: '/',
        children: [
          {
            title: 'BSub Home',
            href: '/sub-home'
          }
        ]
      },
      {
        title: 'BAbout',
        href: '/about'
      },
      {
        title: 'BContact',
        href: '/contact'
      }
    ]
  }

  //   展開隱藏子選單
  const handleToggle = (e: React.MouseEvent<HTMLLIElement>) => {
    // 尋找目前元素底下的第一個 ul
    const ul = e.currentTarget.querySelector('ul')
    if (ul) {
      ul.style.display = ul.style.display === 'block' ? 'none' : 'block'
    }
  }

  return (
    <div>
      <h1>LeftBar</h1>
      <ul>
        {list[selected].map((item, index) => (
          <li key={index} onClick={handleToggle} className='p-2 cursor-pointer'>
            {item.children ? (
              <>
                {item.title} 👉
                {/* 預設隱藏 */}
                <ul style={{ display: 'none' }}>
                  {item.children.map((child, index) => (
                    <li key={index}>
                      <Link href={child.href}>{child.title}</Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Link href={item.href}>{item.title}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LeftBar
