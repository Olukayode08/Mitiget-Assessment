import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight01Icon } from '@hugeicons/core-free-icons'

interface Guide {
  title: string
  description: string
  updatedAt: string
  category: string
  image: string
  onClick?: () => void
}

interface GuideSectionProps {
  title: string
  guides: Guide[]
  onViewMore?: () => void
}

const GuideSection = ({ title, guides, onViewMore }: GuideSectionProps) => {
  return (
    <div className='rounded-xl flex flex-col gap-5 shadow-md bg-white p-6'>
      <div className='flex items-center justify-between'>
        <h2 className='text-lg font-semibold text-black'>{title}</h2>
        {title === 'Latest Guides' && (
          <button
            onClick={onViewMore}
            className='flex items-center gap-1 cursor-pointer text-xs font-medium text-primary hover:underline hover:underline-offset-2'
          >
            <span>View more</span>
            <HugeiconsIcon icon={ArrowRight01Icon} size={13} />
          </button>
        )}
      </div>

      <div className='grid grid-cols-1 gap-5  md:grid-cols-2 xl:grid-cols-3'>
        {guides.map((guide, i) => (
          <div
            key={i}
            onClick={guide.onClick}
            className='flex flex-col rounded-xl cursor-pointer border border-border'
          >
            <div className='relative bg-primary-light/40 py-5 rounded-t-xl'>
              <img
                src={guide.image}
                alt={guide.title}
                className='w-[70%] mx-auto bg-primary-light h-44 object-contain p-4'
              />
              <span className='absolute top-3 right-3 rounded-full z-10 bg-primary-light px-3 py-0.5 text-[10px] font-medium text-black'>
                {guide.category}
              </span>
            </div>

            <div className='flex flex-1 flex-col gap-1.5 p-4'>
              <h3 className='text-sm font-semibold text-black '>
                {guide.title}
              </h3>
              <p className='text-sm text-neutral-10'>{guide.description}</p>
              <div className='mt-auto flex items-center justify-between pt-3'>
                <span className='text-[11px] text-neutral-20'>
                  {guide.updatedAt}
                </span>
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  size={14}
                  className='text-primary '
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GuideSection
