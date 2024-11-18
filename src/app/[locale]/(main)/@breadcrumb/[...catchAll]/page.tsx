import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import React from 'react'
import type { ReactElement } from 'react'
import { getRouteTitle } from '@/config/routes'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

export default function BreadcrumbSlot({ params }: { params: { catchAll: string[] } }) {
  const breadcrumbItems: ReactElement[] = []
  let breadcrumbPage: ReactElement = <></>
  const t = useTranslations('BreadcrumbPage')
  console.log('breadcrumb', params.catchAll)
  // 移除第一個元素 因為是 I18N 的語系
  params.catchAll.shift()
  console.log('breadcrumb', params.catchAll)
  for (let i = 0; i < params.catchAll.length; i++) {
    // 取得到目前位置的完整路徑陣列
    const pathArray = params.catchAll.slice(0, i + 1)
    // 產生正確的 href 路徑
    const href = `/${pathArray.join('/')}`
    const title = getRouteTitle(pathArray)

    if (i === params.catchAll.length - 1) {
      breadcrumbPage = (
        <BreadcrumbItem>
          <BreadcrumbPage className='capitalize'>{t(title)}</BreadcrumbPage>
        </BreadcrumbItem>
      )
    } else {
      breadcrumbItems.push(
        <React.Fragment key={href}>
          <BreadcrumbItem>
            <BreadcrumbLink className='capitalize' asChild>
              <Link href={href}>{t(title)}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
        </React.Fragment>
      )
    }
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href='/'>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {breadcrumbItems}
        {breadcrumbPage}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
