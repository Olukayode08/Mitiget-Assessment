import { HugeiconsIcon } from '@hugeicons/react'
import {
  ArrowRight01Icon,
  Notification01Icon,
  Settings01Icon,
  ArrowDown01Icon,
  Alert01Icon,
  ManagerIcon,
} from '@hugeicons/core-free-icons'
import Dropdown from './Dropdown'

type HeaderProps = {
  open: () => void
  collapsed: boolean
}

const DashboardHeader = ({ open, collapsed }: HeaderProps) => {
  return (
    <header
      className={`
        fixed right-0 top-0 z-30 flex h-16 items-center justify-between shadow-md
        border-b-[0.5px] border-border bg-white px-4
        transition-all duration-250 ease-in-out
        ${collapsed ? 'left-16' : 'left-60'}
        max-lg:left-0
      `}
    >
      <div className='flex items-center gap-3'>
        <button
          onClick={open}
          className='flex items-center cursor-pointer justify-center p-1.5 text-primary transition-colors hover:bg-primary-light lg:hidden'
        >
          <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
        </button>

        <div className=' hidden lg:flex items-center'>
          <input
            type='text'
            placeholder='Search navigation...'
            className='
              h-9 w-150 rounded-full border-[1.5px] border-border
              px-2.5 text-xs text-neutral-10 placeholder:text-neutral-10/50
              outline-none focus:border-primary 
            '
          />
        </div>
      </div>

      <div className='flex items-center gap-4'>
        <button className='flex items-center justify-center p-1.5 cursor-pointer text-neutral-10 bg-white shadow-md hover:bg-primary-light rounded-full'>
          <HugeiconsIcon icon={Settings01Icon} size={22} />
        </button>

        <button className='relative flex items-center justify-center p-1.5 cursor-pointer text-neutral-10 bg-white shadow-md hover:bg-primary-light rounded-full'>
          <HugeiconsIcon icon={Notification01Icon} size={24} />
          <span className='absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[9px] font-semibold text-white'>
            80
          </span>
        </button>

        <Dropdown
          align='end'
          className='w-full'
          menuClassName='w-[150px] mt-3.5 shadow-sm'
          menu={({ close }) => (
            <div className='flex text-sm flex-col p-2'>
              <div
                onClick={() => {
                  close()
                }}
                className='flex gap-2.5 items-center p-2 hover:bg-primary-light cursor-pointer rounded'
              >
                <HugeiconsIcon
                  icon={ManagerIcon}
                  size={16}
                  className='text-primary'
                />
                <p className='text-sm hover:text-primary text-neutral-10'>
                  Administration
                </p>
              </div>
              <div
                onClick={() => close()}
                className='flex gap-2.5 items-center p-2 hover:bg-primary-light cursor-pointer rounded'
              >
                <HugeiconsIcon
                  icon={Alert01Icon}
                  size={16}
                  className='text-primary'
                />
                <p className='text-sm hover:text-primary text-neutral-10'>
                  Assignments
                </p>
              </div>
            </div>
          )}
        >
          <div className='flex items-center gap-1.5 px-2 py-1 cursor-pointer text-neutral-10 bg-white shadow-md  rounded-full'>
            <p className=' rounded-full bg-primary-light p-1.5 text-xs font-bold text-primary'>
              SU <span className='mx-[0.5px]'> | </span>Admin
            </p>

            <HugeiconsIcon
              icon={ArrowDown01Icon}
              size={16}
              className='text-neutral-10'
            />
          </div>
        </Dropdown>
      </div>
    </header>
  )
}
export default DashboardHeader
