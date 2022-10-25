import { Fecha } from '../Fecha'
import { Navbar } from './navbar'
import { menu } from '../Contents/listmenu'
import { TabRedsocial } from '../Assistant/tabredsocial'
import { FormSearch } from './formSearch'

export const Header = () => {
  return (
    <header className="header fixed top-0 w-full h-fit z-50 overflow-hidden">
      <div className="flex flex-col justify-between max-h-56 bg-c-malva sm:h-14 sm:flex-row sm:items-center">
        <TabRedsocial />
        <Fecha />
        <FormSearch />
      </div>
      <Navbar list={menu} />
    </header>
  )
}
