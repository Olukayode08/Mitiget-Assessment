import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowDown01Icon } from '@hugeicons/core-free-icons'
import type { NavItem } from '../types/layout.types'

type SidebarNavItemProps = {
  item: NavItem
  activePath: string
  onNavigate: (path: string) => void
  openLabel: string | null
  setOpenLabel: (label: string | null) => void
  collapsed?: boolean
}

const SidebarNavItem = ({
  item,
  activePath,
  onNavigate,
  openLabel,
  setOpenLabel,
  collapsed = false,
}: SidebarNavItemProps) => {
  const hasSubPages = Boolean(item.subPages?.length)
  const isSubActive = hasSubPages
    ? item.subPages!.some((s) => s.path === activePath)
    : false
  const isDirectActive = !hasSubPages && item.path === activePath
  const isActive = isDirectActive || isSubActive

  const open = openLabel === item.label

  const handleClick = () => {
    if (hasSubPages) {
      if (!collapsed) setOpenLabel(open ? null : item.label)
    } else if (item.path) {
      onNavigate(item.path)
    }
  }

  return (
    <div>
      <button
        onClick={handleClick}
        title={collapsed ? item.label : undefined}
        className={`
          flex w-full items-center gap-2.5 rounded px-2.5 h-9 cursor-pointer
          text-xs transition-all duration-150
          ${collapsed ? 'justify-center' : ''}
          ${
            isActive
              ? 'bg-primary-light text-primary font-semibold'
              : 'hover:text-primary text-neutral-10 hover:bg-primary-light'
          }
        `}
      >
        <HugeiconsIcon icon={item.icon} size={16} className='text-primary' />

        {!collapsed && (
          <>
            <span className='flex-1 text-left'>{item.label}</span>
            {hasSubPages && (
              <HugeiconsIcon
                icon={ArrowDown01Icon}
                size={14}
                className={`transition-transform duration-200 text-primary ${
                  open ? 'rotate-180' : 'rotate-0'
                }`}
              />
            )}
          </>
        )}
      </button>

      {!collapsed && hasSubPages && open && (
        <div className='mt-0.5 mb-1 nav-submenu'>
          {item.subPages!.map((sub) => {
            const isSubItemActive = sub.path === activePath
            return (
              <button
                key={sub.path}
                onClick={() => onNavigate(sub.path)}
                className={`
                  block w-full cursor-pointer rounded pl-9 my-0.5 py-2 text-left
                  text-xs transition-all duration-150
                  ${
                    isSubItemActive
                      ? 'bg-primary-light text-primary font-semibold'
                      : 'text-neutral-10 hover:text-primary hover:bg-primary-light'
                  }
                `}
              >
                {sub.label}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default SidebarNavItem
