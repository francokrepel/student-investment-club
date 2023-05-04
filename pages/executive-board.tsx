import Header from '../components/Header';
import { AiFillLinkedin } from 'react-icons/ai';
import Image from 'next/image'

const executiveBoardMembers = [
    {
      // PRESIDENT
      name: 'Jagger Liguori',
      position: 'President',
      email: 'jagger.liguori@ufl.edu',
      linkedin: 'https://www.linkedin.com/in/jagger-liguori/',
      image: '/jagger.jpg',
    },
    {
      // TREASURER
      name: 'Adam Weinberg',
      position: 'Treasurer',
      email: 'adamweinberg@ufl.edu',
      linkedin: 'https://www.linkedin.com/in/adam-weinberg-417ab1191/',
      image: '/adam.jpeg',
    },
    {
      // VICE PRESIDENT
      name: 'Olivia Giraldo',
      position: 'Vice President',
      email: 'oliviagiraldo@ufl.edu',
      linkedin: 'https://www.linkedin.com/in/oliviamgiraldo/',
      image: '/olivia.jpg',
    },
    {
      // SECRETARY
      name: 'Jordon Neal',
      position: 'Secretary',
      email: 'jordon.neal@ufl.edu',
      linkedin: 'https://www.linkedin.com/in/jordonneal/',
      image: '/jordon.jpeg',
    },
    {
      // RECRUITMENT
      name: 'Jonathon Goldberg',
      position: 'Recruitment Co-Director',
      email: 'jonathangoldberg@ufl.edu',
      linkedin: 'https://www.linkedin.com/in/jonathon-goldberg/',
      image: '/jon.jpg',
    },
    {
      name: 'Jonathon Tibi',
      position: 'Recruitment Co-Director',
      email: 'jonathan.tibi@warrington.ufl.edu',
      linkedin: 'https://www.linkedin.com/in/jonathan-tibi/',
      image: '/jonathon_tibi.png',
    },
    {
      // HISTORIAN
      name: 'Lauren "Abby" Perini',
      position: 'Historian',
      email: 'lperini@ufl.edu',
      linkedin: 'https://www.linkedin.com/in/lauren-abby-perini/',
      image: '/abby.jpg',
    },
    // PROGRAMMING
    {
      name: 'Michael Rooth',
      position: 'Programming Co-Director',
      email: 'michaelrooth@ufl.edu',
      linkedin: 'https://www.linkedin.com/in/michael-rooth-a8505a214/',
      image: '/m_rooth.jpg',
    },
    {
      name: 'Kameron Lubben',
      position: 'Programming Co-Director',
      email: 'klubben@ufl.edu',
      linkedin: 'https://www.linkedin.com/in/kameronlubben/',
      image: '/kameron.jpeg',
    },
    {
      name: 'Devin Mohr',
      position: 'Programming Co-Director',
      email: 'd.mohr@ufl.edu',
      linkedin: 'https://www.linkedin.com/in/devinmohr/',
      image: '/devin.png',
    },
    // CURRENT EVENTS
    {
      name: 'Aaron Goffstein',
      position: 'Current Events',
      email: 'aarongoffstein@ufl.edu',
      linkedin: 'https://www.linkedin.com/in/aaron-goffstein-/',
      image: '/aaron.jpeg',
    },
    // WEBSITE
    {
      name: 'Franco Krepel',
      position: 'Website Developer',
      email: 'francokrepel@ufl.edu',
      linkedin: 'https://www.linkedin.com/in/franco-krepel-a241b21b7/',
      image: '/franco_krepel.jpeg',
    }
]
  
const ExecutiveBoard = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <section className="container mx-auto mt-12 px-4 md:px-0">
        <h1 className="text-4xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-100 to-teal-400">Executive Board</h1>
        <p className="text-lg text-center">Meet our executive board.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 py-10 lg:grid-cols-3 gap-8 px-4 md:px-0">
          {executiveBoardMembers.map((member) => (
            <div key={member.name} className="bg-gray-800 p-6 rounded-lg">
              <Image
                src={member.image!}
                alt={`${member.name}'s profile picture`}
                width={100}
                height={100}
                className="w-36 h-36 mx-auto mb-4 rounded-full"
              />
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-lg mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-teal-400">{member.position}</p>
              <p className="text-lg mb-2">{member.email}</p>
              <div className="mx-auto flex items-center">
                <a href={member.linkedin} 
                target="_blank" 
                rel="noopener noreferrer">
                <AiFillLinkedin className="text-5xl hover:text-blue-400"/>
                </a>
              </div>
            </div>
            
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExecutiveBoard;
