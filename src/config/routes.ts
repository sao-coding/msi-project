// config/routes.ts

interface RouteConfig {
  title: string
  children?: {
    [key: string]: RouteConfig
  }
}

const routeConfig: { [key: string]: RouteConfig } = {
  breadcrumb: {
    title: 'breadcrumb',
    children: {
      test: {
        title: 'test',
        children: {
          test2: {
            title: 'test2',
            children: {
              test3: {
                title: 'test3'
              },
              test4: {
                title: 'test4'
              }
            }
          }
        }
      }
    }
  },
  // 其他路由配置
  products: {
    title: '產品列表',
    children: {
      electronics: {
        title: '電子產品',
        children: {
          phones: { title: '手機' },
          laptops: { title: '筆電' }
        }
      }
    }
  },
  about: {
    title: '關於我們',
    children: {
      contact: { title: '聯絡我們' }
    }
  }
}

export const getRouteTitle = (path: string[]): string => {
  let current = routeConfig
  let title = ''

  for (const segment of path) {
    if (!current[segment]) {
      return 'unknown' // 如果找不到配置，返回原始路徑名稱
    }
    title = current[segment].title
    current = current[segment].children || {}
  }

  return title
}

export default routeConfig
