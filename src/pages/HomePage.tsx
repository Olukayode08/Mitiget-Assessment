import cybersecurityImg from '../assets/images.jpeg'
import riskImg from '../assets/images (3).jpeg'
import encryptionImg from '../assets/images (2).jpeg'
import GuideSection from '../components/GuideSection'

const guides = [
  {
    title: 'My View matters',
    description: 'Bring your views to our cyberspace portal and verify your thoughts',
    updatedAt: 'Updated 10 days ago',
    category: 'Cybersecurity',
    image: cybersecurityImg,
  },
  {
    title: 'My Business Risks',
    description:
      'All the business risks are covered under frameworks and standards',
    updatedAt: 'Updated 115 days ago',
    category: 'Risk',
    image: riskImg,
  },
  {
    title: 'Barriers and Brags',
    description:
      'The barriers are too good for management decision to be sound.',
    updatedAt: 'Updated 10 days ago',
    category: 'Encryption',
    image: encryptionImg,
  },
]

const HomePage =() =>{
  return (
    <div className='flex flex-col gap-5 p-5'>
      <GuideSection title='Latest Guides' guides={guides} />
      <GuideSection title='Expert Guides' guides={guides} />
    </div>
  )
}
export default HomePage