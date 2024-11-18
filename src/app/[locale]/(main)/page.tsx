import LocaleSwitcher from '@/components/LocaleSwitcher'
import { useTranslations } from 'next-intl'
// import {getTranslations} from 'next-intl/server';

// 伺服器渲染
// const HomePage = async() => {
const HomePage = () => {
  const t = useTranslations('HomePage')
  // const t = await getTranslations('HomePage')
  return (
    <div>
      <LocaleSwitcher />
      <h1>{t('title')}</h1>
    </div>
  )
}

export default HomePage
