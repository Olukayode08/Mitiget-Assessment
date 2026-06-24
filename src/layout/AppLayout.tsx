import { Outlet, useLocation } from 'react-router'
import DashboardHeader from '../components/DashboardHeader'
import DashboardSidebar from '../components/DashboardSidebar'
import { useSidebar } from '../hooks/useSidebar'

function getPageLabel(pathname: string): string {
  const map: Record<string, string> = {
    '/home': 'Home',
  }
  return map[pathname] ?? 'Home'
}

const AppLayout = () => {
  const { pathname } = useLocation()
  const pageLabel = getPageLabel(pathname)
  const { isOpen, open, close, collapsed, toggleCollapse } = useSidebar()

  return (
    <div className='flex min-h-screen bg-border/50'>
      <DashboardSidebar
        activePath={pathname}
        collapsed={collapsed}
        isOpen={isOpen}
        close={close}
        toggleCollapse={toggleCollapse}
      />

      <div
        className={`flex min-w-0 flex-1 flex-col transition-all duration-250 ease-in-out
          ${collapsed ? 'lg:ml-16' : 'lg:ml-60'}
        `}
      >
        <DashboardHeader collapsed={collapsed} open={open} />
        <main className='flex-1 pt-20 p-6'>
          <div className='rounded-2xl bg-white px-3 py-1'>
            <p className='text-xs font-medium text-primary'>{pageLabel}</p>
          </div>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
export default AppLayout
