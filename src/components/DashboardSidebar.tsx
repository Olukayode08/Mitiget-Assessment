import SidebarNavItem from './SidebarNavItem'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  ArrowExpandDiagonal02Icon,
} from '@hugeicons/core-free-icons'
import { useNavigate } from 'react-router'
import { NAV_CONFIG } from '../utils/constants'

interface SidebarProps {
  activePath: string
  isOpen: boolean
  close: () => void
  collapsed: boolean
  toggleCollapse: () => void
}

const DashboardSidebar = ({
  activePath,
  isOpen,
  close,
  collapsed,
  toggleCollapse,
}: SidebarProps) => {
  const navigate = useNavigate()

  const handleNavigate = (path: string) => {
    navigate(path)
    close()
  }

  return (
    <>
      {isOpen && (
        <div
          onClick={close}
          className='fixed inset-0 z-40 bg-black/40 backdrop-blur-[1px] lg:hidden'
        />
      )}

      <aside
        className={`
          fixed left-0 bg-white top-0 z-50 flex h-screen flex-col px-4
          transition-all duration-250 ease-in-out
          lg:translate-x-0
          ${collapsed ? 'w-16' : 'w-60'}
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className='flex items-center justify-between text-primary py-4'>
          {!collapsed && (
            <span className='text-base font-semibold '>My App</span>
          )}
          <button
            onClick={toggleCollapse}
            className={`rounded p-1 hover:bg-hover
              ${collapsed ? 'mx-auto' : ''}
            `}
          >
            <HugeiconsIcon
              icon={collapsed ? ArrowRight01Icon : ArrowLeft01Icon}
              size={18}
            />
          </button>
        </div>

        {!collapsed && (
          <div className='flex flex-col gap-5 border-b-2 border-border text-xs text-black px-3 py-4'>
            <p>Parent Company</p>
            <div className='flex items-center gap-2.5'>
              <HugeiconsIcon size={14} icon={ArrowExpandDiagonal02Icon} />
              <p> Sub company</p>
            </div>
          </div>
        )}

        <nav className='flex-1 overflow-y-auto overflow-x-hidden '>
          {NAV_CONFIG.map((section, index) => (
            <div key={index} className='py-3'>
              <div className='flex flex-col gap-1'>
                {section.items.map((item, i) => (
                  <SidebarNavItem
                    key={i}
                    item={item}
                    activePath={activePath}
                    onNavigate={handleNavigate}
                    collapsed={collapsed}
                  />
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div className='border-t-2 border-border py-2.5 pb-5'>
          <div
            className={`flex items-center ${
              collapsed ? 'justify-center' : 'gap-2.5'
            }`}
          >
            <div className='flex h-9 w-10 items-center justify-center rounded-full bg-primary-light text-sm font-bold text-primary'>
              SU
            </div>

            {!collapsed && (
              <main className='w-full flex items-center justify-between'>
                <div className='min-w-0 flex flex-col gap-2.5'>
                  <p className='text-xs font-medium text-black'>Samuel Idoho</p>
                  <p className='text-xs text-neutral-10 leading-tight'>Admin</p>
                </div>
                <button
                  className='flex items-center justify-center p-1 text-neutral-10 hover:bg-hover rounded'
                  aria-label='User options'
                >
                  <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
                </button>
              </main>
            )}
          </div>
        </div>
      </aside>
    </>
  )
}
export default DashboardSidebar
